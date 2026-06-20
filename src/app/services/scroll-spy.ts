import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollSpy {
  activeFragment: WritableSignal<string | null> = signal(null);
  private observer?: IntersectionObserver;

  observeSections(sectionIds: string[]) {
    this.observer?.disconnect();
    this.activeFragment.set(null);

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeFragment.set(entry.target.id)
        } else if ( this.activeFragment() ==  entry.target.id ) {
          this.activeFragment.set(null);
        }
      })
    }, {rootMargin: '-50% 0px -50% 0px', threshold: 0}
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id);

      if (el) {
        this.observer!.observe(el)
      } else {
        console.warn(`ScrollSpy: element #${id} not found`)
      }
    })
    
  }

  disconnect() {
    this.activeFragment.set(null);
    this.observer?.disconnect()
  }
}
