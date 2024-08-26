import { ModuleWithProviders, NgModule } from '@angular/core';
import { STDLocalStorage, STDSessionStorage } from '../core/index';
import { STDLocalStorageService } from './local-storage.service';
import { STDSessionStorageService } from './session-storage.service';


export function _localStorage() {
  return new STDLocalStorage();
}

export function _sessionStorage() {
  return new STDSessionStorage();
}


@NgModule()
export class STDStorageModule {

  static forRoot(): ModuleWithProviders<{}> {
    return {
      ngModule: STDStorageModule,
      providers: [
        {
          provide: STDLocalStorageService,
          useFactory: _localStorage,
        },
        {
          provide: STDSessionStorageService,
          useFactory: _sessionStorage,
        }
      ],
    };
  }
}
