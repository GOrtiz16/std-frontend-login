import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MobileAccountsDetailComponent } from './mobile-accounts-detail.component';
import { ROUTES } from './mobile-accounts-detail.routes';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    MobileAccountsDetailComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(ROUTES)
  ],
  exports: [
    MobileAccountsDetailComponent
  ],
})
export class MobileAccountsDetailModule { }
