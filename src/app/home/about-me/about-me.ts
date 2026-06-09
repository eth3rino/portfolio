import { Component } from '@angular/core';
import { Terminal } from './terminal/terminal';

@Component({
  selector: 'app-about-me',
  imports: [Terminal],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {}
