# Add Small Face Thumbnail Next to "I've spent 15+ years" Text

## Goal
Put a small round photo of Lakshmi's face beside the "I've spent 15+ years..." paragraph on the homepage, using the real green-dress photo cropped around her face. No AI-generated or AI-altered image.

## Approach
Use the untouched original photo (`src/assets/lakshmi-portrait.jpg` — the green dress speaking shot) and crop it purely with CSS framing so the real photo is preserved pixel-for-pixel. The thumbnail is a small circle showing only the face area.

Also remove the earlier AI-edited file `src/assets/lakshmi-headshot-cropped.jpg`, which is not an accurate likeness and should not be used anywhere.

## Changes in `src/pages/Index.tsx`

1. Import `lakshmiPortrait` from `@/assets/lakshmi-portrait.jpg`.
2. Turn the credibility block into a two-part row: photo on the left, paragraph on the right; stacked on small screens.
3. Render the photo as a circle roughly 64px on mobile and 80px on desktop, with the image set to fill the circle and the framing shifted upward so her face — not her dress — is what shows inside the circle.
4. Alt text: "Lakshmi Rengarajan".
5. Leave the paragraph copy, the "I've been urging people to date like humans for awhile" heading, and the press carousel exactly as they are.

## Verification
- Build passes.
- A screenshot of that section confirms the circle shows her face centered, and that the photo is the original unedited one.
