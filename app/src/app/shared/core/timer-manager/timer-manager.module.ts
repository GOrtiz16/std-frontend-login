
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { TimerService } from './timer-manager.service';
import { TimerManagerConfigToken } from './timer-manager.token';


interface ITimerSession {
    timeSeconds: number;
    order: string;
}

export { ITimerSession };

@NgModule()
export class STDTimerManagerModule {
    constructor(@Optional() @SkipSelf() parentModule: STDTimerManagerModule) {
    // tslint:disable-next-line: strict-boolean-conditions
    if (parentModule) {
      throw new Error(
        'STD SesionTime is already loaded. Import it in the AppModule only');
    }
  }
    static forRoot(sesionTime: ITimerSession): ModuleWithProviders <{}>{
    return {
      ngModule: STDTimerManagerModule,
      providers: [
        { provide: TimerManagerConfigToken, useValue: sesionTime || {} },
        TimerService,
      ]
    };
  }
}