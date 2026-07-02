import { Component } from '@angular/core';
import { ALL_WORKS, TAG_COLORS, WorkTag } from './work-data/work-data';
import { LucideArrowRight } from '@lucide/angular';
import { ScrollReveal } from '../directives/scroll-reveal';

@Component({
  selector: 'app-my-work',
  imports: [LucideArrowRight, ScrollReveal],
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
