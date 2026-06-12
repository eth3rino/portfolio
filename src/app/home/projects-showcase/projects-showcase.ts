import { AfterViewInit, Component, ElementRef, OnDestroy, signal, ViewChild, WritableSignal} from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects-showcase',
  imports: [RouterLink],
  templateUrl: './projects-showcase.html',
  styleUrl: './projects-showcase.scss',
})
export class ProjectsShowcase implements AfterViewInit, OnDestroy{

  projects: Project[] = [
    {
      index: '01',
      title: 'Fullstack Notes Platform',
      description: 'A fullstack application built with Angular, NestJS and PostgreSQL featuring JWT authentication, role-based access, category management, archiving and filtering. Built as a technical assessment — focused on clean architecture and scalable patterns.',
      type: 'Fullstack Application',
      stack: 'Angular · NestJS · PostgreSQL',
      status: 'Completed',
      tags: ['Angular', 'NestJS', 'PostgreSQL'],
      link: '/projects',
    },
    {
      index: '02',
      title: 'Declarative system configuration',
      description: 'A fully reproducible NixOS setup using flakes and home-manager. Declarative dotfiles, custom shell environment and a riced desktop — everything version controlled and reproducible from scratch.',
      type: 'System configuration',
      stack: 'NixOS · Nix Flakes · home-manager',
      status: 'Ongoing',
      tags: ['NixOS', 'Nix Flakes', 'home-manager'],
      link: '/projects',
    },
    {
      index: '03',
      title: 'Realtime System Monitor',
      description: 'A WebSocket-powered dashboard for monitoring system metrics in real time. A Rust CLI backend feeds live data to an Angular frontend via NestJS — CPU, memory, disk and network at a glance.',
      type: 'Realtime Dashboard',
      stack: 'Angular · NestJS · Rust',
      status: 'In Progress',
      tags: ['Angular', 'NestJS', 'Rust'],
      link: '/projects',
    }
  ]

  totalSlides: number = this.projects.length + 1

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