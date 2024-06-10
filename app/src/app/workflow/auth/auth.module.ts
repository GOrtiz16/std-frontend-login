import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StdAuthHeaderModule } from './commons/components/std-auth-header/std-auth-header.module';
import { StdAuthLoadingModule } from './commons/components/std-auth-loading/std-auth-loading.module';

import { AuthComponent } from './auth.component';
import { ROUTES } from './auth.routes';
import { VerificationCodeModule } from './pages/verification-code/verification-code.module';
import { PasswordRecoveryModule } from './pages/password-recovery/password-recovery.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    StdAuthHeaderModule,
    StdAuthLoadingModule,
    VerificationCodeModule,
    PasswordRecoveryModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AuthModule {}
