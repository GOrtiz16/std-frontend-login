import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdSkeletonHeaderModule } from '../std-skeleton-header/std-skeleton-header.module';
import { StdRadioButtonModule } from 'src/app/shared/components/std-radio-button/std-radio-button.module';

import { StdHomeHeaderComponent } from './std-home-header.component';
import { StdDropDownModule } from 'src/app/shared/components/std-dropdown/std-drop-down.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [StdHomeHeaderComponent],
  imports: [
    CommonModule,
    StdSkeletonHeaderModule,
    StdRadioButtonModule,
    StdDropDownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [StdHomeHeaderComponent]
})
export class StdHomeHeaderModule {}
