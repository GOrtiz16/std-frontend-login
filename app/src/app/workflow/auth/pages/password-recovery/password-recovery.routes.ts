import { Routes } from '@angular/router';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { EmailEntryComponent } from './components/email-entry/email-entry.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { otpVerificationGuard } from './guard/otp-verification.guard';
import { passwordResetGuard } from './guard/password-reset.guard';

export const routes: Routes = [
  {
    path: 'password-recovery',
    component: PasswordRecoveryComponent,
    children: [
      { path: '', redirectTo: 'email-entry', pathMatch: 'full' },
      { path: 'email-entry', component: EmailEntryComponent },
      {
        path: 'otp-verification',
        component: OtpVerificationComponent,
        canActivate: [otpVerificationGuard]
      },
      { path: 'password-reset',
        component: PasswordResetComponent,
        canActivate: [passwordResetGuard]
      },
      { path: '**', redirectTo: 'email-entry' }
    ]
  }
];
