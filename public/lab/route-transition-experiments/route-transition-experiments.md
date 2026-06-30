# Route transition experiments

A scratchpad for exploring page transition techniques in Angular — trying things out, breaking them, and figuring out what actually works before committing to an approach.

## What I explored

The goal was to find transitions that felt intentional without being distracting. Two directions emerged early:

**CSS-driven transitions** using Angular's View Transitions API integration — declarative, browser-native, and surprisingly capable. A simple crossfade requires almost no code: `withViewTransitions()` in the router config and a handful of lines in global CSS targeting `::view-transition-old(root)` and `::view-transition-new(root)`.

**Canvas-driven transitions** for the first-visit intro — a full-screen grid of cells that reveals diagonally, holds briefly, then clears. More complex to implement but worth it as a one-time first impression, gated by `sessionStorage` so it only plays on a fresh tab.

## What I landed on

The View Transitions API for regular navigation — clean, performant, and degrades gracefully in browsers that don't support it yet. The canvas grid reserved exclusively for the first visit, since running it on every navigation would wear thin fast.

Route-specific transitions are handled via `onViewTransitionCreated`, which exposes the origin and destination route snapshots — enough context to apply a different CSS class and therefore a different animation for specific navigation pairs.

## What I learned

The `@angular/animations` DSL — the older `trigger()` / `transition()` / `query()` approach — is deprecated as of Angular v19. The View Transitions API is the current idiomatic replacement, and the browser doing the heavy lifting makes for noticeably smoother results with far less code.
