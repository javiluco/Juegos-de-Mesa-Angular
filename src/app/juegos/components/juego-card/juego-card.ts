import { CurrencyPipe } from '@angular/common';
import { Component, input} from '@angular/core';

export interface JuegoDescriptionCard {
  id: number;
  titulo: string;
  descripcion: string;
  valor: number;
  descuento: number;
  img: string;
  tema?: string;
}

@Component({
  imports: [CurrencyPipe],
  selector: 'juego-card',
  styleUrl: './juego-card.css',
  templateUrl: './juego-card.html',
})
export class JuegoCard {
  juego = input.required<JuegoDescriptionCard>();
}
