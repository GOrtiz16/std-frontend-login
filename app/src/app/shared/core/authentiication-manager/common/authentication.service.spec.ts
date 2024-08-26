import {TestBed} from "@angular/core/testing";
import {STDAuthenticationModule, STDAuthenticationService} from "./authentication.module";

describe('authentication service test', () => {

	let tdpAuthenticationService: STDAuthenticationService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [STDAuthenticationModule.forRoot()]
		});

		tdpAuthenticationService = TestBed.get(STDAuthenticationService);
	});

	it('STD Authentication Service debe ser inicializado', () => {
		expect(tdpAuthenticationService).toBeDefined();
	})

});
