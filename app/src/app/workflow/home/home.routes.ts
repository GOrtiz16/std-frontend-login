import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
