import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordRetrieveService } from '../../services/retrieve-password.service';

@Component({
  selector: 'std-password-reset',
  templateUrl: './password-reset.component.html'
})
export class PasswordResetComponent {
  visiblePassword1!: boolean;
  visiblePassword2!: boolean;
  maxlength = 8;
  isLoading!: boolean;
  showStrengthInfo!: boolean;
  password!: string;
  helperText1 = '';
  helperText2 = '';
  status1 = 'default';
  status2 = 'default';

  form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private passwordRetrieveService: PasswordRetrieveService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group(
      {
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')!.value === formGroup.get('confirmPassword')!.value ? null : { mismatch: true };
  }

  togglePassword1() {
    this.visiblePassword1 = !this.visiblePassword1;
  }

  togglePassword2() {
    this.visiblePassword2 = !this.visiblePassword2;
  }

  passwordValidationStatus(status: number) {
    const msg = 'Ingresa una contraseña válida';
    const _ = status == 0 || status == 4 || this.password.length != this.maxlength;
    setTimeout(() => ((this.helperText1 = _ ? '' : msg), (this.status1 = _ ? 'default' : 'error')));
  }

  validatePassword(password: string): void {
    this.password = password;
    this.validateConfirmPassword(this.form.controls['confirmPassword'].value);
  }

  validateConfirmPassword(confirmPass: string): void {
    const error = 'Las contraseñas ingresadas deben coincidir';
    const success = 'Las contraseñas coinciden';
    const _ = !confirmPass.length;
    this.helperText2 = !confirmPass.length ? '' : this.password === confirmPass ? success : error;
    this.status2 = !confirmPass.length ? 'default' : this.password === confirmPass ? 'success' : 'error';
  }

  onSubmit() {
    this.isLoading = true;
    const navigationState = history.state;
    this.passwordRetrieveService
      .passwordRetrieve(this.form.controls['password'].value, navigationState.username)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: () => {
          this.isLoading = false;
        }
      });
  }
}
