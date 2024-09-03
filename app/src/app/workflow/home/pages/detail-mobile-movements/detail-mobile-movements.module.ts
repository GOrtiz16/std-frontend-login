import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailMobileMovementsComponent } from './detail-mobile-movements.component';
import { ROUTES } from './detail-mobile-movements.routes';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DetailMobileMovementsComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(ROUTES)
  ],
  exports: [
    DetailMobileMovementsComponent
  ],
})
export class DetailMobileMovementsModule { }
