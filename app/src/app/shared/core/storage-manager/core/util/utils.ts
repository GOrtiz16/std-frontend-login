function isLocalStorageValid() {
	try {
		return (
			// tslint:disable-next-line: strict-type-predicates
			typeof localStorage !== 'undefined' &&
			'setItem' in localStorage &&
			// in IE8 typeof localStorage.setItem === 'object'
			!!localStorage.setItem
		);
	} catch (e) {
		return false;
	}
}

export default isLocalStorageValid;
