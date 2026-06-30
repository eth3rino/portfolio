# Tokyo Night portfolio theme

A terminal-inspired design system built from scratch for my personal portfolio. The goal was a cohesive aesthetic that felt like a developer's natural habitat — dark, precise, and intentional — without tipping into literal terminal simulation.

## Palette

The colour palette is derived from the Tokyo Night theme, a popular dark theme for code editors. Every colour has a role:

- `#0d0f17` — page background
- `#1a1d2e` — surface (cards, panels)
- `#2a2d3e` — borders
- `#3b3d5c` — separators and muted text
- `#565f89` — secondary text
- `#c0caf5` — primary text
- `#c4a7b7` — rose accent (primary brand colour)
- `#f7768e` — pink (tags, highlights)
- `#e0af68` — gold (warnings, hardware category)
- `#9ece6a` — green (success states, HTTP 200)
- `#7dcfff` — foam (code category, links)

## Typography

JetBrains Mono throughout — headings, body, labels, inputs. No secondary typeface. The monospace constraint reinforces the terminal aesthetic and keeps the type system simple.

## Design language

The terminal motif is applied as flavour, not function. Navigation links read as `cd ./about-me`, section labels as `~/projects`, copy buttons invoke `lucideCopy` — but none of it requires the user to think in terminal terms. It's decoration that communicates craft.

## Implementation

Built as an Angular standalone component application. Design tokens are CSS custom properties on `:root`, consumed everywhere via `var(--rose)`, `var(--border)`, etc. All icons are Lucide via `@lucide/angular`, with brand icons (GitHub, LinkedIn) as hand-pasted inline SVGs since Lucide carries no brand marks.

The brand mark is a geometric monogram readable as E, EM, X, and a fish simultaneously — derived from the Aquarius constellation rotated sideways, implemented as an Angular SVG component with `fill="currentColor"`.
