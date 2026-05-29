import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  navOpen: boolean = true;
  
  constructor(private el: ElementRef) {}

  toggleNav() {
    this.navOpen = !this.navOpen
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.navOpen = false
    }
  }
}
