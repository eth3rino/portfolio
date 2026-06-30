import { Component, input } from '@angular/core';
import { CATEGORY_COLORS, FeaturedCard, LabCategory, LabEntry } from '../lab-data/lab-data';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-featured',
  imports: [RouterLink, ScrollReveal],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
})
export class Featured {
  mainCards = input.required<FeaturedCard[]>()
  smallCards = input.required<LabEntry[]>()

  getCategoryColor(cat: LabCategory) {
    return CATEGORY_COLORS[cat]
  }
}
