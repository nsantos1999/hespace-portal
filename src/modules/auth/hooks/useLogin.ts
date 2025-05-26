import { useMutation } from '@tanstack/react-query';
import { AuthApi } from '../api/auth.api';

export function useLogin() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: AuthApi.login,
  });

  return {
    login: mutateAsync,
    isLoading: isPending,
  };
}
