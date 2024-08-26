import { Routes } from '@angular/router';
import { authGuard } from './guard/app.auth.guard'; // Ajusta el path según tu estructura de carpetas

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./workflow/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'consolidated-position',
    loadChildren: () =>
      import('./workflow/home/pages/consolidated-position/consolidated-position.module').then(
        (m) => m.ConsolidatedPositionModule
      ),
    canActivate: [authGuard]
  },
  {
    path: 'accounts',
    loadChildren: () => import('./workflow/home/pages/accounts/accounts.module').then((m) => m.AccountsModule),
    canActivate: [authGuard]
  },
  {
    path: 'transfers',
    loadChildren: () => import('./workflow/home/pages/transfers/transfers.module').then((m) => m.TransfersModule),
    canActivate: [authGuard]
  }
];

// {
//   path: '',
//   component: HomeComponent,
//   children: [
//     {
//       path: 'consolidated-position',
//       loadChildren: () => import('./workflow/home/pages/consolidated-position/consolidated-position.module').then((m) => m.ConsolidatedPositionModule),
//     },
//     {
//       path: 'accounts-detail',
//       loadChildren: () => import('./workflow/home/pages/accounts-detail/accounts-detail.module').then((m) => m.AccountsDetailModule),
//     },
//     {
//       path: 'accounts',
//       loadChildren: () => import('./workflow/home/pages/accounts/accounts.module').then((m) => m.AccountsModule),
//     },
//     {
//       path: 'detail-mobile-movements',
//       loadChildren: () => import('./workflow/home/pages/detail-mobile-movements/detail-mobile-movements.module').then((m) => m.DetailMobileMovementsModule),
//     },
//     {
//       path: 'mobile-accounts-detail',
//       loadChildren: () => import('./workflow/home/pages/mobile-accounts-detail/mobile-accounts-detail.module').then((m) => m.MobileAccountsDetailModule),
//     },
//     {
//       path: 'details-accounts-data',
//       loadChildren: () => import('./workflow/home/pages/details-accounts-data/details-accounts-data.module').then((m) => m.DetailsAccountsDataModule),
//     },

//   ]
// },
// {
//   path: 'session-status',
//   loadChildren: () => import('./workflow/session-status/session-status.module').then((m) => m.SessionStatusModule)
// }
