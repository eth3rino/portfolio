
const WORK_TAGS = ['angular', 'nestjs', 'rust', 'postgresql', 'nix', 'typescript'] as const;
export type WorkTag = typeof WORK_TAGS[number];
const WORK_STATUSES = ['completed', 'in-progress', 'ongoing'] as const;
export type WorkStatus = typeof WORK_STATUSES[number];
const WORK_SCOPES = ['fullstack', 'frontend', 'backend'] as const;
export type WorkScope = typeof WORK_SCOPES[number];

export const TAG_COLORS: Record<WorkTag, string> = {
  angular:    '#f92388',
  nestjs:     '#e22642',
  postgresql: '#5084ad',
  nix:        '#9ece6a',
  rust:       '#f75108',
  typescript: '#377cc7',
};

export interface Work {
    id: number;
    index: string;
    title: string;
    description: string;
    scope: WorkScope;
    type: string;
    status: WorkStatus;
    tags: WorkTag[];
    linkToSource: string;
    isWebsite: boolean;
    linkToLiveWebsite?: string;
    image?: {
        src: string,
        alt: string
    }
    imageMobile?: {
        src: string,
        alt: string
    }
}

export interface HomeFeaturedWork {
    id: number;
}

export const ALL_WORKS: Work[] = [
    {
        id: 0,
        index: '01',
        title: 'Fullstack Notes Platform',
        description: 'A fullstack application built with Angular, NestJS and PostgreSQL featuring JWT authentication, role-based access, category management, archiving and filtering. Built as a technical assessment — focused on clean architecture and scalable patterns.',
        scope: 'fullstack',
        type: 'Fullstack Application',
        status: 'completed',
        tags: ['angular', 'nestjs', 'postgresql'],
        linkToSource: 'https://github.com/eth3rino/notes-platform',
        isWebsite: false,
        image: {
            src: 'work/notes-platform/image.png',
            alt: 'api-information'
        }
    },
    {
        id: 1,
        index: '02',
        title: 'Personal Portfolio Website',
        description: 'The site you\'re looking at. Built with Angular — terminal-inspired design system, smooth scroll interactions, and a layout that scales from mobile to desktop without compromise.',
        scope: 'frontend',
        type: 'Personal Portfolio',
        status: 'completed',
        tags: ['angular'],
        linkToSource: 'https://github.com/eth3rino/portfolio',
        isWebsite: true,
        linkToLiveWebsite: 'https://elianmeaca.vercel.app',
        image: {
            src: 'work/portfolio-website/web-desktop-layout.png',
            alt: 'desktop-layout'
        },
        imageMobile: {
            src: 'work/portfolio-website/web-mobile-layout.png',
            alt: 'mobile-layout'
        }
    },
    {
        id: 2,
        index: '03',
        title: 'Signsmith Signage Solutions',
        description: 'A landing page for Signsmith Signage Solutions, a Buenos Aires signage company specialising in storefronts, vinyls, and large-format work. Built with Angular — clean, fast, and easy to hand off.',
        scope: 'frontend',
        type: 'Landing Page',
        status: 'completed',
        tags: ['angular'],
        linkToSource: 'https://github.com/eth3rino/signsmith',
        isWebsite: true,
        linkToLiveWebsite: 'https://signsmith.vercel.app',
        image: {
            src: 'work/signsmith/website-desktop-layout.png',
            alt: 'desktop-layout'
        },
        imageMobile: {
            src: 'work/signsmith/website-mobile-layout.png',
            alt: 'mobile-layout'
        }
    }
]

export const HOME_FEATURED_WORKS: HomeFeaturedWork[] = [
    {id: 0},
    {id: 1},
    {id: 2}
]

