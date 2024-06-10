export interface IAuthenticationResponse {
  credentialOwner: {
    isFirstLogin: boolean;
    retry: number;
    success: boolean;
  };
  sessionToken: {
    auth: string;
    refresh: string;
  };
}

export interface IAuthenticationResponseError {
    code: string;
    message: string;
    level: string;
    description: string;
}


export interface IChannelInfoResponseError {
  code: string;
  message: string;
  level: string;
  description: string;
}
export interface IChannelInfoResponseErrors {
  errors: IChannelInfoResponseError[]
}
