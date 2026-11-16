import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JuegoCard, JuegoDescriptionCard } from '../../components/juego-card/juego-card';

const infoJuegosFamiliares:JuegoDescriptionCard[] =[
  {
    "id": 4,
    "titulo":"Smart 10 - Familiar",
    "descripcion": "La agilidad de Smart 10 ahora también adaptada a los miembros más jóvenes para que las partidas sean para toda la familia. Smart10 es un juego de preguntas donde los jugadores no deberán esperar demasiado su turno. Las preguntas ofrecen 10 posibles respuestas y todos los jugadores tendrán la oportunidad de contestar en cada una de las preguntas.",
    "valor": 20000,
    "descuento": 5,
    "img": "/familiar/smart.png",
    "tema": "familiares theme-primary"
  },
  {
    "id": 5,
    "titulo":"Got Five",
    "descripcion": "¡Descifra los números ocultos antes que los demás! En Got Five!, cada jugador deberá resolver un rompecabezas lógico utilizando deducción, observación y pistas compartidas para descubrir los cinco números secretos escondidos en su soporte. El desafío está en que puedes ver las fichas de todos los demás… excepto las tuyas.",
    "valor": 30000,
    "descuento": 0,
    "img": "/familiar/Got Five.png",
    "tema": "familiares theme-primary"
  },
  {
    "id": 6,
    "titulo":"What Do You Meme? Edición Familiar",
    "descripcion": "¡Tu juego de memes favorito ahora para toda la familia! Compite por crear el meme más divertido combinando cartas de Oración con la carta de Foto que esté en juego. Contenido: 300 cartas de Oración 65 cartas de Foto 1 Caballete",
    "valor": 10000,
    "descuento": 0,
    "img": "/familiar/meme.png",
    "tema": "familiares theme-primary"
  },
];

@Component({
  imports: [RouterLink, JuegoCard],
  selector: 'app-familiares',
  styleUrl: './familiares.css',
  templateUrl: './familiares.html',
})
export default class Familiares {

  juesgosFamiliares = infoJuegosFamiliares;
}
