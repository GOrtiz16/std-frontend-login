import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdStepperComponent } from 'src/app/shared/components/std-stepper/std-stepper.component';
import { StdAlertComponent } from 'src/app/shared/components/std-alert/std-alert.component';
import { LoginFooterComponent } from '../login/commons/components/login-footer/login-footer.component';
import { CountdownModule } from './countdown/countdown.module';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'std-verification-code',
  standalone: true,
  imports: [
    CommonModule,
    StdStepperComponent,
    StdAlertComponent,
    LoginFooterComponent,
    CountdownModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent {
  private readonly _fBuilder = inject(FormBuilder);

  constructor(private router: Router) {}

  ngOnInit() {}

  fGroup = this._fBuilder.nonNullable.group({
    inputCod: ['', [Validators.required, Validators.minLength(1)]],
    countdown: 5
  });

  onClickFinalize() {
    if (this.fGroup.controls.inputCod.hasError('required')) {
      // change class desibled
    } else {
      this.router.navigateByUrl('/login');
    }
    // const inputs = this.fGroup.controls.inputs;
    // const countdown = this.fGroup.controls.countdown;
  }
}
