import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JuegoCard } from '../../components/juego-card/juego-card';

const infoJuegosEstrategia =[
  {
    "id": 1,
    "titulo":"Dominio de los Elementos",
    "descripcion": "Canaliza la magia del bosque y enfréntate a los Sabios rivales en este juego estratégico de creación de mazos de los creadores de Here to Slay y Criaturas de las Sombras. Invoca a los Guerreros elementales de las facciones del Guijarro, la Gota, la Rama y la Hoja y enzárzate en combate para demostrar tu destreza. En el curso de la batalla subirás de nivel y accederás a habilidades nuevas y extraordinarias, y también a los poderosos Campeones elementales. Cuando todo haya terminado, ¿te habrás hecho con la victoria?",
    "valor": 20000,
    "descuento": 25,
    "img": "/estrategia/dominio.png",
    "tema": "estrategia"
  },
  {
    "id": 2,
    "titulo":"Caza Bombas",
    "descripcion": "Hay una bomba llena de cables y la cuenta atrás ha empezado. ¿A quién van a llamar? A vosotros… ¡Los Caza Bombas! Sois un equipo de artificieros con los nervios de acero. Turno a turno, trataréis de descubrir qué cables tienen los demás para cortarlos de forma segura. Contáis con las mejores herramientas, que os facilitarán el trabajo, pero cada vez las misiones serán más difíciles…",
    "valor": 45000,
    "descuento": 0,
    "img": "/estrategia/caza.png",
    "tema": "estrategia"
  },
  {
    "id": 3,
    "titulo":"Criaturas De Las Sombras",
    "descripcion": "Explora un oscuro y encantado mundo y enfréntate a tus oponentes en este juego de mesa de estrategia por turnos para 2 a 4 jugadores. Durante el juego, recolectarás recursos, aprenderás nuevos hechizos, invocarás a un compañero y, si tienes suerte, evolucionarás a tu Forma Sombra. Todo en una sola misión para convertirte en el mejor Shadow Caster. ¡El último jugador en mantenerse en pie tras esta batalla supernatural gana la partida!",
    "valor": 35000,
    "descuento": 0,
    "img": "/estrategia/criaturas.png",
    "tema": "estrategia"
  },
];

@Component({
  imports: [RouterLink, JuegoCard],
  selector: 'app-estrategia',
  styleUrl: './estrategia.css',
  templateUrl: './estrategia.html',
})
export default class Estrategia {
  juesgosEstrategia = infoJuegosEstrategia;
}
