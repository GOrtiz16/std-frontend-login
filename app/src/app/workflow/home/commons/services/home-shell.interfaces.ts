export interface IPerson {
  givenName: string;
  fullName: string;
}

export interface ICurrencyExchange {
  exchangeRateSale: number;
  exchangeRateBuy: number;
}

export interface ICompany {
  fullName: string;
  customerId: string; // ejm: '20100065038' (Company RUC),
  customerIdType: number; // ejm: 2 (RUC)
  isHolding: boolean;
  profiles: Array<any>;
}

export interface IProfile {
  roles: string;
  key: number;
  name: string;
}

export interface IHomeSessionResponse {
  person: IPerson;
  currencyExchange: ICurrencyExchange;
  customers: Array<ICompany>;
  date: string;
  time: string;
}

export interface IHomeShellResponseError {
  code: string;
  message: string;
  level: string;
  description: string;
}
