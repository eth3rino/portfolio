import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, LucideArrowRight],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {}
