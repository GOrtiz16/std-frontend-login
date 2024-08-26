import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StdMainHeaderComponent } from 'src/app/shared/components/std-main-header/std-main-header.component';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InfoService } from '../../services/info.service';
import { KeyBoardHelper } from 'src/app/shared/services/keyboard.service';
import { ChangePasswordService } from './commons/services/change-password.service';
import { OtpService } from '../login/services/otp.service';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

@Component({
  selector: 'app-set-password',
  standalone: true,
  imports: [CommonModule, StdMainHeaderComponent, ReactiveFormsModule, StdDirectivesModule],
  providers: [ChangePasswordService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent {
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
  accessToken!: string;
  userCredentialId!: string;

  keyBoardHelperService = new KeyBoardHelper();

  form!: FormGroup;

  constructor(
    private router: Router,
    public channelInfoService: InfoService,
    private otpService: OtpService,
    private fb: FormBuilder
  ) {
    this.setNavigationExtras();
  }

  ngOnInit() {
    this.initForm();
  }

  setNavigationExtras(): void {
    const navigation = this.router.getCurrentNavigation();
    if (!navigation) {
      return;
    }

    const navigationExtra = navigation?.extras.state as { accessToken: string; userCredentialId: string };
    this.accessToken = navigationExtra?.accessToken;
    this.userCredentialId = navigationExtra?.userCredentialId;
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
    const accessToken = this.accessToken;
    const userCredentialId = this.userCredentialId;
    const password = this.password;
    const request = { sessionToken: { accessToken } };

    this.otpService.sendOtpCode(request).subscribe((response: any) => {
      const email = response.sendOtp.email;
      const navigationExtras = { state: { email, accessToken, userCredentialId, password } };
      this.router.navigateByUrl('/verification-code', navigationExtras);
    });
  }
}
