# Tighten Homepage Rhythm + Move Newsletter to Bottom

## Goal
Make the homepage feel shorter, more cohesive, and less vertically stretched. Move the "We're All Dating All The Time" newsletter block to the bottom as the final call to action.

## Changes

### 1. Re-order sections
In `src/pages/Index.tsx`, move the `<NewsletterSignup ... title="We're All Dating All The Time" />` block from its current position (after the cinematic pull-quote) to the very bottom of the page, just before the project footnote.

### 2. Tighten vertical spacing globally
Reduce the generous `py-16 md:py-24`, `py-20 md:py-28`, and `py-12 md:py-16` values across the homepage sections to a tighter, consistent scale:
- Hero: keep `pt-20 md:pt-28` but reduce bottom padding to `pb-10 md:pb-14`
- Webinar signup: `py-12 md:py-16`
- Cinematic pull-quote: `py-14 md:py-20`
- Credibility + press carousel: `py-10 md:py-14`
- Coaching tile: `py-12 md:py-16`
- Testimonials: `py-12 md:py-16`
- Second webinar signup: `py-10 md:py-14`
- Newsletter (now bottom): `py-12 md:py-16`
- Project footnote: `py-8 md:py-10`

### 3. Consolidate credibility and press
Wrap the credibility paragraph and `<PressCarousel />` in a single bordered section so they read as one unit instead of two separate blocks. Keep the heading "I've been urging people to date like humans for awhile." inside that wrapper.

### 4. Reduce internal whitespace inside components
- `NewsletterSignup.tsx`: reduce wrapper padding from `py-16` to `py-12 md:py-16` and inner card padding from `p-8 md:p-12` to `p-6 md:p-10`.
- `WebinarSignup.tsx`: reduce `space-y-3` to `space-y-2` and button/input height from `h-12` to `h-11` to match the denser page rhythm.

### 5. Remove duplicate visual separators
Where consecutive sections now sit inside the same wrapper, drop redundant `border-t` dividers so the page flows as one continuous surface rather than a stack of boxes.

### 6. Keep all copy and functionality intact
No changes to headlines, testimonials, form fields, buttons, or routing. Only spacing, order, and grouping change.

## Verification
- `bun run build` passes.
- Playwright screenshot of the full homepage shows the newsletter at the bottom and a visibly shorter, denser page.
