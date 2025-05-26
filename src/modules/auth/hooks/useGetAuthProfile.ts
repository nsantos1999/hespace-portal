import { useMutation } from '@tanstack/react-query';
import { AuthApi } from '../api/auth.api';

export function useGetAuthProfile() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: AuthApi.getAuthProfile,
  });

  return {
    getAuthProfile: mutateAsync,
    isLoading: isPending,
  };
}
