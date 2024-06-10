import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'std-step1',
  templateUrl: './step1.component.html'
})
export class Step1Component {
  form!: FormGroup;
  isLoading!: boolean;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/password-recovery/step2']);
    }, 1000);
  }
}
