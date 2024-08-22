import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { VerificationCodeComponent } from './pages/verification-code/verification-code.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'set-password',
        component: SetPasswordComponent
      },
      {
        path: 'verification-code',
        component: VerificationCodeComponent
      },
      {
        path: 'password-recovery',
        loadChildren: () =>
          import('./pages/password-recovery/password-recovery.module').then((m) => m.PasswordRecoveryModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];
