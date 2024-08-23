interface IPassword {
  selectedKey: string[];
}

export interface IChangePasswordRQ {
  seed: string;
  password: IPassword;
  accessToken: string;
  codeVerification: string;
}

export interface IChangePasswordRP {
  [key: string]: string;
}
