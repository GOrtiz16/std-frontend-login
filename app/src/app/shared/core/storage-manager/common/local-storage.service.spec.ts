import {STDLocalStorageService} from "./local-storage.service";
import {TestBed} from "@angular/core/testing";
import {STDStorageModule} from "./storage.module";

describe('Local Storage Service Test', () => {

	let tdpLocalStorageService: STDLocalStorageService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [STDStorageModule.forRoot()]
		});

		tdpLocalStorageService = TestBed.get(STDLocalStorageService);
	});

	it('STD Local Storage debe ser incializado', () => {
		expect(tdpLocalStorageService).toBeDefined();
	});

});
