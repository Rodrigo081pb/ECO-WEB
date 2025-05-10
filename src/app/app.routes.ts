import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../core/auth/login/login.component').then(m => m.LoginComponent),
  },
  // {
  //   path: 'cadastro',
  //   loadComponent: () =>
  //     import('./pages/cadastro/cadastro.component').then(m => m.CadastroComponent),
  // },
  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
  // },
  {
    path: '**',
    redirectTo: 'login',
  },
];
