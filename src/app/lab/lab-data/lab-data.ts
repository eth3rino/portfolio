// code: software built from scratch (apps, APIs, scripts)
// systems: OS/infra-level — kernel, drivers, services, BIOS, configuring/tuning existing systems
// electronics: physical builds from scratch — sourced/assembled into something new (hand-wiring, circuits, fabrication)
// hardware: modifying/modding something that already exists (keyboard mods, mouse mods)
export const LAB_CATEGORIES = ['design', 'code', 'hardware', 'systems', 'electronics'] as const;
export type LabCategory = typeof LAB_CATEGORIES[number];
export const LAB_STATUSES = ['completed', 'in-progress', 'ongoing'] as const;
export type LabStatus = typeof LAB_STATUSES[number];

export const CATEGORY_COLORS: Record<LabCategory, string> = {
  design: '#c4a7b7',
  code: '#7dcfff',
  hardware: '#e0af68',
  systems: '#9ece6a',
  electronics: '#f7768e'
}

export interface LabEntry {
  id: string;
  category: LabCategory;
  title: string;
  caption: string;
  status: LabStatus;
}
export interface FeaturedEntry extends SmallFeaturedEntry{
  image: {
    src: string;
    alt: string;  
  }
}
export interface SmallFeaturedEntry {
  id: string;
}
export interface FeaturedEntries {
  mainEntries: FeaturedEntry[];
  smallEntries: SmallFeaturedEntry[];
}

export type FeaturedCard = LabEntry & FeaturedEntry;


// lab-data.ts

export const LAB_ENTRIES: LabEntry[] = [
  {
    id: 'tokyo-night-portfolio-theme',
    category: 'design',
    title: 'Tokyo Night portfolio theme',
    caption: 'Building a terminal-inspired aesthetic portfolio from scratch, using Tokyo Night like color palette.',
    status: 'completed',
  },
  {
    id: 'nixos-dotfiles',
    category: 'systems',
    title: 'NixOS dotfiles',
    caption: 'Fully reproducible system config with flakes, home-manager and multiple hosts.',
    status: 'ongoing',
  },
  {
    id: 'route-transition-experiments',
    category: 'code',
    title: 'Route transition experiments',
    caption: 'Canvas and CSS-driven page transitions explored for the portfolio router animations',
    status: 'completed',
  },
  {
    id: 'custom-large-format-3d-printer',
    category: 'electronics',
    title: 'Custom large-format 3D printer',
    caption: 'Built from scratch for producing large-format signage. CoreXY motion system, custom firmware tuning.',
    status: 'in-progress',
  },
  {
    id: 'custom-mechanical-keyboard',
    category: 'electronics',
    title: 'Custom mechanical keyboard',
    caption: 'Hand-wired 65% build with custom firmware, case machined in-house, and a hand-lubed switch set.',
    status: 'in-progress',
  },
];

export const featuredEntries: FeaturedEntries = {
  mainEntries: [
    {
      id: 'custom-large-format-3d-printer',
      image: {
        src: '3d-printer-lab.jpg',
        alt: 'Custom large-format 3D printer with CoreXY motion system',
      },
    },
    {
      id: 'custom-mechanical-keyboard',
      image: {
        src: 'handwired-keyboard.jpg',
        alt: 'Hand-wired custom mechanical keyboard, 65 percent layout',
      },
    },
  ],
  smallEntries: [
    {id: 'route-transition-experiments'},
    {id: 'nixos-dotfiles'},
    {id: 'tokyo-night-portfolio-theme'}
  ],
};


