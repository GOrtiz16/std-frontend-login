import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  const token = sessionStorage.getItem('ars_loginshell_token');

  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
