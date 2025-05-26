'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AuthContext, AuthContextProps } from '../contexts/auth.context';
import { UserEntity } from '@/modules/user/entities/user.entity';
import { AuthLoginDto } from '../dtos/auth-login.dto';
import { api } from '@/global/configs/api.config';
import { deleteCookie, getCookie, setCookie } from '@/global/utils/cookies.utils';
import { CookiesKeys } from '@/global/constants/enums/cookies-keys.enum';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { useLogin } from '../hooks/useLogin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LoadingScreen } from '../../../global/components/LoadingScreen';
import { useGetAuthAccount } from '../hooks/useGetAuthAccount';
import { useGetAuthProfile } from '../hooks/useGetAuthProfile';
import { UserMapper } from '@/modules/user/mappers/user.mapper';
import { useRefreshToken } from '../hooks/useLoadSession';
import { LoginResponseDto } from '../@types/login-response.dto';
import { AuthApi } from '../api/auth.api';

const TIME_FALLBACK_TO_REQUEST = 8 * 1000;

interface AuthProviderProps extends React.PropsWithChildren {}

export function FakeAuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<UserEntity | null>(null);
  const [loadStartSession, setLoadStartSession] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const { login: handleLogin, isLoading: isLoadingLogin } = useLogin();
  const { refreshToken: handleRefreshToken, isLoading: isRefreshingToken } = useRefreshToken();
  const { getAuthAccount: handleGetAuthAccount, isLoading: isGettingAuthAccount } =
    useGetAuthAccount();
  const { getAuthProfile: handleGetAuthProfile, isLoading: isGettingAuthProfile } =
    useGetAuthProfile();

  const isLogged = useMemo(() => {
    return authUser !== null;
  }, [authUser]);

  // MOCK Method
  const login = async (auth: AuthLoginDto) => {
    try {
      const authUserResult = (await handleLogin(auth)) as LoginResponseDto;

      if (!authUserResult) {
        throw new Error('User not found');
      }

      console.log(authUserResult);

      await handleToken(authUserResult.token);

      setAuthUser(authUserResult.user);
      toast('Bem-vindo!', { type: 'success' });
    } catch (err) {
      console.error(err);
      toast('Email ou senha inválidos.', { type: 'error' });
    }
  };

  const logout = async () => {
    setAuthUser(null);
    await handleToken(null);
  };

  const loadSession = async () => {
    if (isLogged) {
      return;
    }

    const token = await getCookie(CookiesKeys.ACCESS_TOKEN);

    if (!token) {
      return;
    }

    await handleToken(token.value);

    try {
      const authData = await AuthApi.loadSession();

      if (!authData.token) {
        throw new Error('Expired session');
      }

      await handleToken(authData.token);

      setAuthUser(authData.user);
    } catch (err) {
      await handleToken(null);
      toast('Sua sessão expirou...', { type: 'error' });
    }
  };

  const handleToken = async (token: string | null) => {
    const clearTokenTimeout = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
    if (token) {
      await setCookie(CookiesKeys.ACCESS_TOKEN, token);
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      const decoded = jwtDecode(token);
      const expirationTime = decoded.exp ?? 0 * 1000;
      const currentTime = Date.now();
      const timeUntilExpiry = expirationTime - currentTime;

      const remainingTimeToReloadSession = timeUntilExpiry - TIME_FALLBACK_TO_REQUEST;

      if (remainingTimeToReloadSession > 0) {
        clearTokenTimeout();
        timeoutIdRef.current = setTimeout(() => {
          loadSession();
        }, remainingTimeToReloadSession);
      }
    } else {
      clearTokenTimeout();
      await deleteCookie(CookiesKeys.ACCESS_TOKEN);
      delete api.defaults.headers['Authorization'];
    }
  };

  useEffect(() => {
    loadSession().finally(() => {
      setTimeout(() => setLoadStartSession(true), 1000);
    });
  }, []);

  const memoizedValues: AuthContextProps = useMemo(
    () => ({
      authUser,
      isLogged,
      login,
      logout,
      isLoadingLogin,
      isRefreshingToken,
      isReloadingSession: !loadStartSession,
    }),
    [authUser, isLoadingLogin, isRefreshingToken, isLogged, loadStartSession]
  );

  if (!loadStartSession) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={memoizedValues}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
        {children}
      </GoogleOAuthProvider>
    </AuthContext.Provider>
  );
}
