import { Routes } from '@angular/router';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

export const routes: Routes = [
  {
    path: 'password-recovery',
    component: PasswordRecoveryComponent,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      // { path: 'step1', loadChildren: () => import('./step1/step1.module').then((m) => m.Step1Module) },
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component },
      { path: 'step3', component: Step3Component },
      { path: '**', redirectTo: 'step1' }
    ]
  }
];
