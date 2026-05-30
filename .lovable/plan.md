## Restore the bento hero

Rebuild `src/components/HeroBentoGrid.tsx` and put it back on the homepage. This is a reconstruction (the file was deleted), so I'll rebuild from the structure we last agreed on — then we iterate from there.

### Files

1. **Create `src/components/HeroBentoGrid.tsx`**
   - 12-column × 6-row CSS grid on desktop, single column stack on mobile.
   - Uses semantic tokens (`bg-background`, `bg-coral`, `bg-blush`, `text-foreground`) — no raw colors.
   - Tiles, in order:
     - **Headline (8 cols × 4 rows, white):** Serif H1 — *"Dating is the bridge to relationships. The bridge is broken."* with "bridge" and "broken" italicized.
     - **Brand (4 cols × 2 rows, coral):** Italic "How to Date Humans"
     - **Timing (4 cols × 2 rows, blush):** "FEB 2026 — FEB 2027" eyebrow + "A 1-year project"
     - **Question (6 cols × 2 rows, white, bordered):** "What actually *broke*?"
     - **Methods (6 cols × 2 rows, foreground/dark):** "Salons · Workshops · Field notes · Talks"
     - **CTA (12 cols × 1 row):** Two links — `See what's happening` → `/events`, `Get updates` → `#newsletter`
   - No photos, no invented field-notes. Pure typographic bento so we have a stable foundation to iterate on.

2. **`src/pages/Index.tsx`**
   - Re-add `import HeroBentoGrid from '@/components/HeroBentoGrid';`
   - Replace the current text hero `<section>` with `<HeroBentoGrid />`.
   - No other sections touched.

### After this lands
We work from the restored bento — adjusting tile copy, sizes, colors, and (later) bringing real photos back into specific tiles once you tell me which photo goes where.

### Out of scope
- No new photos, no captions, no field-notes.
- WHY section and everything below the hero stays untouched.