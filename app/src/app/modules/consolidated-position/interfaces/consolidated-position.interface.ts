export interface IAccount {
  accountType: string;
  accountName: string;
  accountCurrency: string;
  accountNumber: string;
  total: number;
  symbol: string;
}

export interface IAccountCategory {
  totalCurrency: string;
  totalCategory: number;
  quantity: any;
  symbol: string;
  accountList: IAccount[];
}

export interface ISummary {
  quantity: any;
  dollarSymbol: string;
  solesSymbol: string;
  totalDollars: number;
  totalSoles: number;
  tc: string;
}

export interface IBalance {
  accounts: IAccountCategory[];
  summary: ISummary;
}

export interface IInvestment {
  productsCategory: IProductCategory[];
  summary: ISummary;
}

export interface IProduct {
  productName: string;
  total: number;
  symbol: string;
}

export interface IProductCategory {
  totalCurrency: string;
  totalCategory: number;
  quantity: any;
  symbol: string;
  productList: IProduct[];
}

export interface IDirectDebt {
  productsCategory: IProductCategory[];
  summary: ISummary;
}

export interface IUndirectDebt {
  productsCategory: IProductCategory[];
  summary: ISummary;
}

export interface IDebt {
  directDebt: IDirectDebt;
  undirectDebt: IUndirectDebt;
}

export interface IGuaranteeProduct {
  productName: string;
  total: number;
  symbol: string;
}

export interface IGuaranteeProductCategory {
  totalCurrency: string;
  totalCategory: number;
  quantity: any;
  symbol: string;
  productList: IGuaranteeProduct[];
}

export interface IGuarantee {
  productsCategory: IGuaranteeProductCategory[];
  summary: ISummary;
}

export interface IConsolidatedResponse {
  balance: IBalance;
  investments: IInvestment;
  debt: IDebt;
  guarantee: IGuarantee;
}
