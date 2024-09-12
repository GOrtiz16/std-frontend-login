import { Routes } from '@angular/router';
import { authGuard } from './guard/app.auth.guard'; // Ajusta el path según tu estructura de carpetas
import { TransfersComponent } from './workflow/home/pages/transfers/transfers.component';
import { AccountsDetailComponent } from './workflow/home/pages/accounts-detail/accounts-detail.component';
import { AccountsComponent } from './workflow/home/pages/accounts/accounts.component';
import { ConsolidatedPositionComponent } from './workflow/home/pages/consolidated-position/consolidated-position.component';

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
    component: ConsolidatedPositionComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'accounts-detail',
    component: AccountsDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'transfers',
    component: TransfersComponent,
    canActivate: [authGuard]
  }
];
