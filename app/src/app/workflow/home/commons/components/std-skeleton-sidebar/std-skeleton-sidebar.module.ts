import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdSkeletonSidebarComponent } from './std-skeleton-sidebar.component';

@NgModule({
  declarations: [
    StdSkeletonSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StdSkeletonSidebarComponent
  ]
})
export class StdSkeletonSidebarModule { }
