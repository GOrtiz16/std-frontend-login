import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportCardComponent } from './std-support-card.component';

@NgModule({
  declarations: [SupportCardComponent],
  imports: [CommonModule],
  exports: [SupportCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SupportCardModule {}
