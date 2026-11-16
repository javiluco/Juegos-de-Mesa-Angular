import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatagoloCard } from '../../components/catagolo-card/catagolo-card';

const infoCategorias =[
  {
    "categoria":"Estrategia",
    "descripcion": "Planifica, negocia y conquista. Ponte a prueba con estos juegos.",
    "descuento": 25,
    "route": "/estrategia",
    "img": "/estrategia.jpeg",
    "tema": "estrategia"
  },
  {
    "categoria":"Familiares",
    "descripcion": "Para jugar con toda la Familia. Apta para todas las edades.",
    "descuento": 0,
    "route": "/familiares",
    "img": "/familiares2.png",
    "tema": "familiares"
  },
  {
    "categoria":"Cartas",
    "descripcion": "Partidas rápidas en cualquier mesa. Gran variedad de juegos.",
    "descuento": 0,
    "route": "/cartas",
    "img": "/cartas2.png",
    "tema": "cartas"
  },
  {
    "categoria":"Juegos Party",
    "descripcion": "Risas y entretencion para grupos grandes.",
    "descuento": 0,
    "route": "/juegos-party",
    "img": "/party2.png",
    "tema": "party"
  },
]

@Component({
  imports: [ CatagoloCard],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  categorias = infoCategorias;

}
