export interface IAccountTransactionsResponse {
  accountName: string;
  accountNumber: string;
  cci: string;
  symbol: string;
  availableBalance: number;
  countableBalance: number;
  deferredBalance: number;
  retainedBalance: number;
  init: number;
  limit: number;
  total: number;
  currentPage: number;
  pages: number;
  accountTransactions: Array<IAccountTransactions>;
}

export interface IAccountTransactions {
  date: string;
  dateValue: string;
  operationNumber: string;
  description: string;
  channel: string;
  amount: number;
  balance: number;
}
