import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpService } from '../../services/otp.service'; // Asegúrate de ajustar la ruta según tu estructura de carpetas.

@Component({
  selector: 'std-email-entry',
  templateUrl: './email-entry.component.html'
})
export class EmailEntryComponent {
  form!: FormGroup;
  isLoading!: boolean;
  helperText = '';
  status = 'default';

  constructor(private router: Router, private fb: FormBuilder, private otpService: OtpService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]]
    });
  }

  validateEmail(): void {
    const email = this.form.controls['email'].value;
    this.helperText = this.form.invalid && email ? 'Ingresa una dirección de correo electrónico válida' : '';
    this.status = this.form.invalid && email ? 'error' : 'default';
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const email = this.form.controls['email'].value;
    const channel = 'WEB';

    this.otpService.sendOtpRequest(email, channel).subscribe({
      next: (response) => {
        const { username } = response;
        this.router.navigate(['/password-recovery/otp-verification'], { state: { username, email } });
      },
      error: (error) => {
        this.helperText = error.error.errors ? error.error.errors[0].message : 'Error desconocido';
        this.status = 'error';
        this.isLoading = false;
      }
    });
  }
}
