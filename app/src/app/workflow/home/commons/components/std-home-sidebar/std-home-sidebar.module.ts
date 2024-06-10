import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdSkeletonSidebarModule } from '../std-skeleton-sidebar/std-skeleton-sidebar.module';

import { StdHomeSidebarComponent } from './std-home-sidebar.component';

@NgModule({
  declarations: [
    StdHomeSidebarComponent
  ],
  imports: [
    CommonModule,

    StdSkeletonSidebarModule
  ],
  exports: [
    StdHomeSidebarComponent
  ],
})
export class StdHomeSidebarModule { }
