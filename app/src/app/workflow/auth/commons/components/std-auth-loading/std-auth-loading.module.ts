import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdAuthLoadingComponent } from './std-auth-loading.component';

@NgModule({
  declarations: [
    StdAuthLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StdAuthLoadingComponent
  ]
})
export class StdAuthLoadingModule { }
