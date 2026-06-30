import { AfterViewInit, Component, computed, input, Signal, signal, WritableSignal } from '@angular/core';
import { CATEGORY_COLORS, LabCategory, LabEntry } from '../lab-data/lab-data';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-entry-grid',
  imports: [RouterLink, ScrollReveal],
  templateUrl: './entry-grid.html',
  styleUrl: './entry-grid.scss',
})
export class EntryGrid {
  entries = input.required<LabEntry[]>()

  availableCategories = computed(() =>
    [...new Set(this.entries().map(e => e.category))]
  );

  activeCategory: WritableSignal<'all' | LabCategory> = signal<'all' | LabCategory>('all')

  filteredEntries: Signal<LabEntry[]> = computed(() => {
    const active = this.activeCategory();
    if (active == 'all') return this.entries();
    return [...this.entries()].sort((a, b) => {
      const aMatch = a.category == active ? -1 : 0;
      const bMatch = b.category == active ? -1 : 0;
      return aMatch - bMatch;
    })
  })

  setCategoryFilter(category: LabCategory | 'all') {
    this.activeCategory.set(category)
  }

  entriesMatchingCategoryCount: Signal<number> = computed(() => {
    if (this.activeCategory() == 'all') return this.entries().length
    return this.entries().filter((e) => e.category == this.activeCategory()).length
  })

  getCategoryColor(cat: LabCategory) {
    return CATEGORY_COLORS[cat]
  }

  checkMatchingCategory(category: LabCategory) {
    if (this.activeCategory() == 'all' || category == this.activeCategory()) return false;
    return true
  }
}
