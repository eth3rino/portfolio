import { Component, input } from '@angular/core';
import { CATEGORY_COLORS, FeaturedCard, LabCategory, LabEntry } from '../lab-data/lab-data';

@Component({
  selector: 'app-featured',
  imports: [],
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
