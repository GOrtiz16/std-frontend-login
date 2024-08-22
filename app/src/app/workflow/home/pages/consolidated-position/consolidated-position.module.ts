import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StdSkeletonContentModule } from '../../commons/components/std-skeleton-content/std-skeleton-content.module';

import { ConsolidatedPositionComponent } from './consolidated-position.component';
import { ROUTES } from './consolidated-position.routes';
import { StdLayutMainModule } from '../../commons/components/std-layout-main/std-layout-main.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ConsolidatedPositionComponent],
  imports: [CommonModule, StdSkeletonContentModule, RouterModule.forChild(ROUTES),StdLayutMainModule],
  exports: [ConsolidatedPositionComponent]
})
export class ConsolidatedPositionModule {

  
}
