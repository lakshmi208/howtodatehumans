# Differentiate Testimonials Header from Quotes

## Goal
Make the "From coast to coast..." introductory text visually distinct from the testimonial quotes so it reads as a header, not another testimonial.

## Current State
`src/pages/Index.tsx` renders the testimonials section like this:

- Eyebrow: "Client Testimonials:"
- Header: `h2.font-display.text-2xl.md:text-4xl` containing "From coast to coast, Midwest and South…"
- Carousel quotes: `blockquote.font-display.italic.text-2xl.md:text-4xl`

The header and the quotes share the same display font and nearly the same size/weight, so they look like peers.

## Changes

### `src/pages/Index.tsx`

Update the testimonials header so it sits clearly above the quotes:

- Keep the eyebrow line: `Client Testimonials:`
- Change the "From coast to coast..." text from a large display `h2` to a smaller, lighter subhead.
- Suggested styling: `text-base md:text-lg font-normal text-foreground/80 leading-relaxed max-w-3xl` (body font, regular weight, muted color).
- Keep the spacing below it (`mb-10` or similar) so it still groups with the carousel.
- Leave the carousel quotes untouched: large italic `font-display` remains the focal point.

## Verification
- Build passes.
- Preview shows "Client Testimonials:" eyebrow, then the "From coast to coast..." line in a lighter, smaller style, followed by the prominent italic quotes.
- Header no longer looks like a testimonial itself.
