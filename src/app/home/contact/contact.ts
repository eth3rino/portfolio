import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { LucideCopy } from '@lucide/angular';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, LucideCopy, ScrollReveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  copyLink (link: string, e: Event): void {
    e.preventDefault()
    navigator.clipboard.writeText(link)
  }
}
