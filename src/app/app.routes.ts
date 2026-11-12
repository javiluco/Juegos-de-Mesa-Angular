import { Routes } from '@angular/router';
import { Inicio } from './juegos/pages/inicio/inicio';

export const routes: Routes = [
   {
      path: 'inicio',
      component: Inicio
   },
   {
      path: 'estrategia',
      loadComponent: () => import('./juegos/pages/estrategia/estrategia')
   },
   {
      path: 'familiares',
      loadComponent: () => import('./juegos/pages/familiares/familiares')
   },
   {
      path: 'cartas',
      loadComponent: () => import('./juegos/pages/cartas/cartas')
   },
   {
      path: 'juegos-party',
      loadComponent: () => import('./juegos/pages/party/party')
   },
   {
      path: 'registro',
      loadComponent: () => import('./auth/pages/registro/registro')
   },
   {
      path: 'login',
      loadComponent: () => import('./auth/pages/login/login')
   },
   {
      path: 'recuperar-password',
      loadComponent: () => import('./auth/pages/recuperar-contrasena/recuperar-contrasena')
   },
   { path: '', redirectTo: 'inicio', pathMatch: 'full' },
   { path: '**', redirectTo: 'inicio' }
];
