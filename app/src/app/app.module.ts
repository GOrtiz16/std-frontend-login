import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { STDSessionTimeModule } from './shared/services/time-service/timersession.module';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from 'stencil-library/loader';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    STDSessionTimeModule.forRoot({timeSeconds: 20, order: 'des'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

defineCustomElements();