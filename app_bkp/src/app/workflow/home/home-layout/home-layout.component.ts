import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFooterComponent } from '../../login/commons/components/login-footer/login-footer.component';
import { StdMainHeaderComponent } from 'src/app/shared/components/std-main-header/std-main-header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginFooterComponent, StdMainHeaderComponent],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent {}
