import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./workflow/auth.routes').then((m) => m.ROUTES),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./workflow/home/home.routes').then((m) => m.ROUTES),
  },
];
