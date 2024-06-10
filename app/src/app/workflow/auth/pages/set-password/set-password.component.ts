import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginFooterComponent } from '../login/commons/components/login-footer/login-footer.component';
import { StdMainHeaderComponent } from 'src/app/shared/components/std-main-header/std-main-header.component';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChannelInfoService } from '../login/commons/services/api/info.service';
import { KeyBoardHelper } from 'src/app/shared/services/keyboard.service';
import { ChangePasswordService } from './commons/services/change-password.service';
import { OtpService } from '../login/commons/services/api/otp.service';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

@Component({
  selector: 'app-set-password',
  standalone: true,
  imports: [CommonModule, StdMainHeaderComponent, LoginFooterComponent, ReactiveFormsModule, StdDirectivesModule],
  providers: [ChangePasswordService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent {
  visiblePassword1!: boolean;
  visiblePassword2!: boolean;
  maxlength = 8;
  isLoginIn!: boolean;
  showStrengthInfo!: boolean;
  password!: string;
  helperText1 = '';
  helperText2 = '';
  status1 = 'default';
  status2 = 'default';

  keyBoardHelperService = new KeyBoardHelper();

  passwordForm: FormGroup;

  constructor(
    private router: Router,
    public channelInfoService: ChannelInfoService,
    private otpService: OtpService,
    private fb: FormBuilder
  ) {
    this.passwordForm = this.fb.group(
      {
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit() {
    // this.getUserChannelInfo();
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
    this.isLoginIn = true;

    const request = {
      sessionToken: {
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY3NDg0In0.eyJpc3MiOiJCU1AiLCJhdWQiOiJBTkQiLCJzdWIiOiJWU0FOVElOTyIsImp0aSI6IjY3NDg0IiwiaWF0IjoxNzE2ODI0NjU0LCJuYmYiOjE3MTY4MjQ2NTQsImV4cCI6MTcxNjgyNDk1NCwic2VjcmV0IjoiSzRWOC9mRS9KRmlNVkNOeHovMUMwdzdQb0dWMlBSdVUvZExWRitRZFBJUFdNY1ppdHZMakNldHVmSUQ4TUI5blc2MW5SZGtXSkF6ay9PK1lXT013UmI2QUlBK3NlaXlkdE4rTXl3cGYyRHYyNTFmU1hOcm8wM1BMS0VrcmhVNnF5WS9YYlBlVVVpWnBhS05RYVJNd2xQRjV4cmhzRFZ0dW1nZGNvSTI1ZVB1ZlFPL3hSTm8yNzRqejAwQm5Da0l4bVg1S25WNDBNb1MwMVBZOXJXTlZpVzVCTkJOUFhZY3lFczkvd2xoYXFUMTNzc21BeTFyTFBvUHNHaURjL3dKSlFTRGRLMHhDT0JvZGFUOVZJMmNpK09IcHFtY1lMRUhLbkpGMEwyRUtrOWJQZUJCQ2hvYms0WFN2dzBGMEIrR1NGRnZXUjZCQTdNeFloL0x6dTFvU3pRPT0iLCJpdjJfc3RhdGljIjoiMEExUzJEM0Y0RTVSNlQ3WSIsIml2X3N0YXRpYyI6IjZBMVMyVzNGNEU1QzZHN0siLCJ0YXJqZXRhIjoiMTIyMDEwMDA2NTAzODAwMSAgICIsImtleV9zdGF0aWMiOiJJQUZVTC82Ky91MzBacHVYZ3huR1hBPT0ifQ.LjDbs_5kmw0Ffm4pzwyqtH91Qe7bXlSabHb13oCw_5bY8enbIT1uPoeySMMtLLLupm0F1NIu-nooMvdPliHMCu0vUjg4pB4kRdpbolXOW3KuxAigy6oKS6Fc2S9rtnb8H-HUH5uBWlzumxzQWj-_vp1vtBPTC_mIIDRDMqutE6epUtW8eOgPkrDnXjod6gD8wBUBPrMQDhsYSx-1BvTaaiqU7zl7B3BdC4Mzb6MCn8KUUe8uVICI7ZVVoY5uGdgRkiiWHyaxV-PJ-ZeeBYtSwLbROE-rND3qVcK7nb4zSvNx6xkurmpcQOXVpU0LvZZJdBBjVLZ7j1IUhVnr-EI__g'
      }
    };
    this.otpService.sendOtpCode(request).subscribe(() => {
      this.router.navigateByUrl('/verification-code');
    });
  }

  getUserChannelInfo() {
    this.channelInfoService.getChannnelInfo().subscribe(() => {
      //this.keyBoardHelperService.setKeyBoard(response['keyboard'])
    });
  }
}
