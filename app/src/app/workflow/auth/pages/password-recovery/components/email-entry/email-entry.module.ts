import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

import { EmailEntryComponent } from './email-entry.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [EmailEntryComponent],
  imports: [CommonModule, ReactiveFormsModule, StdDirectivesModule],
  exports: [EmailEntryComponent]
})
export class EmailEntryModule {}
