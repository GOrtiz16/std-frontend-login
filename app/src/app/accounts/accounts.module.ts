import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AccountsComponent } from './accounts.component';
import { LoadingService } from '../components/std-auth-loading/commons/loading.service';
// import { ConcatSymbolPipe } from '../helpers/concatSymbol.pipe';
import { StdCardPriceModule } from '../shared/components/std-card-price/std-card-price.module';
import { StdAuthLoadingModule } from '../components/std-auth-loading/std-auth-loading.module';
import { StdBoxModule } from '../shared/components/std-box/std-box.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AccountsComponent],
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
export class AccountsModule {
  constructor(private injector: Injector) {
    // import('stencil-library/loader').then(({ defineCustomElements }) => {
    //   defineCustomElements(window);
    // });
  }

  ngDoBootstrap() {
    const el = createCustomElement(AccountsComponent, { injector: this.injector });
    customElements.define('mf-accounts', el);
  }
}
