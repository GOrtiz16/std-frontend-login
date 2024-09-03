import isLocalStorageValid from './util/utils';

import { LocalStorage } from './base/local-storage';
import { IIStorage } from './base/models';
import { SessionStorage } from './base/session-storage';
import { StorageMock } from './base/storage-mock';


export class STDSessionStorage {
	storage: IIStorage;
	constructor() {
		this.storage = isLocalStorageValid() ? new SessionStorage() : new StorageMock();
	}
	ready() {
		return this.storage.ready();
	}

	clear() {
		return this.storage.clear();
	}

	getItem(key: any) {
		return this.storage.getItem(key);
	}

	key(key: any) {
		return this.storage.key(key);
	}

	length() {
		return this.storage.length;
	}

	setItem(key: any, value: any) {
		this.storage.setItem(key, value);
	}

	removeItem(key: any) {
		this.storage.removeItem(key);
	}
}

export class STDLocalStorage {
	storage: IIStorage;
	constructor() {
		this.storage = isLocalStorageValid() ? new LocalStorage() : new StorageMock();
	}
	ready() {
		return this.storage.ready();
	}

	clear() {
		return this.storage.clear();
	}

	getItem(key: any) {
		return this.storage.getItem(key);
	}

	key(key: any) {
		return this.storage.key(key);
	}

	length() {
		return this.storage.length;
	}

	setItem(key: any, value: any) {
		this.storage.setItem(key, value);
	}

	removeItem(key: any) {
		this.storage.removeItem(key);
	}
}