import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StdSkeletonContentModule } from '../../commons/components/std-skeleton-content/std-skeleton-content.module';

import { ConsolidatedPositionComponent } from './consolidated-position.component';
import { ROUTES } from './consolidated-position.routes';

@NgModule({
  declarations: [
    ConsolidatedPositionComponent
  ],
  imports: [
    CommonModule,

    StdSkeletonContentModule,

    RouterModule.forChild(ROUTES)
  ],
  exports: [
    ConsolidatedPositionComponent
  ],
})
export class ConsolidatedPositionModule { }
