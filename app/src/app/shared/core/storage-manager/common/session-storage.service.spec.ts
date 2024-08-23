import {STDSessionStorageService} from "./session-storage.service";
import {TestBed} from "@angular/core/testing";
import {STDStorageModule} from "./storage.module";

describe('Session Storage Service Test', () => {

	let tdpSessionStorageService: STDSessionStorageService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [STDStorageModule.forRoot()]
		});

		tdpSessionStorageService = TestBed.get(STDSessionStorageService);
	});

	it('STD Session Storage debe ser inicializado', () => {
		expect(tdpSessionStorageService).toBeDefined();
	});

});
