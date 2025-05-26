import { SPACE_MOCK } from './space.mock';
import { MockAdapterInstance } from '@/global/configs/axios-mock.config';
import { SPACES_ENDPOINTS } from '../constants/endpoints.constants';
import { SpaceEntity } from '@/global/entities';
import { SPACES_MOCK } from './spaces.mock';

MockAdapterInstance.onGet(SPACES_ENDPOINTS.findAll).reply<SpaceEntity[]>(200, SPACES_MOCK);

SPACES_MOCK.forEach((space) => {
  MockAdapterInstance.onGet(SPACES_ENDPOINTS.findOne(space.identifier)).reply<SpaceEntity>(
    200,
    SPACE_MOCK
  );
});
