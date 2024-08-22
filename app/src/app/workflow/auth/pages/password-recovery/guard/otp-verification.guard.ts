import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OtpService } from '../services/otp.service';

export const otpVerificationGuard: CanActivateFn = (route, state) => {
  const otpService = inject(OtpService);
  const router = inject(Router);

  if (otpService.isEmailVerified()) {
    return true;
  } else {
    router.navigate(['/password-recovery/email-entry']);
    return false;
  }
};
