# Add Small Portrait Thumbnail Next to Credibility Text

## Goal
Place a small, circular headshot of Lakshmi beside the "I've spent 15+ years..." credibility paragraph on the homepage.

## Asset
Use the cropped green-dress speaking photo saved at `src/assets/lakshmi-headshot-cropped.jpg`, which is already centered on Lakshmi's face.

## Changes

### 1. Import the cropped headshot
In `src/pages/Index.tsx`, import `lakshmiHeadshot` from `src/assets/lakshmi-headshot-cropped.jpg`.

### 2. Restructure the credibility paragraph
Wrap the credibility text and a new thumbnail image in a flex row so the image sits to the left of the paragraph on desktop and above it on mobile.

### 3. Style the thumbnail
- Use a small square/circular image (`w-16 h-16 md:w-20 md:h-20`).
- Apply `rounded-full object-cover` so it renders as a circle.
- Add `shrink-0` to prevent the image from squishing.
- Use `border border-border` for subtle definition.
- Add alt text: "Lakshmi Rengarajan".

### 4. Keep the press carousel below unchanged
The "I've been urging people to date like humans for awhile" heading and `<PressCarousel />` remain below the credibility paragraph inside the same consolidated section.

## Verification
- `bun run build` passes.
- Playwright screenshot shows a small circular portrait next to the credibility paragraph on desktop and a stacked layout on mobile.
