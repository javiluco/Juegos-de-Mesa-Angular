import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './juegos/components/nav/nav';
import { Footer } from './juegos/components/footer/footer';

@Component({
  imports: [RouterOutlet, Nav, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('juegos-de-mesa-angular');
}
