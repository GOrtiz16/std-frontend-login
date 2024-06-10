  export interface IPerson {
    personName: string;
    givenName: string;
    fullName: string;
  }
  
  export interface ICurrencyPriceReference {
    currency: string;
    salesPrice: number;
    buyPrice: number;
  }
  
  export interface ICompany {
    company: string;
    fullName: string;
    isHolding: boolean;
  }
  
  export interface IProfile {
    roles: string;
    key: number;
    name: string;
  }
  
  export interface IHomeShellResponseOK {
    person: IPerson;
    currencyPriceReference: ICurrencyPriceReference;
    companies: ICompany;
    profiles: IProfile;
  }

  export interface IHomeShellResponseError {
    code: string;
    message: string;
    level: string;
    description: string;
}

  
 