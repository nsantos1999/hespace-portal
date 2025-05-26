import { useMutation } from '@tanstack/react-query';
import { AuthApi } from '../api/auth.api';

export function useGetAuthAccount() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: AuthApi.getAuthAccount,
  });

  return {
    getAuthAccount: mutateAsync,
    isLoading: isPending,
  };
}
