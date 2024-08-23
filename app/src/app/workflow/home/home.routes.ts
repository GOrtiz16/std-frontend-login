import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'consolidated-position',
        loadChildren: () => import('./pages/consolidated-position/consolidated-position.module').then((m) => m.ConsolidatedPositionModule),
      },
      {
        path: 'accounts-detail',
        loadChildren: () => import('./pages/accounts-detail/accounts-detail.module').then((m) => m.AccountsDetailModule),
      },
      {
        path: 'accounts',
        loadChildren: () => import('./pages/accounts/accounts.module').then((m) => m.AccountsModule),
      },
      {
        path: 'detail-mobile-movements',
        loadChildren: () => import('./pages/detail-mobile-movements/detail-mobile-movements.module').then((m) => m.DetailMobileMovementsModule),
      },
      {
        path: 'mobile-accounts-detail',
        loadChildren: () => import('./pages/mobile-accounts-detail/mobile-accounts-detail.module').then((m) => m.MobileAccountsDetailModule),
      },
      {
        path: 'details-accounts-data',
        loadChildren: () => import('./pages/details-accounts-data/details-accounts-data.module').then((m) => m.DetailsAccountsDataModule),
      },
      {
        path: '',
        redirectTo: 'consolidated-position',
        pathMatch: 'full',
      },
    ]
  },
];
