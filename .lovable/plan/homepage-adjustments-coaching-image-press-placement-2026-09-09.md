# Homepage Adjustments: Coaching Image + Press Placement

## 1. Remove the coaching square image, keep the copy
**File:** `src/pages/Index.tsx`
- In the 1:1 Coaching tile, remove the `aspect-[4/3] ...` image wrapper and the `lakshmiPortrait` image entirely.
- Keep the card link, eyebrow, headline, body copy starting with “Get back out there,” and the “See if this fits →” CTA.
- Adjust padding/spacing if needed so the text-only card still feels balanced.

## 2. Move the press carousel below the credibility section
**File:** `src/pages/Index.tsx`
- Import `PressCarousel` from `@/components/PressCarousel`.
- Insert `<PressCarousel />` immediately after the “I’ve spent 15+ years...” credibility section and before the 1:1 Coaching tile.
- Keep the existing `PressCarousel` heading: “I’ve been urging people to date like humans for awhile.”
- Remove any duplicate press carousel placement if it already appears elsewhere on the homepage.

## 3. Verify
- Run a build check to confirm no import or rendering errors.
- Confirm the coaching tile reads well without the image and the press section flows after the credibility copy.
