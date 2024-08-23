import { Component, ElementRef, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { OtpValidateService } from '../login/services/otp_validate.service';
import { PasswordUpdateService } from '../password-recovery/services/update-password.service';

export interface INavigationExtras {
  email: string;
  accessToken: string;
  userCredentialId: string;
  password: string;
}

@Component({
  selector: 'std-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent {
  countdownMinutes: number = 5;
  countdownSeconds: number = 0;
  isTimeUp!: boolean;
  isLoading!: boolean;
  interval: any;
  defaultToast = `<span>Hemos enviado el código de verificación al correo {{email}}</span>`;
  navigationExtras: INavigationExtras = {
    email: '*********@*****.***',
    accessToken: '',
    userCredentialId: '',
    password: ''
  };

  @ViewChild('pinInput') pinInput!: ElementRef;
  @ViewChild('toast') toast!: ElementRef;

  form!: FormGroup;

  constructor(
    private router: Router,
    private otpValidateService: OtpValidateService,
    private fb: FormBuilder,
    private passwordUpdateService: PasswordUpdateService
  ) {
    this.setNavigationExtras();
  }

  ngOnInit() {
    this.initForm();

    setTimeout(() => {
      this.pinInput.nativeElement.setFocus();
      this.toast.nativeElement.innerHTML = this.defaultToast.replace(/{{email}}/g, this.navigationExtras.email);
    });
    this.startCountdown();
  }

  setNavigationExtras() {
    const navigation = this.router.getCurrentNavigation();
    if (!navigation) {
      return;
    }

    const state = navigation?.extras.state as INavigationExtras;
    this.navigationExtras = {
      email: state?.email,
      accessToken: state?.accessToken,
      userCredentialId: state?.userCredentialId,
      password: state?.password
    };
  }

  initForm(): void {
    this.form = this.fb.group({
      pinCode: [{ value: '', disabled: false }, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.stopCountdown();
    this.isLoading = true;

    this.passwordUpdateService
      .passwordUpdate(
        this.navigationExtras.password,
        this.navigationExtras.accessToken,
        this.form.controls['pinCode'].value
      )
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log(response);
          // if (this.form.valid) {
          //   this.router.navigateByUrl('/login');
          // }
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        }
      });
  }

  resendCode(): void {
    this.isTimeUp = false;
    this.countdownMinutes = 5;
    this.countdownSeconds = 10;
    this.form.controls['pinCode'].enable();
    setTimeout(() => this.pinInput.nativeElement.reset(), 100);
    this.toast.nativeElement.status = 'info';
    this.toast.nativeElement.innerHTML = this.defaultToast.replace('{{email}}', this.navigationExtras.email);
    this.startCountdown();
  }

  private countDownTimeout(): void {
    clearInterval(this.interval);
    this.isTimeUp = true;
    this.pinInput.nativeElement.reset();
    this.form.controls['pinCode'].disable();
    this.toast.nativeElement.status = 'error';
    this.toast.nativeElement.innerHTML = `<span *ngIf="toastStatus == 'error'">El código de verificación ha expirado. Debes generar un nuevo código.</span>`;
  }

  private stopCountdown(): void {
    clearInterval(this.interval);
  }

  private startCountdown() {
    this.interval = setInterval(() => {
      if (this.countdownSeconds > 0) {
        this.countdownSeconds--;
        if (this.countdownSeconds == 0 && this.countdownMinutes == 0) {
          this.countDownTimeout();
        }
      } else {
        if (this.countdownMinutes > 0) {
          this.countdownMinutes--;
          this.countdownSeconds = 59;
        }
      }
    }, 1000);
  }
}
