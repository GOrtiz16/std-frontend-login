import { Base64 } from 'js-base64';
import { AuthToken } from './auth-token';

export function decodeJwtPayload(payload: string): any {
	const parts = payload.split('.');

	if (parts.length !== 3) {
		throw new Error(
			`El payload ${payload} no es un JWT payload Valido, debe estar compuesto por tres partes`);
	}

	let decoded;
	try {
		decoded = Base64.decode(parts[1]);
	} catch (e) {
		throw new Error(
			`El payload ${payload} no es un JWT payload Valido, no puede ser parseado`);
	}

	if (!decoded) {
		throw new Error(
			`El payload ${payload} no es un JWT payload Valido, no puede ser decodificado`);
	}

	return JSON.parse(decoded);
}

export class JwtToken extends AuthToken {
	static strategyName = 'STD_JWT_TOKEN_STRATEGY';

	override parsePayload(): void {
		if (!this.token) {
			throw new Error('Token not found.');
		}
		this.payload = decodeJwtPayload(this.token);
	}

	override getExpirationDate(): Date | null {
		const decoded = this.getPayload();
		if (decoded && !decoded.hasOwnProperty('exp')) {
			return null;
		}
		const date = new Date();
		date.setUTCSeconds(decoded.exp);

		return date;
	}

	override isValid(): boolean {
		let expirationDate = this.getExpirationDate();
		if (expirationDate) {
			return super.isValid() && new Date() < expirationDate;
		}

		return false;
	}

	override toString(): string {
		// tslint:disable-next-line: no-extra-boolean-cast
		return !!this.token ? this.token : '';
	}
}
