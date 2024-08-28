import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdCardPriceComponent } from './std-card-price.component';

@NgModule({
  declarations: [StdCardPriceComponent],
  imports: [CommonModule],
  exports: [StdCardPriceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StdCardPriceModule {}
