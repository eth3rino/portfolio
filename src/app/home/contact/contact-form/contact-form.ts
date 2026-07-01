import { Component, signal, WritableSignal } from '@angular/core';
import {form, FormField, required, email, debounce, FormRoot} from '@angular/forms/signals'
import { ScrollReveal } from '../../../directives/scroll-reveal';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  imports: [FormField, ScrollReveal, FormRoot],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  constructor(private http: HttpClient) {}

  contactModel = signal<contactData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  })
  emptyFormValues: contactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  }


  submitState: WritableSignal<'submitting' | 'successful' | 'failed' | null> = signal(null)
  

  
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
  }, {submission: {
    action: async (fieldTree) => {
      try {
        this.submitState.set('submitting')
        const submitReturn = await firstValueFrom(this.http.post('https://formspree.io/f/xlgkaqqb', fieldTree().value()))
        this.submitState.set('successful')
        this.contactForm().reset(this.emptyFormValues)
      } catch (e) {
        console.log(e)
        this.submitState.set('failed')
      } finally {
        setTimeout(() => {
          this.submitState.set(null)
        }, 2000);
      }
    }
  }
  });
  
}

interface contactData {
  name: string,
  email: string,
  subject: string,
  message: string,
  _gotcha: string,
}