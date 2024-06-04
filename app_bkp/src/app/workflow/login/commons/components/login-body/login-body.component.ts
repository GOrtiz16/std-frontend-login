import { Component, OnInit, TemplateRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NgxCaptchaModule, ReCaptchaV3Service } from 'ngx-captcha';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StdAlertComponent } from 'src/app/shared/components/std-alert/std-alert.component';

import { LoginPresenter } from '../../../login.presenter';
import { LoginService } from '../../services/api/login.service';
import { ILoginUserRequest } from '../../models/requests/login-user-request.interface';
import { ILoginUserResponse, ILoginUserResponseError } from '../../models/responses/login-user-response.interface';
import { RECAPTCHA_KEY } from '../../constants/recaptcha.constants';
import { Router } from '@angular/router';
import { StdDialogComponent } from 'src/app/shared/components/std-dialog/std-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module'
import { ChannelInfoService } from '../../services/api/info.service';

@Component({
  selector: 'std-login-body',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgxCaptchaModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    StdAlertComponent,
    StdDirectivesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginPresenter, LoginService],
  templateUrl: './login-body.component.html',
  styleUrl: './login-body.component.scss'
})
export class LoginBodyComponent implements OnInit {
  @ViewChild('noLogin2AttemptsLeft', { static: true }) noLogin2AttemptsLeftTpl!: TemplateRef<HTMLElement>;
  @ViewChild('noLogin1AttemptLeft') noLogin1AttemptLeftTpl!: TemplateRef<HTMLElement>;
  @ViewChild('contactUs') contactUsTpl!: TemplateRef<HTMLElement>;

  visiblePassword = false;
  isLoginIn = false;
  disabledButton = false;
  caseShowAlert = '';
  msghowAlert = '';
  showToolTip = true;

  constructor(
    private matDialog: MatDialog,
    public loginPresenter: LoginPresenter,
    public loginService: LoginService,
    public channelInfoService: ChannelInfoService,
    public reCaptchaV3Service: ReCaptchaV3Service,
    private router: Router
  ) {}

  ngOnInit() {
    this.initRecaptcha();
    this.getUserChannelInfo();
  }

  initRecaptcha() {
    this.reCaptchaV3Service.execute(
      RECAPTCHA_KEY,
      'loginpage',
      (token) => this.loginPresenter.recaptcha.setValue(token),
      { useGlobalDomain: false }
    );
  }

  async onSubmit() {
    this.caseShowAlert = '';
    this.showToolTip = true;

    if (this.loginPresenter.form.invalid) {
      return;
    }

    this.isLoginIn = true;
    const request: ILoginUserRequest = {
      username: this.loginPresenter.username.value as string,
      password: this.loginPresenter.password.value as string,
      rememberUser: this.loginPresenter.rememberUser.value as boolean,
      recaptcha: this.loginPresenter.recaptcha.value as string
    };
    
    await this.sleep(1500);

    this.loginService.loginUser(request).subscribe(
      (response: ILoginUserResponse) => {
        this.loginOkResponse(response);
        this.isLoginIn = false;
      },
      (error: ILoginUserResponseError) => {
        this.isLoginIn = false;
        this.loginErroResponse(error);
      }
    );
  }

