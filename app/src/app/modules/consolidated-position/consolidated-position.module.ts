import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ConsolidatedPositionComponent } from './consolidated-position.component';
import { LoadingService } from '../../components/std-auth-loading/commons/loading.service';
import { StdCardPriceModule } from '../../components/std-card-price/std-card-price.module';
import { StdAuthLoadingModule } from '../../components/std-auth-loading/std-auth-loading.module';
import { StdBoxModule } from '../../components/std-box/std-box.module';
import {SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [ConsolidatedPositionComponent],
  imports: [
    StdAuthLoadingModule,
    StdBoxModule,
    StdCardPriceModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  providers: [LoadingService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConsolidatedPositionModule {
  constructor(private injector: Injector) {
    // import('stencil-library/loader').then(({ defineCustomElements }) => {
    //   defineCustomElements(window);
    // });
  }

  ngDoBootstrap() {
    const el = createCustomElement(ConsolidatedPositionComponent, { injector: this.injector });
    customElements.define('mf-consolidated-position', el);
  }
}
