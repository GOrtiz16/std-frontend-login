import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'std-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.scss'
})
export class PasswordRecoveryComponent {
  @ViewChild('step1') step1!: ElementRef;
  @ViewChild('step2') step2!: ElementRef;
  @ViewChild('step3') step3!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.setStepper());
  }

  setStepper(): void {
    const step = this.router.url.match(/\d(?!.*\d)/)?.[0];
    if (!step) {
      return;
    }

    const s = +step;
    this.step1.nativeElement.status = s == 1 ? 'active' : 'complete';
    this.step2.nativeElement.status = s == 2 ? 'active' : s < 2 ? 'incomplete' : 'complete';
    this.step3.nativeElement.status = s == 3 ? 'active' : 'incomplete';
  }
}
