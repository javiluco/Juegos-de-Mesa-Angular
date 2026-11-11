import { Routes } from '@angular/router';
import { Inicio } from './juegos/pages/inicio/inicio';

export const routes: Routes = [
   {
    path:'inicio',
    component: Inicio
   } ,
   {path: '**', redirectTo: 'inicio'}
];
