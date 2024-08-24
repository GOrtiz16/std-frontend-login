import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, InjectionToken, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { CoreModule } from './custom-modules/core.module';
// import { ConsolidatedPositionComponent } from './consolidated-position/consolidated-position.component';
import { StdAuthLoadingModule } from './components/std-auth-loading/std-auth-loading.module';
// import { AccountsDetailComponent } from './account-detail/accounts-detail.component';
// import { AccountsComponent } from './accounts/accounts.component';
import { MobileAccountsDetailComponent } from './mobile-accounts-detail/mobile-accounts-detail.component';
import { DetailMobileMovementsComponent } from './detail-mobile-movements/detail-mobile-movements.component';
import { DetailsAccountsDataComponent } from './details-accounts-data/details-accounts-data.component';
// import { ConcatSymbolPipe } from './helpers/concatSymbol.pipe';
import { StdBoxModule } from './shared/components/std-box/std-box.module';
import { StdCardPriceModule } from './shared/components/std-card-price/std-card-price.module';

// function appInitialization(envConfigLibService:ConfigService) :()=>Observable<any>{
//   return ()=>envConfigLibService.setConfigurationDetails()
// }

export const appName = new InjectionToken('appName');

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    // ConsolidatedPositionComponent,
    // AccountsDetailComponent,
    // AccountsComponent,
    MobileAccountsDetailComponent,
    DetailMobileMovementsComponent,
    DetailsAccountsDataComponent,
    // ConcatSymbolPipe
  ],
  imports: [CoreModule, AppRoutingModule, StdAuthLoadingModule, StdBoxModule, StdCardPriceModule],
  providers: [
    // {
    //   provide:APP_INITIALIZER,
    //   useFactory: appInitialization,
    //   deps:[ConfigService],
    //   multi:true
    // },
    {
      provide: appName,
      useValue: 'std-mfe-consolidated-position'
    }
  ]
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    import('stencil-library/loader').then(({ defineCustomElements }) => {
      defineCustomElements(window);
    });
  }

  ngDoBootstrap() {
    const todoApp = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('std-mfe-consolidated-position', todoApp);
  }
}
