import { UserEntity } from '@/modules/user/entities/user.entity';

export interface LoginResponseDto {
  token: string;
  user: UserEntity;
}
