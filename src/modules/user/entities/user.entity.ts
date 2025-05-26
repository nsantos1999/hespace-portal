import { PhotoEntity } from '@/global/entities';

export interface UserEntity {
  id: number;
  name: string;
  email: string;
  avatar: PhotoEntity;
}
