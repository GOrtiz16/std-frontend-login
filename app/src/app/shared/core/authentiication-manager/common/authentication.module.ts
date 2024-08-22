import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { STDAuthenticationService } from './authentication.service';

@NgModule()
export class STDAuthenticationModule {
    constructor(@Optional() @SkipSelf() parentModule: STDAuthenticationModule) {
        if (parentModule) {
            throw new Error('STD STDAuthentication Module is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders <{}> {
        return {
            ngModule: STDAuthenticationModule,
            providers: [STDAuthenticationService]
    };
  }
}
