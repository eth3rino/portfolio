import { AfterViewInit, Component, ElementRef, OnDestroy, signal, ViewChild, WritableSignal} from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideArrowLeft, LucideArrowRight } from '@lucide/angular';
import { ALL_WORKS, HOME_FEATURED_WORKS, HomeFeaturedWork, Work } from '../../my-work/work-data/work-data';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-work-showcase',
  imports: [RouterLink, LucideArrowRight, LucideArrowLeft, ScrollReveal],
  templateUrl: './work-showcase.html',
  styleUrl: './work-showcase.scss',
})
export class WorkShowcase implements AfterViewInit, OnDestroy{

  readonly selectedWorks: HomeFeaturedWork[] = HOME_FEATURED_WORKS;
  readonly featuredWorks: Work[] = this.selectedWorks.map((selection): Work | undefined => {
    const selectionMatch = ALL_WORKS.find((e) => e.id === selection.id)
    return selectionMatch ? selectionMatch : undefined;
  }).filter((work): work is Work => work !== undefined);


  totalSlides: number = this.featuredWorks.length + 1

  currentIndex: WritableSignal<number> = signal(0)


  scrollToSlide(index: number) {
    const container = this.slideContainer.nativeElement;

    container.scrollTo({
      left: index * container.offsetWidth,
      behavior: 'smooth'
    })
  }

  nextSlide() {
    if (this.currentIndex() < this.totalSlides - 1) {
      this.scrollToSlide(this.currentIndex() + 1);
    }
  }

  prevSlide() {
    if (this.currentIndex() > 0) {
      this.scrollToSlide(this.currentIndex() - 1);
    }
  }

  setCurrentIndexTo(n: number) {
    if (n >= this.totalSlides || n < 0) return;
    this.scrollToSlide(n);
  }


  getTagColor(tag: string): string {
    return TAG_COLORS[tag.toLowerCase()] ?? '#565f89';
  }



  @ViewChild('slideContainer') slideContainer!: ElementRef
 
  private slideObserver!: IntersectionObserver;

  ngAfterViewInit(): void {
    const container = this.slideContainer.nativeElement;
    const slides = container.querySelectorAll('.project-slide') as NodeListOf<HTMLElement>

    this.slideObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(slides).indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            this.currentIndex.set(index);
          }
        }
      })
      },
      {
        root: container,
        threshold: 0.6
    })

    slides.forEach(slide => this.slideObserver.observe(slide))

    this.scrollToSlide(0)
  }

  ngOnDestroy(): void {
    
  }
}

export const TAG_COLORS: Record<string, string> = {
  angular:    '#f92388',
  nestjs:     '#e22642',
  postgresql: '#5084ad',
  docker:     '#1d63ed',
  nixos:      '#556fa3',
  nix:        '#9ece6a',
  rust:       '#f75108',
  typescript: '#377cc7',
}

interface Project {
  index: string;
  title: string;
  description: string;
  type: string;
  stack: string;
  status: string;
  tags: string[];
  link: string;
}