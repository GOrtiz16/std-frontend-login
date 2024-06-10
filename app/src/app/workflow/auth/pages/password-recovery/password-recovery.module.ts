import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginFooterComponent } from '../login/commons/components/login-footer/login-footer.component';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

import { routes } from './password-recovery.routes';
import { StdAuthHeaderModule } from '../../commons/components/std-auth-header/std-auth-header.module';
import { Step1Module } from './step1/step1.module';
import { Step2Module } from './step2/step2.module';
import { Step3Module } from './step3/step3.module';
import { CountdownModule } from 'src/app/shared/components/std-countdown/std-countdown.module';


import { PasswordRecoveryComponent } from './password-recovery.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PasswordRecoveryComponent],
  imports: [
    CommonModule,
    StdAuthHeaderModule,
    StdDirectivesModule,
    Step1Module,
    Step2Module,
    Step3Module,
    CountdownModule,
    LoginFooterComponent,
    RouterModule.forChild(routes)
  ],
  exports: [PasswordRecoveryComponent]
})
export class PasswordRecoveryModule {}
