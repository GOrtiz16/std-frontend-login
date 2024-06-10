import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdSkeletonHeaderModule } from '../std-skeleton-header/std-skeleton-header.module';

import { StdHomeHeaderComponent } from './std-home-header.component';

@NgModule({
  declarations: [
    StdHomeHeaderComponent
  ],
  imports: [
    CommonModule,

    StdSkeletonHeaderModule
  ],
  exports: [
    StdHomeHeaderComponent
  ],
})
export class StdHomeHeaderModule { }
