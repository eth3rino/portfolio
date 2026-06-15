import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { LucideCopy } from '@lucide/angular';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, LucideCopy],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
