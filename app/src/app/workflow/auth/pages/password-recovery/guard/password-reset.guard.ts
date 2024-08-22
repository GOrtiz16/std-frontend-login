import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OtpService } from '../services/otp.service';

export const passwordResetGuard: CanActivateFn = (route, state) => {
  const otpService = inject(OtpService);
  const router = inject(Router);

  if (otpService.isOtpValidated()) {
    return true;
  } else {
    router.navigate(['/password-recovery/email-entry']);
    return false;
  }
};
