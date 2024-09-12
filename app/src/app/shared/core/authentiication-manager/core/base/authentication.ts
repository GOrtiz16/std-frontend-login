import { AuthToken } from "./auth-token";

type AuthTokenGeneric<T = AuthToken> = new(raw: any, expDate?: Date) => T;

export class AuthTokenFactory {
	createToken<T extends AuthToken>(tokenClass: AuthTokenGeneric<T>, token: any, createdAt?: Date): AuthToken {
		return new tokenClass(token, createdAt);
	}
}
