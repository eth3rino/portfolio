import { Injectable, signal, WritableSignal } from '@angular/core';
import { ViewTransitionInfo } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CurrentTransitionSpy {
  transition: WritableSignal<ViewTransitionInfo | null> = signal(null);
}
