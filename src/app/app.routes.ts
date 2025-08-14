import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./pages/lista-certificados/lista-certificados').then(m => m.ListaCertificados)
  },
  {
    path: 'certificados/novo',
    loadComponent: () => import('./pages/gerar-certificado/gerar-certificado').then(m => m.GerarCertificado)
  },
  {
    path: 'certificados/:id',
    loadComponent: () => import('./pages/certificado/certificado').then(m => m.Certificado)
  }
];
