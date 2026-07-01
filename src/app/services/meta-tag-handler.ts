import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetaTagHandler {
  constructor(
    private meta: Meta,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  init(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while(route.firstChild) route = route.firstChild;
        return route
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data['description']) {
        this.meta.updateTag({property: 'description', content: data['description']})
      }
      this.meta.updateTag({property: 'canonical-helper'});
      this.updateCanonical(`https://elianmeaca.vercel.app${this.router.url}`)
    })
  }

  updateCanonical(url: string): void {
    let link: HTMLLinkElement | null = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.append(link);
    }
    link.setAttribute('href', url.split('#')[0])
  }
}
