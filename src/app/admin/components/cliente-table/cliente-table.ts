import { Component, input } from '@angular/core';
import { ClientesInterface } from '../../pages/clientes/clientes';

@Component({
  imports: [],
  selector: 'tr[cliente-table]',
  styleUrl: './cliente-table.css',
  templateUrl: './cliente-table.html',
})
export class ClienteTable {
  usuarioDB = input.required<ClientesInterface>();
}
