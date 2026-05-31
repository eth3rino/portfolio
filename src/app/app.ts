import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { NavPrevious } from './nav/nav-previous';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, NavPrevious],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
