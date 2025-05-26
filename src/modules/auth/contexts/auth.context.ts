import { UserEntity } from '@/modules/user/entities/user.entity';
import { createContext } from 'react';
import { AuthLoginDto } from '../dtos/auth-login.dto';

export interface AuthContextProps {
  authUser: UserEntity | null;
  isLogged: boolean;
  isLoadingLogin: boolean;
  isReloadingSession: boolean;
  logout(): void;
  login(authDto: AuthLoginDto): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);
