import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Categoria {
  categoria: string;
  descripcion: string;
  descuento: number;
  route?: string;
  img: string;
  tema?: string;
}

@Component({
  imports: [RouterLink],
  selector: 'catagolo-card',
  styleUrl: './catagolo-card.css',
  templateUrl: './catagolo-card.html',
})
export class CatagoloCard {
  categoria = input.required<Categoria>();
}
