import { Component, OnInit, TemplateRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxCaptchaModule, ReCaptchaV3Service } from 'ngx-captcha';
import { LoginPresenter } from '../../../login.presenter';
import { LoginService } from '../../services/api/login.service';
import { ILoginUserRequest } from '../../models/requests/login-user-request.interface';
import { IAuthenticationResponse, IAuthenticationResponseError, IChannelInfoResponseErrors } from '../../models/responses/login-user-response.interface';
import { RECAPTCHA_KEY } from '../../constants/recaptcha.constants';
import { NavigationEnd, Router } from '@angular/router';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';
import { ChannelInfoService } from '../../services/api/info.service';
import { IInfoChannelResponse, Keyboard } from '../../models/responses/info-response.interfaces';
import { KeyBoardHelper } from 'src/app/shared/services/keyboard.service';
import { TimerSessionService } from 'src/app/shared/services/time-service/timersession.service';
import { catchError, delay, filter, map, of, switchMap, tap } from 'rxjs';
import { AppBusEventsService } from 'src/app/shared/services/bus-events.service';

@Component({
  selector: 'std-login-body',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, NgxCaptchaModule, StdDirectivesModule],
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
  title = '¡Oh, no! Parece que hubo un error';
  errorRetry?: number;

  keyBoardHelperService = new KeyBoardHelper();

  constructor(
    private router: Router,
    public loginPresenter: LoginPresenter,
    public loginService: LoginService,
    public channelInfoService: ChannelInfoService,
    public reCaptchaV3Service: ReCaptchaV3Service,
    private sts: TimerSessionService,
    private ldr: AppBusEventsService
    
  ) {}

  ngOnInit() {
    this.initRecaptcha()
    this.initCounter()
    //this.initRouterNavegation()
    this.doMainOrchestation().subscribe(()=>{})
  }
  
  doMainOrchestation() {
    return of(undefined).pipe(
      tap(() => {
          this.showLoader()
      }),
      switchMap(() => {
        return this.channelInfoService.getChannnelInfo().pipe(
          map((response: IInfoChannelResponse) => {
            const kbr = response['keyboard'] ? response['keyboard']: {} as Keyboard;
            const logintime = response['time']['milliseconds'] ? (response['time']['milliseconds'] as number)/  100: 300
            this.keyBoardHelperService.setKeyBoard(kbr);
            this.sts.setTime(logintime)
          },
          (error: IAuthenticationResponseError) => {}
        ),
        )
      }),
      delay(1500),
      tap(() => {
        this.hideLoader()
      }),
    )
  }

  showLoader() {
    this.ldr.sendEvent({loader:{show:true}})
  }

  hideLoader() {
    this.ldr.sendEvent({loader:{show:false}})
  }

  initGetChannelInfo () {
    return this.channelInfoService.getChannnelInfo().pipe(
     map(
      (response: IInfoChannelResponse) => {
        const kbr = response['keyboard'] ? response['keyboard']: {} as Keyboard;
        const logintime = response['time']['milliseconds'] ? (response['time']['milliseconds'] as number)/  60: 300
        this.keyBoardHelperService.setKeyBoard(kbr);
        this.sts.setTime(logintime)
      },
      (err: IChannelInfoResponseErrors) => {
        debugger
        let error = err.errors[0]
        err.errors[0].code === "ERR462"
        this.loginErroResponse(error);
      }
     )
    );
  }
  initCounter(){
    this.sts.startTimer();
    this.sts.onTimerEnd().subscribe(v => {
      this.closeModal()
      this.sts.startTimer();
    });
  }
  initRouterNavegation(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.sts.resetTimer();
    });
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
      seed: this.keyBoardHelperService.getSeed(),
      userCredentialId: this.loginPresenter.username.value as string || "VNANDI",
      password: this.keyBoardHelperService.getPasswordHash(this.loginPresenter.password.value as string),
      rememberUser: this.loginPresenter.rememberUser.value as boolean,
      recaptcha: this.loginPresenter.recaptcha.value as string
    };

    await this.sleep(1500);

    this.loginService.loginUser(request).subscribe(
      (response: IAuthenticationResponse) => {
        this.loginOkResponse(response);
        this.isLoginIn = false;
      },
      (error: IAuthenticationResponseError) => {
        this.isLoginIn = false;
        this.loginErroResponse(error);
      }
    );
  }

  loginOkResponse(response: IAuthenticationResponse) {
    const {
      credentialOwner: { isFirstLogin, success, retry }
    } = response;

    this.errorRetry = retry;
    // case 1: Usuario nuevo 4 Digitos [newUser]
    // Se va  cambaio de pasword
    if (isFirstLogin && success && retry == 0) {
      this.router.navigateByUrl('/set-password');
    }

    if (!isFirstLogin && success && retry == 0) {
      this.router.navigateByUrl('/home');
    }

    if (isFirstLogin && success) {
      return;
    }

    if (retry === 2) {
      this.loginPresenter.modalRetry02.showModal = true;
      this.caseShowAlert = 'reintend2';
      this.msghowAlert = this.loginPresenter.getAlertError('reintend2');
    }

    if (retry === 1) {
      this.loginPresenter.modalRetry01.showModal = true;
      this.caseShowAlert = 'reintend1';
      this.msghowAlert = this.loginPresenter.getAlertError('reintend1');
    }

   
    if (!isFirstLogin && !success && (retry === -1 || retry === -2)) {
        
      if (retry === -1) {
        this.loginPresenter.modalBloked01.title = this.loginPresenter.modalBloked01.errors['ERR461'] || '';
        this.caseShowAlert = 'blocked1';
        this.msghowAlert = this.loginPresenter.getAlertError('blocked1');
        this.showToolTip = false;
      }

      if (retry === -2){
        this.loginPresenter.modalBloked01.title = this.loginPresenter.modalBloked01.errors['ERR462'] || '';
        this.caseShowAlert = 'blocked2';
        this.msghowAlert = this.loginPresenter.getAlertError('blocked2');
      }

      this.loginPresenter.modalBloked01.showModal = true;
      this.loginPresenter.form.reset();
      this.loginPresenter.form.controls['username'].disable();
      this.loginPresenter.form.controls['password'].disable();
      this.disabledButton = true;
    }


  }

  closeModal() {
    this.loginPresenter.modalRetry02.showModal = false;
    this.loginPresenter.modalRetry01.showModal = false;
    this.loginPresenter.modalBloked01.showModal = false;
    this.loginPresenter.form.controls['username'].setValue('');
    this.loginPresenter.form.controls['password'].setValue('');
  }

  loginErroResponse(errorResponse: IAuthenticationResponseError) {
     const { code, description } = errorResponse
    if (code === "ERR461"){
      this.router.navigateByUrl('/session-status/session-expired');
    }
    if (code === "ERR462"){
      this.router.navigateByUrl('/session-status/maintenance');
    }
    if (code === "ERR463"){
      this.router.navigateByUrl('/session-status/active-session-other-browser');
    }
    if (code === "ERR464"){
      this.router.navigateByUrl('/session-status/session-closed');
    }
    
  }

  togglePassword() {
    this.visiblePassword = !this.visiblePassword;
  }

  recoverPassword() {
    this.router.navigate(['/password-recovery']);
  }

 

  async sleep(time: number) {
    return await new Promise((resolve) => setTimeout(resolve, time));
  }

  
}
function takeUntilDestroyed(destroyRef: any): import("rxjs").OperatorFunction<import("@angular/router").Event, unknown> {
  throw new Error('Function not implemented.');
}

