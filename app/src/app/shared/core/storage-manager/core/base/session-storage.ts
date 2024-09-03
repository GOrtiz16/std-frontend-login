
export class SessionStorage {
	ready() {
		return !!window.sessionStorage;
	}

	clear() {
		return window.sessionStorage.clear();
	}

	getItem(key: any) {
		try {
			return window.sessionStorage.getItem(key);
		} catch (e) {
			return 'Error Reading STD SessionStorage';
		}
	}

	key(key: any) {
		return window.sessionStorage.key(key);
	}

	length() {
		return window.sessionStorage.length;
	}

	setItem(key: any, value: any): any | void {
		try {
			window.sessionStorage.setItem(key, value);
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
		window.sessionStorage.removeItem(key);
	}
}
