import { Component, afterNextRender } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface NavOption {
  label: string;
  route?: string;
  rol?: 'todos' | 'invitado' | 'user' | 'admin';
  accion?: 'logout' | 'ninguna';
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {

  constructor(private router: Router) {
    afterNextRender(() => {
      this.inicializarDatosPredefinidos();
    });
  }


  allNavOptions: NavOption[] = [
    { label: 'Estrategia', route: '/estrategia', rol: 'todos' },
    { label: 'Familiares', route: '/familiares', rol: 'todos' },
    { label: 'Cartas', route: '/cartas', rol: 'todos' },
    { label: 'Juegos Party', route: '/juegos-party', rol: 'todos' },
    { label: 'Carrito', route: '/carrito', rol: 'todos' },
    { label: 'Registro', route: '/registro', rol: 'invitado' },
    { label: 'Login', route: '/login', rol: 'invitado' },
    { label: 'Inventario', route: '/inventario', rol: 'admin' },
    { label: 'Clientes', route: '/clientes', rol: 'admin' },
    { label: 'Perfil', route: '/perfil', rol: 'user' },
    { label: 'Cerrar Sesión', route: '/inicio', rol: 'user', accion: 'logout' },
  ]


  ejecutarAccion(accion?: string) {
    if (accion === 'logout') {
      localStorage.removeItem('sesionActiva');
      this.router.navigate(['/inicio']);
    }
  }

  inicializarDatosPredefinidos() {
    if (!localStorage.getItem('usuariosDB')) {
      const usuariosIniciales = [
        { email: 'admin@gmail.com', password: 'Contrasena123.', rol: 'admin', nombre: 'Administrador' },
        { email: 'user@gmail.com', password: 'Contrasena123.', rol: 'user', nombre: 'Alex Rojas' }
      ];
      localStorage.setItem('usuariosDB', JSON.stringify(usuariosIniciales));
    }
  }



}