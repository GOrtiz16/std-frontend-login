import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersComponent } from './transfers.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './transfers.routes';
import { StdSkeletonContentModule } from '../../commons/components/std-skeleton-content/std-skeleton-content.module';
import { StdLayutMainModule } from '../../commons/components/std-layout-main/std-layout-main.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    TransfersComponent
  ],
  imports: [
    CommonModule,

    StdSkeletonContentModule,
    StdLayutMainModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    TransfersComponent
  ],
})
export class TransfersModule { }