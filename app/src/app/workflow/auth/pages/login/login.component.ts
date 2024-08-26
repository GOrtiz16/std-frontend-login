import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ILoginUserRequest } from './interfaces/login-user-request.interface';
import { IAuthenticationResponse, IAuthenticationResponseError } from './interfaces/login-user-response.interface';
import { RECAPTCHA_KEY } from './constants/recaptcha.constants';
import { NavigationEnd, Router } from '@angular/router';
// import { ChannelInfoService } from './services/info.service';
import { IInfoChannelResponse, Keyboard } from './interfaces/info-response.interfaces';
import { KeyBoardHelper } from 'src/app/shared/services/keyboard.service';
import { catchError, filter, map, Observable, of, switchMap, tap } from 'rxjs';
import { AppBusEventsService } from 'src/app/shared/services/bus-events.service';
import { TimerService } from 'src/app/shared/core/timer-manager/timer-manager.service';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { LoginPresenter } from './constants/login.presenter';
import { LoginService } from './services/login.service';
import { InfoService } from '../../services/info.service';
import { InfoInterface } from '../password-recovery/interfaces/password-recovery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('noLogin2AttemptsLeft', { static: true }) noLogin2AttemptsLeftTpl!: TemplateRef<HTMLElement>;
  @ViewChild('noLogin1AttemptLeft') noLogin1AttemptLeftTpl!: TemplateRef<HTMLElement>;
  @ViewChild('contactUs') contactUsTpl!: TemplateRef<HTMLElement>;

  visiblePassword!: boolean;
  isLoginIn!: boolean;
  disabledButton!: boolean;
  caseShowAlert = '';
  msghowAlert = '';
  showToolTip!: boolean;
  title = '¡Oh, no! Parece que hubo un error';
  errorRetry?: number;

  keyBoardHelperService = new KeyBoardHelper();

  constructor(
    private infoService: InfoService,
    private router: Router,
    private TimerService: TimerService,
    private appBusEventsService: AppBusEventsService,
    public loginPresenter: LoginPresenter,
    public loginService: LoginService,
    // public channelInfoService: ChannelInfoService,
    public reCaptchaV3Service: ReCaptchaV3Service
  ) {}

  ngOnInit() {
    // this.initRecaptcha();
    this.initCounter();
    //this.initRouterNavegation()
    this.doMainOrchestation().subscribe();
  }

  doMainOrchestation() {
    return of(undefined).pipe(
      tap(() => this.showLoader()),
      switchMap(() => {
        return this.getChannelInfo().pipe(
          map((response: IInfoChannelResponse) => {
            const kbr = response['keyboard'] ? response['keyboard'] : ({} as Keyboard);
            const logintime = response['time']['milliseconds']
              ? (response['time']['milliseconds'] as number) / 1000
              : 300;
            this.keyBoardHelperService.setKeyBoard(kbr);
            this.TimerService.setTime(logintime);
          }),
          catchError((error: IAuthenticationResponseError) => {
            return of(null);
          })
        );
      }),
      tap(() => this.hideLoader())
    );
  }

  showLoader() {
    this.appBusEventsService.sendEvent({ loader: { show: true } });
  }

  hideLoader() {
    this.appBusEventsService.sendEvent({ loader: { show: false } });
  }

  initCounter() {
    this.TimerService.startTimer();
    this.TimerService.onTimerEnd().subscribe(() => {
      this.closeModal();
      //this.TimerService.startTimer();
    });
  }

  initRouterNavegation() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.TimerService.resetTimer();
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

  onSubmit() {
    this.caseShowAlert = '';
    this.showToolTip = true;

    if (this.loginPresenter.form.invalid) {
      return;
    }

    this.isLoginIn = true;

    const request: ILoginUserRequest = {
      seed: this.keyBoardHelperService.getSeed(),
      userCredentialId: this.loginPresenter.username.value as string,
      password: this.keyBoardHelperService.getPasswordHash(this.loginPresenter.password.value as string),
      rememberUser: this.loginPresenter.rememberUser.value as boolean,
      recaptcha: this.loginPresenter.recaptcha.value as string
    };

    this.loginService.loginUser(request).subscribe({
      next: (response: IAuthenticationResponse) => {
        this.loginOkResponse(response);
        this.isLoginIn = false;
      },
      error: (error: IAuthenticationResponseError) => {
        this.isLoginIn = false;
        this.loginErroResponse(error);
      }
    });
  }

  loginOkResponse(response: IAuthenticationResponse) {
    if (!Object.keys(response).length) {
      return;
    }

    const {
      credentialOwner: { isFirstLogin, success, retry }
    } = response;

    this.errorRetry = retry;
    // case 1: Usuario nuevo 4 Digitos [newUser]
    // Se va  cambaio de pasword
    if (isFirstLogin && success && retry == 0) {
      const accessToken = response.sessionToken.accessToken;
      const userCredentialId = this.loginPresenter.username.value;
      const navigationExtras = { state: { accessToken, userCredentialId } };
      this.router.navigateByUrl('/set-password', navigationExtras);
    }

    if (!isFirstLogin && success && retry == 0) {
      sessionStorage.setItem('ars_loginshell_token', JSON.stringify(response.sessionToken) || 'token test');
      sessionStorage.setItem('user_credential_id', this.loginPresenter.username.value || '');
      this.router.navigateByUrl('/consolidated-position');
    }

    if (isFirstLogin && success) {
      return;
    }

    if (retry === 1) {
      this.loginPresenter.modalRetry02.showModal = true;
      this.caseShowAlert = 'reintend2';
      this.msghowAlert = this.loginPresenter.getAlertError('reintend2');
    }

    if (retry === 2) {
      this.loginPresenter.modalRetry01.showModal = true;
      this.caseShowAlert = 'reintend1';
      this.msghowAlert = this.loginPresenter.getAlertError('reintend1');
    }

    if (!success && (retry === -1 || retry === -2)) {
      if (retry === -1) {
        this.loginPresenter.modalBloked01.title = this.loginPresenter.modalBloked01.errors['ERR461'] || '';
        this.caseShowAlert = 'blocked1';
        this.msghowAlert = this.loginPresenter.getAlertError('blocked1');
        this.showToolTip = false;
      }

      if (retry === -2) {
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
    const { code } = errorResponse;
    const url = {
      ERR461: '/session-status/session-expired',
      ERR462: '/session-status/maintenance',
      ERR463: '/session-status/active-session-other-browser',
      ERR464: '/session-status/session-closed'
    }[code];

    url && this.router.navigateByUrl(url);
  }

  togglePassword() {
    this.visiblePassword = !this.visiblePassword;
  }

  recoverPassword() {
    this.router.navigate(['/password-recovery']);
  }

  getChannelInfo(): Observable<any> {
    return this.infoService.getCanalSecurity();
  }
}
