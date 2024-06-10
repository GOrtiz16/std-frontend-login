import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

import { Step3Component } from './step3.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Step3Component],
  imports: [CommonModule, ReactiveFormsModule, StdDirectivesModule],
  exports: [Step3Component]
})
export class Step3Module {}
