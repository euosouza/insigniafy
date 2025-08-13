import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'certificados',
    pathMatch: 'full' // Redireciona para a lista de certificados por padrão
  },
  {
    path: 'certificados',
    loadComponent: () => import('./pages/lista-certificados/lista-certificados').then(m => m.ListaCertificados)
  },
  {
    path: 'gerar-certificado',
    loadComponent: () => import('./pages/gerar-certificado/gerar-certificado').then(m => m.GerarCertificado)
  }
];
