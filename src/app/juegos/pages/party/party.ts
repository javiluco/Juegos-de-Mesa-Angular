import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JuegoCard, JuegoDescriptionCard } from '../../components/juego-card/juego-card';

const infoJuegosParty:JuegoDescriptionCard[] =[
  {
    "id": 10,
    "titulo":"La Feria De Las Pulgas De Titirilquen",
    "descripcion": "El pueblo de Titirilquén está emocionado: ha comenzado la feria de las pulgas de la ciudad. En distintos puestos se ofrecen las chucherías más llamativas. Para ganar deberás ser lo muy velóz. Debes juntar todas las chucherías de un tipo antes que el resto. ¡Descubre esta frenética reimplementación del clásico Pit, un juego sin turnos y con muchos gritos!",
    "valor": 20000,
    "descuento": 25,
    "img": "/party/feria.png",
    "tema": "party theme-warning"
  },
  {
    "id": 11,
    "titulo":"Telestrations",
    "descripcion": "¡El juego para fiestas de dibujar, pasar y adivinar donde reirás a carcajadas! Dibuja lo que ves y luego adivina lo que viste. Todos los jugadores simultáneamente dibujan, pasan, adivinan y ríen para revelar resultados hilarantes e impredecibles. Contenido: - Más de 1700 palabras - 8 rotuladores - 8 borradores - 8 cuadernos de dibujo reutilizables - Reloj de arena de 60 segundos - Reglamento - 1 dado",
    "valor": 30000,
    "descuento": 0,
    "img": "/party2.png",
    "tema": "party theme-warning"
  },
  {
    "id": 12,
    "titulo":"Mal Trago",
    "descripcion": "Mal Trago es un party-goblin para grupos de 4 a 10 goblins, recomendado para goblins a partir de 8 años y con una duración aproximada de 15-20 minutos. En Mal Trago encontraremos pociones, conjuros, antídotos, goblins y sobretodo ¡¡MUCHAS RISAS!! ¿He dicho ya que hay goblins?",
    "valor": 12000,
    "descuento": 0,
    "img": "/party/mal-trago.png",
    "tema": "party theme-warning"
  }
];

@Component({
  imports: [RouterLink, JuegoCard],
  selector: 'app-party',
  styleUrl: './party.css',
  templateUrl: './party.html',
})
export default class Party {
  juegosParty = infoJuegosParty;
}
