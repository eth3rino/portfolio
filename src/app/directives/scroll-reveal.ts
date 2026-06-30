import { Directive, ElementRef, input, OnInit } from '@angular/core';
import { ScrollRevealer } from '../services/scroll-revealer';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollReveal implements OnInit{
  constructor(private element: ElementRef, private scrollRevealer: ScrollRevealer) {}

  animationType = input<'fade-up' | 'fade-left' | 'scale-in'>('fade-up');
  animationDelay = input<number>(0);

  ngOnInit() {
    const el = this.element.nativeElement
    el.classList.add(`reveal-${this.animationType()}`);

    const delay = this.animationDelay();
    if (delay) {
      const existingTransition = getComputedStyle(el).transition;
      const revealTransition = `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`;

      el.style.transition = existingTransition && revealTransition !== 'all 0s ease 0s' ? `${existingTransition}, ${revealTransition}` : revealTransition;
    }
    
    this.scrollRevealer.observe(el);
  }
}
