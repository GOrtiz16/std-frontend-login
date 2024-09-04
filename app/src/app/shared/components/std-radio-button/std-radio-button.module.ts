import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdRadioButtonComponent } from './std-radio-button.component';

@NgModule({
  declarations: [StdRadioButtonComponent],
  imports: [CommonModule],
  exports: [StdRadioButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StdRadioButtonModule {}
