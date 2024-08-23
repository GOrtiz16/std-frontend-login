import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

import { PasswordResetComponent } from './password-reset.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PasswordResetComponent],
  imports: [CommonModule, ReactiveFormsModule, StdDirectivesModule],
  exports: [PasswordResetComponent]
})
export class PasswordResetModule {}
