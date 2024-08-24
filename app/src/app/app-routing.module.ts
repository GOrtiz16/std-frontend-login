import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ConsolidatedPositionComponent } from './consolidated-position/consolidated-position.component';
import { AccountsDetailComponent } from './account-detail/accounts-detail.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MobileAccountsDetailComponent } from './mobile-accounts-detail/mobile-accounts-detail.component';
import { DetailsAccountsDataComponent } from './details-accounts-data/details-accounts-data.component';
import { DetailMobileMovementsComponent } from './detail-mobile-movements/detail-mobile-movements.component';


const routes: Routes = [
  {
    path: 'consolidated-position',
    component: ConsolidatedPositionComponent,
  },
  {
    path: 'accounts-detail',
    component: AccountsDetailComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'mobile-accounts-detail',
    component: MobileAccountsDetailComponent,
  },
  {
    path: 'detail-mobile-movements',
    component: DetailMobileMovementsComponent,
  },
  {
    path: 'details-accounts-data',
    component: DetailsAccountsDataComponent,
  }
];
class AvoidPathLocationStrategy  extends PathLocationStrategy {
 override pushState(state: any, title: string, url: string, queryParams: string): void {}
}
@NgModule({
  providers: [
    {
      provide: LocationStrategy,
      useClass:  AvoidPathLocationStrategy,
    }
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// @NgModule({
//   imports: [RouterTestingModule.withRoutes(routes)],
//   exports: [RouterTestingModule]
// })
// export class AppRoutingModule { }

