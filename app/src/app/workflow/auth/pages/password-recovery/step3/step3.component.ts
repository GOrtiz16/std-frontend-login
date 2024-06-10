import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'std-step3',
  templateUrl: './step3.component.html'
})
export class Step3Component {
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

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group(
      {
        password: ['', [Validators.required]],
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

  validateConfirmPassword(confirmPass: string): void {
    const msg = 'Las contraseñas ingresadas deben coincidir';
    const _ = !confirmPass.length || confirmPass.length != this.maxlength || this.password === confirmPass;
    this.helperText2 = _ ? '' : msg;
    this.status2 = _ ? 'default' : 'error';
  }

  onSubmit() {
    this.isLoading = true;
  }
}
