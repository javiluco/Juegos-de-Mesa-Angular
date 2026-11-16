import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JuegoCard, JuegoDescriptionCard } from '../../components/juego-card/juego-card';

const infoJuegosCartas:JuegoDescriptionCard[] =[
  {
    "id": 7,
    "titulo":"UNO Clásico",
    "descripcion": "UNO es el juego clásico de mesa en donde los jugadores toman turnos para hacer pares con la carta que se muestra en la parte superior de la baraja siendo estas del mismo color o número. En este juego también encontrarás cartas como saltar, reversa, toma 2, comodín, y toma 4. Pero debes estar muy atento porque cuando te vaya quedando una sola carta debes gritar ¡UNO!. Con UNO pasarás interminables horas de diversión y entretención junto a tus amigos y familiares.",
    "valor": 6000,
    "descuento": 0,
    "img": "/cartas2.png",
    "tema": "cartas theme-danger"
  },
  {
    "id": 8,
    "titulo":"Flip 7",
    "descripcion": "Da vuelta cartas una por una, sin repetir el mismo número dos veces. ¿Suena fácil? ¡Piénsalo de nuevo! No es una baraja cualquiera… En Flip 7 solo hay una carta de 1, dos cartas de 2, tres cartas de 3, etc., además de un montón de cartas especiales que pueden darte puntos extra, darte una segunda oportunidad o congelarte a ti o a tus oponentes en seco. ¿Eres del tipo de jugador que prefiere jugar seguro y asegurar puntos antes de arriesgarse a perderlo todo, o te atreves a jugártela para conseguir los puntos de bonificación volteando siete seguidas?",
    "valor": 17000,
    "descuento": 0,
    "img": "/cartas/flip7.png",
    "tema": "cartas theme-danger"
  },
  {
    "id": 9,
    "titulo":"Pokemon TCG - Enhanced 2-Pack Blister Q4 2026",
    "descripcion": "En una partida de Pokémon Trading Card Game, los jugadores asumen el papel de un entrenador Pokémon durante un combate de forma análoga a los videojuegos. Para poder jugar, cada jugador debe tener una baraja de 60 cartas que habrá preparado previamente. La composición de las barajas es libre. Los jugadores se colocarán uno frente a otro, distribuyendo el espacio de juego de manera que cada jugador posea la mitad del tablero, Cada jugador tendrá frente a él cinco espacios diferenciados",
    "valor": 15000,
    "descuento": 0,
    "img": "/cartas/pokemon.png",
    "tema": "cartas theme-danger"
  }
];

@Component({
  imports: [RouterLink, JuegoCard],
  selector: 'app-cartas',
  styleUrl: './cartas.css',
  templateUrl: './cartas.html',
})
export default class Cartas {

  juegosCartas = infoJuegosCartas;
}
