import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownModule } from 'src/app/shared/components/std-countdown/std-countdown.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

import { VerificationCodeComponent } from './verification-code.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [VerificationCodeComponent],
  imports: [CommonModule, CountdownModule, ReactiveFormsModule, StdDirectivesModule],
  exports: [VerificationCodeComponent]
})
export class VerificationCodeModule {}
