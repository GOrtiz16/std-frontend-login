import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

interface Step {
  name: 'email_entry' | 'otp_verification' | 'password_reset';
  route: string;
}

const steps: Step[] = [
  { name: 'email_entry', route: 'email-entry' },
  { name: 'otp_verification', route: 'otp-verification' },
  { name: 'password_reset', route: 'password-reset' },
];
@Component({
  selector: 'std-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.scss'
})
export class PasswordRecoveryComponent {
  @ViewChild('email_entry') email_entry!: ElementRef;
  @ViewChild('otp_verification') otp_verification!: ElementRef;
  @ViewChild('password_reset') password_reset!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.updateStepperStatus());

    setTimeout(() => this.updateStepperStatus());
  }

  updateStepperStatus(): void {
    const currentRoute = this.router.url.split('/').pop();
    let foundActive = false;
  
    steps.forEach((step) => {
      const status: 'complete' | 'active' | 'incomplete' = foundActive
        ? 'incomplete'
        : step.route === currentRoute
        ? 'active'
        : 'complete';
  
      this[step.name].nativeElement.status = status;
  
      if (step.route === currentRoute) {
        foundActive = true;
      }
    });
  }
}
