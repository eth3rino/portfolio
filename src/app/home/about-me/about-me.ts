import { Component } from '@angular/core';
import { Terminal } from './terminal/terminal';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-about-me',
  imports: [Terminal, ScrollReveal],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {}
