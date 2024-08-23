import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

import { OtpVerificationComponent } from './otp-verification.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [OtpVerificationComponent],
  imports: [CommonModule, ReactiveFormsModule, StdDirectivesModule],
  exports: [OtpVerificationComponent]
})
export class OtpVerificationModule {}
