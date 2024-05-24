import { Component } from '@angular/core';

import { StdStepperComponent } from 'src/app/shared/components/std-stepper/std-stepper.component';
import { LoginFooterComponent } from '../login/commons/components/login-footer/login-footer.component';
import { StdMainHeaderComponent } from 'src/app/shared/components/std-main-header/std-main-header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-set-password',
  standalone: true,
  imports: [
    CommonModule,
    StdMainHeaderComponent,
    StdStepperComponent,
    LoginFooterComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
  ],
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent {
  visiblePassword1 = false;
  visiblePassword2 = false;
  isLoginIn = false;
  showStrengthInfo = false;

  constructor() {}

  ngOnInit() {}

  showPassword1() {
    this.visiblePassword1 = !this.visiblePassword1;
  }

  showPassword2() {
    this.visiblePassword2 = !this.visiblePassword2;
  }

  onSubmit() {}

  recoverPassword() {}

  onStrengthChanged(event: any) {
    console.log(event);
  }
}
