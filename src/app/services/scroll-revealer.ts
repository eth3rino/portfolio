import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollRevealer {
  private observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        this.observer.unobserve(entry.target)
      }
    })
  }, {threshold: .30, rootMargin: '0px 0px -10% 0px'}
)

  observe(element: Element) {
    this.observer.observe(element)
  }
}
