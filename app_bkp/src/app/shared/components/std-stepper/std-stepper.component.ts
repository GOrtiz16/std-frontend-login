import { Component, Input } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'std-stepper',
  templateUrl: './std-stepper.component.html',
  styleUrls: ['./std-stepper.component.scss'],
  standalone: true,

  imports: [MatButtonModule, MatStepperModule],
})
export class StdStepperComponent {
  @Input() steps: string[] = [];
  @Input() step = 0;

  constructor() { }
}
