import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StdAuthHeaderModule } from './commons/components/std-auth-header/std-auth-header.module';
import { StdAuthLoadingModule } from './commons/components/std-auth-loading/std-auth-loading.module';

import { AuthComponent } from './auth.component';
import { ROUTES } from './auth.routes';
import { VerificationCodeModule } from './pages/verification-code/verification-code.module';
import { PasswordRecoveryModule } from './pages/password-recovery/password-recovery.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../core/interceptors/auth.interceptor';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    StdAuthHeaderModule,
    StdAuthLoadingModule,
    VerificationCodeModule,
    PasswordRecoveryModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class AuthModule {}
