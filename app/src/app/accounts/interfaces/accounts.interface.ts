export interface IAccountsResponse {
  accounts: Array<IAccount>;
}

export interface IAccount {
  accountType: string;
  accountName: string;
  accountCurrency: string;
  accountNumber: string;
  currencyType: string;
  symbol: string;
  availableBalance: number;
  countableBalance: number;
  deferredBalance: number;
  retainedBalance: number;
}
