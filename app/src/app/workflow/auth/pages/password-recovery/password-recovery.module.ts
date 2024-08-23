import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

import { routes } from './password-recovery.routes';
import { StdAuthHeaderModule } from '../../commons/components/std-auth-header/std-auth-header.module';
import { SupportCardModule } from 'src/app/shared/components/std-support-card/std-support-card.module';
import { EmailEntryModule } from './components/email-entry/email-entry.module';
import { OtpVerificationModule } from './components/otp-verification/otp-verification.module';
import { PasswordResetModule } from './components/password-reset/password-reset.module';
import { CountdownModule } from 'src/app/shared/components/std-countdown/std-countdown.module';

import { PasswordRecoveryComponent } from './password-recovery.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PasswordRecoveryComponent],
  imports: [
    CommonModule,
    StdAuthHeaderModule,
    StdDirectivesModule,
    EmailEntryModule,
    OtpVerificationModule,
    PasswordResetModule,
    CountdownModule,
    SupportCardModule,
    RouterModule.forChild(routes)
  ],
  exports: [PasswordRecoveryComponent]
})
export class PasswordRecoveryModule {}
