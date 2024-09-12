
export class LocalStorage {
	ready() {
		return true;
	}

	clear() {
		return window.localStorage.clear();
	}

	getItem(key: any) {
		try {
			return window.localStorage.getItem(key);
		} catch (e) {
			return 'Error Reading STD';
		}
	}

	key(key: any) {
		return window.localStorage.key(key);
	}

	length() {
		return window.localStorage.length;
	}

	setItem(key: any, value: any): any | void {
		try {
			window.localStorage.setItem(key, value);
		} catch (e) {
			if (
				//@ts-ignore
				e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
			) {
				return 'Error Capacity Exceeded.';
			}

			return 'Error Reading.';
		}
	}

	removeItem(key: any) {
		window.localStorage.removeItem(key);
	}
}
