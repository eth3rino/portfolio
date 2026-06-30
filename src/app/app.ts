import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { Logo } from './logo/logo';
import { CurrentTransitionSpy } from './services/current-transition-spy';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, Logo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  constructor(private currentTransitionSpy: CurrentTransitionSpy, private router: Router) {}


  protected readonly title = signal('Elian Meaca');

  ngOnInit(): void {
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    ).subscribe(() => {
      const mainHeading = document.querySelector('h1');
      mainHeading?.setAttribute('tabindex', '-1');
      mainHeading?.focus()
    })
  }

}
