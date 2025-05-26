import { api } from '@/global/configs/api.config';
import { ACCOUNT_ENDPOINTS } from './constants/endpoints.constants';
import { AccountEntity } from '../entities/account.entity';
import { ProfileEntity } from '../entities/profile.entity';

export class AccountApi {
  static async getAccounts(): Promise<AccountEntity[]> {
    const { data } = await api.get<AccountEntity[]>(ACCOUNT_ENDPOINTS.getAllAccounts);

    return data;
  }

  static async getAccountProfiles(accountId: number): Promise<ProfileEntity[]> {
    const { data } = await api.get<ProfileEntity[]>(
      ACCOUNT_ENDPOINTS.getAccountProfiles(accountId)
    );

    return data;
  }
}
