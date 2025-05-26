import { useQuery } from '@tanstack/react-query';
import { SPACES_QUERY_KEYS } from '../constants/query-key.constants';
import { SpaceApi } from '../api/space.api';

export function useSpaceDetails(id: string) {
  const { data, isPending } = useQuery({
    queryKey: [SPACES_QUERY_KEYS.spaceDetails, id],
    queryFn: () => SpaceApi.findOne(Number(id)),
  });

  return {
    space: data,
    isLoading: isPending,
  };
}
