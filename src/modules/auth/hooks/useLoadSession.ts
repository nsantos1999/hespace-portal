import { useMutation } from '@tanstack/react-query';
import { AuthApi } from '../api/auth.api';

export function useRefreshToken() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: AuthApi.refreshToken,
  });

  return {
    refreshToken: mutateAsync,
    isLoading: isPending,
  };
}
