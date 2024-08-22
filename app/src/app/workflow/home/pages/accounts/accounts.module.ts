import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import { ROUTES } from './accounts.routes';
import { StdLayutMainModule } from '../../commons/components/std-layout-main/std-layout-main.module';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AccountsComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), StdLayutMainModule],
  exports: [AccountsComponent]
})
export class AccountsModule {}
