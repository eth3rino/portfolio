import { Component, signal } from '@angular/core';
import {form, FormField, required, email, debounce} from '@angular/forms/signals'
import { ScrollReveal } from '../../../directives/scroll-reveal';

@Component({
  selector: 'app-contact-form',
  imports: [FormField, ScrollReveal],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {

  contactModel = signal<contactData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  constructor() {}

  contactForm = form(this.contactModel, (schemaPath) => {
    debounce(schemaPath.name, 500);
    required(schemaPath.name, {message: 'Name is required'});

    debounce(schemaPath.email, 500);
    required(schemaPath.email, {message: 'Email is required'});
    email(schemaPath.email, {message: 'Enter a valid email address'});

    debounce(schemaPath.subject, 500);
    required(schemaPath.subject, {message: 'Subject is required'});

    debounce(schemaPath.message, 500);
    required(schemaPath.message, {message: 'Message is required'});
  });

  contactFormSubmit(e: Event) {
    e.preventDefault();
    // Now send form to FormSpree.
    
  }
  
}

interface contactData {
  name: string,
  email: string,
  subject: string,
  message: string
}