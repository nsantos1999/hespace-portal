export const ACCOUNT_ENDPOINTS = {
  getAllAccounts: '/accounts',
  getAccountProfiles: (accountId: number) => `accounts/${accountId}/profiles`,
};
