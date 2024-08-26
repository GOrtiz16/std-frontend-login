abstract class AuthTokenAbstract {

	protected payload: any = null;

	abstract getValue(): string;
	abstract isValid(): boolean;
	abstract getCreatedAt(): any;
	abstract getExpirationDate(): any;

	getPayload(): any {
		return this.payload;
	}
}

export class AuthToken extends AuthTokenAbstract {

	constructor(
		protected readonly token: any,
		protected createdAt?: Date,
	) {
		super();
		this.parsePayload();
		this.createdAt = createdAt ? createdAt : new Date();
	}

	protected parsePayload(): any {
		this.payload = null;
	}

	getValue(): string {
		return this.token;
	}

	isValid(): boolean {
		return !!this.getValue();
	}

	getCreatedAt(): any {
		return this.createdAt;
	}

	getExpirationDate(): any {
		return null;
	}

	override toString(): string {
		// tslint:disable-next-line: no-extra-boolean-cast
		return !!this.token ? this.token : '';
	}
}
