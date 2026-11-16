import { Component, computed, signal } from '@angular/core';
import { InventarioTable } from '../../components/inventario-table/inventario-table';
import { CurrencyPipe } from '@angular/common';

export interface JuegosInicialesInterface {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  imagen: string;
}

@Component({
  imports: [InventarioTable, CurrencyPipe],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export default class Inventario {

  juegosIniciales = signal<JuegosInicialesInterface[]>([
    { id: 1, nombre: 'Dominio de los Elementos', categoria: 'estrategia', precio: 20000, stock: 8, imagen: '/estrategia/dominio.png' },
    { id: 2, nombre: 'Caza Bombas', categoria: 'estrategia', precio: 45000, stock: 3, imagen: '/estrategia/caza.png' },
    { id: 3, nombre: 'Criaturas De Las Sombras', categoria: 'estrategia', precio: 35000, stock: 0, imagen: '/estrategia/criaturas.png' },
    { id: 4, nombre: 'Smart 10 - Familiar', categoria: 'familiares', precio: 20000, stock: 12, imagen: '/familiar/smart.png' },
    { id: 5, nombre: 'Got Five', categoria: 'familiares', precio: 30000, stock: 6, imagen: '/familiar/Got Five.png' },
    { id: 6, nombre: 'What Do You Meme? Edición Familiar', categoria: 'familiares', precio: 10000, stock: 15, imagen: '/familiar/meme.png' },
    { id: 7, nombre: 'UNO Clásico', categoria: 'cartas', precio: 6000, stock: 30, imagen: '/cartas2.png' },
    { id: 8, nombre: 'Flip 7', categoria: 'cartas', precio: 17000, stock: 4, imagen: '/cartas/flip7.png' },
    { id: 9, nombre: 'Pokemon TCG - Enhanced 2-Pack Blister Q4 2026', categoria: 'cartas', precio: 15000, stock: 20, imagen: '/cartas/pokemon.png' },
    { id: 10, nombre: 'La Feria De Las Pulgas De Titirilquen', categoria: 'party', precio: 20000, stock: 7, imagen: '/party/feria.png' },
    { id: 11, nombre: 'Telestrations', categoria: 'party', precio: 30000, stock: 2, imagen: '/party2.png' },
    { id: 12, nombre: 'Mal Trago', categoria: 'party', precio: 12000, stock: 10, imagen: '/party/mal-trago.png' }
  ]);

  totalJuegos = computed(() => this.juegosIniciales().length);
  totalUnidades = computed(() => this.juegosIniciales().reduce((t, j) => t + j.stock, 0));
  valorInventario = computed(() => this.juegosIniciales().reduce((t, j) => t + j.precio * j.stock, 0));
  sinStock = computed(() => this.juegosIniciales().filter(j => j.stock === 0).length);
}
