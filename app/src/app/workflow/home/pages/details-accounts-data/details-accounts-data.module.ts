import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsAccountsDataComponent } from './details-accounts-data.component';
import { ROUTES } from './details-accounts-data.routes';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DetailsAccountsDataComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(ROUTES)
  ],
  exports: [
    DetailsAccountsDataComponent
  ],
})
export class DetailsAccountsDataModule { }
