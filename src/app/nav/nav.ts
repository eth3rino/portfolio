import { AfterViewInit, Component, OnDestroy, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logo } from '../logo/logo';
import { LucideMenu } from '@lucide/angular';
import { ScrollSpy } from '../services/scroll-spy';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, Logo, LucideMenu],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

  constructor(private scrollSpy: ScrollSpy) {}
  
  isNavOpen: WritableSignal<boolean> = signal(false);
  
  toggleNav () { 
    this.isNavOpen.update((isNavOpen) => !isNavOpen) 
  }

  closeNav () {
    this.isNavOpen.update(() => false)
  }

  activeFragment() {
    return this.scrollSpy.activeFragment()
  }
}
