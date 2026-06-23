import { Component, signal } from '@angular/core';
import { CATEGORY_COLORS, FeaturedCard, FeaturedEntries, featuredEntries, FeaturedEntry, LAB_CATEGORIES, LAB_ENTRIES, LabCategory, LabEntry } from './lab-data/lab-data';
import { EntryGrid } from './entry-grid/entry-grid';
import { Featured } from './featured/featured';


@Component({
  selector: 'app-lab',
  imports: [EntryGrid, Featured],
  templateUrl: './lab.html',
  styleUrl: './lab.scss',
})
export class Lab {
  featuredEntries: FeaturedEntries = featuredEntries;
  readonly allEntries: LabEntry[] = LAB_ENTRIES;

  readonly mainCards: FeaturedCard[] = featuredEntries.mainEntries
    .map((selection): FeaturedCard | undefined => {
      const entry = this.allEntries.find((e) => e.id === selection.id);
      return entry ? { ...entry, image: selection.image } : undefined;
    })
    .filter((card): card is FeaturedCard => card !== undefined);

  readonly smallCards: LabEntry[] = featuredEntries.smallEntries
    .map((selection): LabEntry | undefined => {
      const entry = this.allEntries.find((e) => e.id === selection.id);
      return entry ? entry : undefined;
    })
    .filter((card): card is LabEntry => card !== undefined);


  readonly entryCount = LAB_ENTRIES.length;
  readonly categoryCount = LAB_CATEGORIES.length;
  readonly inProgressCount = LAB_ENTRIES.filter((e) => e.status === "in-progress").length;
}