  loginOkResponse(response: ILoginUserResponse) {
    // "credentialOwner": {
    //   "isFirstLogin": true,
    //   "retry": 0,
    //   "success": true
    // },
    // "sessionToken": {
    //   "auth": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvX2lkIjoxMjM0NTZ9.RB2kQH2N05Km1U2TCVccZ-lN72NdeZ82tJClpPj2lN8",
    //   "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvX2lkIjoxMjM0NTZ9.i0cMwI_NaKfNZ6BlOpM8fnJaOcwFxRm8mZyUfX9bUjU"
    // }

    let title = '';
   
    const {
      credentialOwner: { isFirstLogin, success, retry }
    } = response;

    // case 1: Usuario nuevo 4 Digitos [newUser]
    // Se va  cambaio de pasword
    if (isFirstLogin && success && retry == 0) {
      this.router.navigateByUrl('/setPassword');
    }

    // case 3 y 6: Usuario nuevo 8 Digitos [userNotNew]
    // Se va al home
    if (!isFirstLogin && success && retry == 0) {
      this.router.navigateByUrl('/home');
    }

    // case 2, 7: Autorización fallida, contraseña inválida en primer intento.[userPassFailed]
    // queda en login

    // case 2, 7: Autorización fallida, contraseña inválida en segundo intento.[userPassFailed2]
    // queda en login

    // case 4 y 15: Autorización fallida, contraseña inválida en tercer intento y se bloquea el usuario [userPassFailed3]
    // queda en login

    // case 15: Autorización fallida, usuario bloqueado [userBloqued]
    // queda en login

    // case 16: Intento de inicio de sesión por usuario inhabilitado [userError2]
    // queda en login

    // case X: Autorización fallida, usuario no encontrado [userError]
    // queda en login

    if (isFirstLogin && success) {
      return;
    }

    if (retry === 1) {
      this.caseShowAlert = 'reintend';
      this.msghowAlert = this.loginPresenter.getAlertError('reintend1');
      title = '¡Oh, no! Parece que hubo un error';
      this.openModal(title, undefined, this.noLogin1AttemptLeftTpl);
    }

    if (retry === 2) {
      this.caseShowAlert = 'reintend';
      this.msghowAlert = this.loginPresenter.getAlertError('reintend2');
      title = '¡Oh, no! Parece que hubo un error';
      this.openModal(title, undefined, this.noLogin2AttemptsLeftTpl);
    }

    if (retry === -1) {
      this.caseShowAlert = 'blocked';
      this.msghowAlert = this.loginPresenter.getAlertError('blocked');
      title = '¡Lo sentimos!<br>Tu acceso ha sido bloqueado';
      this.loginPresenter.form.reset();
      this.loginPresenter.form.controls['username'].disable();
      this.loginPresenter.form.controls['password'].disable();
      this.disabledButton = true;
      this.openModal(title, undefined, this.contactUsTpl, 'error');
    }
  }

  loginErroResponse(errorResponse: ILoginUserResponseError) {
    // {
    //   "errors": [
    //     {
    //       "code": "ERR461",
    //       "message": "RESOURCE NOT FOUND",
    //       "level": "ERROR",
    //       "description": "Nombre de usuario y/o contraseña errados"
    //     }
    //   ]
    // }

    console.log(errorResponse);
    const {
      error: {
        error: { code, description }
      }
    } = errorResponse;

    // Invalid login
    if (code === 'ERR461') {
      const title = '¡Oh, no! Parece que hubo un error';
      const content = description;
      this.showToolTip = false;
      this.openModal(title, content, undefined, undefined, 'Entiendo');
    }

    if (code === 'ERR462') {
      const title = '¡Lo sentimos!<br>Tu usuario está inhabilitado';
      this.caseShowAlert = 'blocked';
      this.msghowAlert = this.loginPresenter.getAlertError('blocked');
      this.loginPresenter.form.controls['username'].disable();
      this.loginPresenter.form.controls['password'].disable();
      this.disabledButton = true;
      this.openModal(title, undefined, this.contactUsTpl, 'error', 'Entiendo');
    }
  }

  togglePassword() {
    this.visiblePassword = !this.visiblePassword;
  }

  recoverPassword() {}

  getUserChannelInfo() {
    this.channelInfoService.getChannnelInfo().subscribe(
      (response) => {
        
      },
      (error: ILoginUserResponseError) => {
      }
    );
  }

  openModal(title: string, content?: string, template?: TemplateRef<HTMLElement>, icon?: string, buttonLabel?: string) {
    this.matDialog.open(StdDialogComponent, {
      disableClose: true,
      width: '600px',
      data: { title, content, template, icon, buttonLabel }
    });
  }
  
  async sleep(time: number) {    
    return await new Promise(resolve => setTimeout(resolve, time));
  }
}
