import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SetPasswordComponent } from './set-password/set-password.component';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'setPassword',
    component: SetPasswordComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
