import { api } from '@/global/configs/api.config';
import { AUTH_ENDPOINTS } from './constants/endpoints.constants';
import { LoginDto } from '../@types/login.dto';
import { AccountApi } from '@/modules/account/api/account.api';
import { AxiosResponseHeaders } from 'axios';

import './mock/login.api.mock';

export class AuthApi {
  /**
   * Real login method
   * uncomment this method to use the real API
   */
  // static async login({ email, password }: LoginDto) {
  //   const { headers } = await api.post(AUTH_ENDPOINTS.login, {
  //     account: {
  //       emailAddress: email,
  //       password,
  //     },
  //   });

  //   const token = AuthApi.getTokenByHeader(headers as AxiosResponseHeaders);

  //   if (!token) {
  //     throw new Error('Token not found');
  //   }

  //   return {
  //     token,
  //   };
  // }

  /**
   * MOCKED Method
   */
  static async login({ email, password }: LoginDto) {
    const { data } = await api.post(AUTH_ENDPOINTS.login, {
      account: {
        emailAddress: email,
        password,
      },
    });

    return data;
  }

  static async getAuthProfile(accountId: number) {
    const profiles = await AccountApi.getAccountProfiles(accountId);

    // Pegando provisioriamente o primeiro
    return profiles[0];
  }

  static async getAuthAccount() {
    const accounts = await AccountApi.getAccounts();

    // Pegando provisioriamente o primeiro
    return accounts[0];
  }

  static async loadSession() {
    const { data } = await api.put(AUTH_ENDPOINTS.loadSession);

    return data;
  }

  static async refreshToken() {
    const { headers } = await api.put(AUTH_ENDPOINTS.refreshToken);

    const token = AuthApi.getTokenByHeader(headers as AxiosResponseHeaders);

    return { token };
  }

  private static getTokenByHeader(headers: AxiosResponseHeaders) {
    const token = headers['X-Session-Token'] || headers['x-session-token'];

    return token;
  }
}
