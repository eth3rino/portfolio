import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { CATEGORY_COLORS, FEATURED_ENTRIES, FeaturedEntries, LAB_ENTRIES, LabCategory, LabEntry } from '../../lab/lab-data/lab-data';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-lab-teaser',
  imports: [RouterLink, LucideArrowRight, ScrollReveal],
  templateUrl: './lab-teaser.html',
  styleUrl: './lab-teaser.scss',
})
export class LabTeaser {
  readonly featuredEntries: FeaturedEntries = FEATURED_ENTRIES;
  readonly allEntries: LabEntry[] = LAB_ENTRIES
  readonly selectedEntries: LabEntry[] = [...this.featuredEntries.mainEntries, ...this.featuredEntries.smallEntries]
  .slice(0, 3).map((selection): LabEntry | undefined => {
    const entry = this.allEntries.find((e) => e.id === selection.id);
    return entry ? entry : undefined
  }).filter((entry): entry is LabEntry => entry !== undefined)

  getCategoryColor(category: LabCategory) {
    return CATEGORY_COLORS[category]
  }
}
