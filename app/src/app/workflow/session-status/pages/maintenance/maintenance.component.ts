import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {

 constructor(
    private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login'])
  }
}
