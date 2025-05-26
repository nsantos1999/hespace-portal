import { UserEntity } from '@/modules/user/entities/user.entity';

export interface AuthLoginDto {
  email: string;
  password: string;
}

export interface AuthUserDto {
  user: UserEntity;
  token: string;
}
