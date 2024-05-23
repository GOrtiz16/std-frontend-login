import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdHeaderComponent } from './std-header.component';

import { HeadeCountdownModule } from './std-header-countdown/std-header-countdown.module';

@NgModule({
  declarations: [StdHeaderComponent],
  imports: [
    CommonModule,
    
    HeadeCountdownModule
  ],
  exports: [StdHeaderComponent],
})
export class StdHeaderModule {}
