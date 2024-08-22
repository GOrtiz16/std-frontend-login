export interface ILoginUserRequest {
  seed: string;
  userCredentialId: string;
  password: {};
  rememberUser: boolean;
  recaptcha: string;
}