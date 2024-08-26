import { Routes } from '@angular/router';
import { TransfersComponent } from './transfers.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: TransfersComponent,
  },
  {
    path: 'transfers-between-register-with-holding',
    component: TransfersComponent,
  },
];
