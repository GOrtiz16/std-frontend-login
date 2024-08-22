import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdSkeletonFooterModule } from '../std-skeleton-footer/std-skeleton-footer.module';

import { StdHomeFooterComponent } from './std-home-footer.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    StdHomeFooterComponent
  ],
  imports: [
    CommonModule,

    StdSkeletonFooterModule
  ],
  exports: [
    StdHomeFooterComponent
  ]
})
export class StdHomeFooterModule { }
