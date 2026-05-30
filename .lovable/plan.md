## Editorial bento — now with real artifacts

The uploaded images do the heavy lifting for "this is a living project": real event posters, a candid talk photo, the "Very cool event in progress" sign, the relationships-used-to-form slide. They go *into* the grid as tiles, not into a separate gallery section.

### Assets to add to `src/assets/`
Copy from uploads:
- `dating-detox-poster.png` (poster 1)
- `dating-in-collapse-poster.png` (Up Next poster)
- `lakshmi-talk.jpg` (Lakshmi presenting)
- `event-in-progress-sign.png` (window sign)
- `relationships-slide.jpg` (used-to-form slide)
- `audience-room.jpg` (IMG_5043 — dim audience shot)

### Grid composition (desktop, 12 cols)

```text
Row 1  ┌──────────────────────────┬───────────────┐
       │ HEADLINE (8x2)           │ UP NEXT (4x2) │
       │ "Dating is the bridge…   │ Dating in     │
       │  The bridge is broken."  │ Collapse      │
       │ — cream, serif, italics  │ — real poster │
Row 2  │                          │ Apr 2026 +    │
       │                          │ ticket CTA    │
       ├────────┬─────────────────┼───────────────┤
Row 3  │ TALK   │ FIELD NOTE      │ METHODS (4x2) │
       │ PHOTO  │ "Very cool      │ Salons.       │
       │ (4x2)  │  event in       │ Workshops.    │
       │ Lakshmi│  progress" sign │ Talks.        │
Row 4  │ on     │ + caption:      │ Research.     │
       │ stage  │ "from the door, │ Listening.    │
       │        │  Apr 2026"      │ — deep brown  │
       ├────────┴──────┬──────────┴───────────────┤
Row 5  │ TIMING (4x1)  │ FROM THE DECK (8x1)      │
       │ FEB '26 →     │ relationships-slide.jpg  │
       │ FEB '27       │ + caption "From a recent │
       │ Chicago       │  talk — how it used to   │
       │ — blush       │  work"                   │
       ├───────────────┴──────────────────────────┤
Row 6  │ CTA strip (12x1) — "About the project →" + "See the timeline →"
```

Mobile collapses to single column in this reading order: headline → Up Next poster → talk photo → field-note sign → methods → timing → slide → CTA.

### Why this reads as "living"
- Two **real posters** (Dating Detox + Dating in Collapse) anchor the right column — the grid feels like a wall of dispatches, not a brochure.
- A **field-note tile** (the "Very cool event in progress" sign) is captioned like a Polaroid — small, dated, specific.
- A **slide from a recent talk** sits inside the grid as evidence the work is happening now.
- Captions on photo tiles use date + location ("Apr 2026 · River North") so the page reads as continuously updated.

### Tile behaviors
- Photo tiles: subtle scale-up on hover, small caption appears at bottom in cream-on-brown gradient.
- Poster tile (Up Next) is clickable → links to the Dating in Collapse event detail page; small "Get tickets" affordance bottom-right.
- Headline tile: hairline border shifts to coral on hover.
- Staggered fade-in on mount (Framer Motion), 60ms apart, top-left to bottom-right.

### Implementation
- Rewrite `src/pages/Index.tsx` hero section only — Why/How/Who sections below stay untouched.
- Copy 6 uploads into `src/assets/` and import as ES6 modules.
- One new component: `src/components/HeroBentoGrid.tsx` to keep `Index.tsx` readable.
- Use semantic tokens already in `index.css` (cream bg, deep brown, coral, blush). No new tokens needed.
- Existing `PhotoGallery.tsx` stays where it is — the bento hero doesn't replace it, but we may want to revisit later since there's now overlap. Out of scope for this pass.

### Out of scope
- No new events data, no edits to event detail pages, no nav changes.
- No new AI-generated imagery — every visual in the grid is a real artifact you uploaded.
- No copy changes to the Why/How/Who sections.
