import { Component, ElementRef, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IChangePasswordRP, IChangePasswordRQ } from '../set-password/commons/models/change-password.intrefaces';
import { ChangePasswordService } from '../set-password/commons/services/change-password.service';
import { OtpValidateService } from '../login/commons/services/api/otp_validate.service';

@Component({
  selector: 'std-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent {
  countdownMinutes: number = 0;
  countdownSeconds: number = 10;
  isTimeUp!: boolean;
  isLoading!: boolean;
  interval: any;
  defaultToast = `<span>Hemos enviado el código de verificación al correo {{email}}</span>`;
  email!: string;

  @ViewChild('pinInput') pinInput!: ElementRef;
  @ViewChild('toast') toast!: ElementRef;

  form!: FormGroup;

  constructor(private router: Router, private otpValidateService: OtpValidateService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.email = 'm********@gmail.com';
    setTimeout(() => {
      this.pinInput.nativeElement.setFocus();
      this.toast.nativeElement.innerHTML = this.defaultToast.replace(/{{email}}/g, this.email);
    });
    this.startCountdown();
  }

  initForm(): void {
    this.form = this.fb.group({
      pinCode: [{ value: '', disabled: false }, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.stopCountdown();
    this.isLoading = true;

    let request = {
      credential: {
        userCredentialId: 'VNANDI'
      },
      verification: {
        otp: '8804'
      }
    };

    this.otpValidateService.validateOtpCode(request).subscribe(
      (response) => {
        console.log(response);
        if (this.form.valid) {
          this.router.navigateByUrl('/login');
        }
      },
      (error) => console.log(error)
    );

    // let request = {
    //   seed: '14bf1deb-60c4-46c1-a2f1-adb501fe759e',
    //   password: {
    //     SelectedKey: [
    //       'f6381c2a-f7e0-4701-afd1-31995d65d0aa',
    //       '8de755b9-fa2f-4f77-a620-5b6089b6a23c',
    //       '8edc457a-3202-46ff-aae0-5fc031e16d20',
    //       'be57a30a-3d5c-4f71-9de4-7ea3c8487f20',
    //       'fb7eda63-81cf-4842-92cc-35a05d442235',
    //       '33b3a006-f100-4380-98e8-88c7e0d0765e',
    //       'd6558e8a-35d5-4bab-b4cc-268036d0d7fc',
    //       '2713f4d6-965f-4fa2-a0e0-e84cc846a551'
    //     ]
    //   },
    //   accessToken:
    //     'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaVVzZXJuYW1lIiwiZXhwIjoxNjIxNzQ5MjUzfQ.GBt8nJG0o76MnPX8TvoEm7qOvzEXG6Dq8s_QO8tZEEg',
    //   codeVerification: this.pinForm.controls['pinCode'].value
    // } as IChangePasswordRQ;

    // this.changePasswordService.changePassword(request).subscribe(
    //   (response: IChangePasswordRP) => {
    //     console.log(response);
    //     if (this.pinForm.valid) {
    //       this.router.navigateByUrl('/login');
    //     }
    //   },
    //   (error) => console.log(error)
    // );
  }

  resendCode(): void {
    this.isTimeUp = false;
    this.countdownMinutes = 0;
    this.countdownSeconds = 10;
    this.form.controls['pinCode'].enable();
    setTimeout(() => this.pinInput.nativeElement.reset(), 100);
    this.toast.nativeElement.status = 'info';
    this.toast.nativeElement.innerHTML = this.defaultToast.replace('{{email}}', this.email);
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
