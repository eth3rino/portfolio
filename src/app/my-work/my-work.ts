import { Component } from '@angular/core';
import { ALL_WORKS, TAG_COLORS, WorkTag } from './work-data/work-data';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  selector: 'app-my-work',
  imports: [LucideArrowRight],
  templateUrl: './my-work.html',
  styleUrl: './my-work.scss',
})
export class MyWork {
  tagColors = TAG_COLORS;
  allWorks = ALL_WORKS;


  getTagColor(tag: WorkTag) {
    return this.tagColors[tag]
  }
}
