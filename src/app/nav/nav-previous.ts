import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-previous',
  imports: [RouterModule],
  templateUrl: './nav-previous.html',
  styleUrl: './nav-previous.scss',
})
export class NavPrevious {
  navOpen: boolean = false;
  
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
