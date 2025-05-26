import { useQuery } from '@tanstack/react-query';
import { SPACES_QUERY_KEYS } from '../constants/query-key.constants';
import { SpaceApi } from '../api/space.api';

export function useListSpaces() {
  const { data, isPending } = useQuery({
    queryKey: [SPACES_QUERY_KEYS.spaceList],
    queryFn: SpaceApi.findAll,
  });

  return {
    spaces: data ?? [],
    isLoading: isPending,
  };
}
