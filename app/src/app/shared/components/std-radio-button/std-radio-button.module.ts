import { CUSTOM_ELEMENTS_SCHEMA, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdRadioButtonComponent } from './std-radio-button.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@NgModule({
  declarations: [StdRadioButtonComponent],
  imports: [CommonModule],
  exports: [StdRadioButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StdRadioButtonComponent),
      multi: true
    }
  ]
})
export class StdRadioButtonModule {}
