import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SupportCardModule } from 'src/app/shared/components/std-support-card/std-support-card.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LOGIN_ROUTES } from './login.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';
import { LoginPresenter } from './constants/login.presenter';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES),
    SupportCardModule,
    ReactiveFormsModule, CommonModule, HttpClientModule, NgxCaptchaModule, StdDirectivesModule
  ],
  providers: [LoginPresenter, LoginService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LoginComponent]
})
export class LoginModule {}




