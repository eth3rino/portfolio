import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideArrowRight } from '@lucide/angular'

@Component({
  selector: 'app-hero',
  imports: [RouterLink, LucideArrowRight],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
