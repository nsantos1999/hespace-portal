'use client';

import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingScreen } from '@/global/components/LoadingScreen';

interface AuthGuardProps extends React.PropsWithChildren {}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isLogged, isReloadingSession } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged && !isReloadingSession) {
      router.replace('/');
    }
  }, [isLogged, isReloadingSession]);

  if (!isLogged) {
    return <LoadingScreen />;
  }

  return children;
}
