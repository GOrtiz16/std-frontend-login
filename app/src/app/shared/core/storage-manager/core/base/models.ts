export interface IIStorage {
	clear(): void;
	getItem(key: any): any;
	key(key: number): any;
	length(): number | any;
	removeItem(key: any): any;
	setItem(key: any, value: any): any;
	ready(): any;
}
