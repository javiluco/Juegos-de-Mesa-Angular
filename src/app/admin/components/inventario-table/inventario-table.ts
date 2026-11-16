import { Component, input } from '@angular/core';
import { JuegosInicialesInterface } from '../../pages/inventario/inventario';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'tr[inventario-table]',
  styleUrl: './inventario-table.css',
  templateUrl: './inventario-table.html',
})
export class InventarioTable {
  juego = input.required<JuegosInicialesInterface>();
}
