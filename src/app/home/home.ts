import { Component } from '@angular/core';
import { Mesh } from './mesh/mesh';

@Component({
  selector: 'app-home',
  imports: [Mesh],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
