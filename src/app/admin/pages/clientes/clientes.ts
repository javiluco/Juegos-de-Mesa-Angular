import { Component, signal } from '@angular/core';
import { ClienteTable } from '../../components/cliente-table/cliente-table';

export interface ClientesInterface {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  usuario: string;
  correo: string;
  direccion?: string;
}

@Component({
  imports: [ClienteTable],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export default class Clientes {

  usuarios = signal<ClientesInterface[]>([
    { id: 1, nombre: 'Alex', apellido: 'Rojas', fechaNacimiento: '2005-03-14', usuario: 'jugador123', correo: 'jugador123@gmail.com', direccion: 'Av. Pedro Aguirre Cerda 4521, Cerrillos' },
    { id: 2, nombre: 'Matías', apellido: 'González', fechaNacimiento: '1998-11-02', usuario: 'matias.gonzalez', correo: 'matias.gonzalez@hotmail.com', direccion: 'Los Olmos 1280, Maipú' },
    { id: 3, nombre: 'Valentina', apellido: 'Muñoz', fechaNacimiento: '2010-07-25', usuario: 'vale.munoz', correo: 'valentina.munoz@outlook.com', direccion: 'Av. Providencia 2345, Providencia' },
    { id: 4, nombre: 'Sebastián', apellido: 'Rojas', fechaNacimiento: '1989-12-09', usuario: 'seba.rojas', correo: 'sebastian.rojas@gmail.com', direccion: 'Calle Santa Rosa 987, Santiago Centro' },
    { id: 5, nombre: 'Francisca', apellido: 'Díaz', fechaNacimiento: '2002-05-30', usuario: 'fran.diaz', correo: 'francisca.diaz@yahoo.com', direccion: 'Pasaje Los Aromos 342, La Florida' },
  ]);

}
