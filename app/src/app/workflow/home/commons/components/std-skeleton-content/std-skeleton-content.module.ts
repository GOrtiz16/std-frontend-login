import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdSkeletonContentComponent } from './std-skeleton-content.component';

@NgModule({
  declarations: [
    StdSkeletonContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StdSkeletonContentComponent
  ]
})
export class StdSkeletonContentModule { }
