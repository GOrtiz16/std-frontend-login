import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'std-step2',
  templateUrl: './step2.component.html'
})
export class Step2Component {
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

  constructor(private router: Router, private fb: FormBuilder) {}

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

    setTimeout(() => {
      this.router.navigate(['/password-recovery/step3']);
    }, 1000);
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
