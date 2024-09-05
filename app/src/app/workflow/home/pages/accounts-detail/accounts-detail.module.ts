import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccountsDetailComponent } from './accounts-detail.component';
import { ROUTES } from './accounts-detail.routes';
import { StdLayutMainModule } from '../../commons/components/std-layout-main/std-layout-main.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AccountsDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StdLayutMainModule
  ],
  exports: [
    AccountsDetailComponent
  ],
})
export class AccountsDetailModule { }
