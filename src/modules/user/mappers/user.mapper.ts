import { PhotoEntity } from '@/global/entities';
import { AccountEntity } from '@/modules/account/entities/account.entity';
import { ProfileEntity } from '@/modules/account/entities/profile.entity';
import { UserEntity } from '@/modules/user/entities/user.entity';

export class UserMapper {
  static accountAndProfileToUser(account: AccountEntity, profile: ProfileEntity): UserEntity {
    return {
      id: profile.id,
      email: account.emailAddress,
      name: profile.name.first,
      avatar: {
        content: profile.avatar,
      } as PhotoEntity,
    };
  }
}
