
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { TimerSessionService } from './timersession.service';
import { SessionConfigToken } from './timersession.token';


interface ITimerSession {
    timeSeconds: number;
    order: string;
}

export { ITimerSession };

@NgModule()
export class STDSessionTimeModule {
    constructor(@Optional() @SkipSelf() parentModule: STDSessionTimeModule) {
    // tslint:disable-next-line: strict-boolean-conditions
    if (parentModule) {
      throw new Error(
        'TDP SesionTime is already loaded. Import it in the AppModule only');
    }
  }
    static forRoot(sesionTime: ITimerSession): ModuleWithProviders <{}>{
    return {
      ngModule: STDSessionTimeModule,
      providers: [
        { provide: SessionConfigToken, useValue: sesionTime || {} },
        TimerSessionService,
      ]
    };
  }
}