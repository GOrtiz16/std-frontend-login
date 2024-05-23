import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { defineCustomElements } from 'stencil-library/loader';

import { StdHeaderModule } from './shared/components/std-header/std-header.module';
import { StdDialogModule } from './shared/components/std-dialog/std-dialog.module';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StdDialogModule,
    StdHeaderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }],
  bootstrap: [AppComponent]
})
export class AppModule {}

defineCustomElements();
