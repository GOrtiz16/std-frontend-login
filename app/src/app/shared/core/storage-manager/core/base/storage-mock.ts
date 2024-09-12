export class StorageMock {
	store: Map<undefined, undefined>;

	constructor() {
		this.store = new Map();
	}

	ready() {
		return true;
	}

	clear() {
		this.store.clear();
	}

	getItem(key: any) {
		return this.store.get(key) || null;
	}

	key(key: any) {
		return this.store.has(key) ? key : undefined;
	}

	length() {
		return this.store.size || 0;
	}

	setItem(key: any, value: any) {
		this.store.set(key, value);
	}

	removeItem(key: any) {
		return this.store.delete(key);
	}
}
