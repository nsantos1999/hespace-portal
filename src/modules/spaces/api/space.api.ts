import { api } from '@/global/configs/api.config';
import { SPACES_ENDPOINTS } from './constants/endpoints.constants';
import { SpaceEntity } from '@/global/entities';

import './mock/space.api.mock';

export class SpaceApi {
  static async findAll() {
    const { data } = await api.get<SpaceEntity[]>(SPACES_ENDPOINTS.findAll);

    return data;
  }

  static async findOne(id: number) {
    const { data } = await api.get<SpaceEntity>(SPACES_ENDPOINTS.findOne(id));

    return data;
  }
}
