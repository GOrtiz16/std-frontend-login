import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdDropdownComponent } from './std-dropdown.component';

@NgModule({
  declarations: [StdDropdownComponent],
  imports: [CommonModule],
  exports: [StdDropdownComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StdDropDownModule {}
