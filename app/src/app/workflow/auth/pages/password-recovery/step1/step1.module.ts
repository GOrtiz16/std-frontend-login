import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

import { Step1Component } from './step1.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Step1Component],
  imports: [CommonModule, ReactiveFormsModule, StdDirectivesModule],
  exports: [Step1Component]
})
export class Step1Module {}
