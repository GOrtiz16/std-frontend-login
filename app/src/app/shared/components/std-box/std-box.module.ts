import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdBoxComponent } from './std-box.component';

@NgModule({
  declarations: [StdBoxComponent],
  imports: [CommonModule],
  exports: [StdBoxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StdBoxModule {}
