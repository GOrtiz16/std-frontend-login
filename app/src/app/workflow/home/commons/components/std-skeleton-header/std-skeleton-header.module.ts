import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdSkeletonHeaderComponent } from './std-skeleton-header.component';

@NgModule({
  declarations: [
    StdSkeletonHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StdSkeletonHeaderComponent
  ]
})
export class StdSkeletonHeaderModule { }
