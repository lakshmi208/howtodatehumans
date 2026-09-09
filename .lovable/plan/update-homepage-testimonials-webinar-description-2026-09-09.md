# Update Homepage Testimonials + Webinar Description

## Goal
Refresh the coaching-client testimonial section on the homepage with the exact copy provided, add the new E.K. quote, and present all four testimonials in a compact carousel. Also update the "Dating Essentials for Gen X" webinar description on the homepage.

## Current State
`src/pages/Index.tsx` currently displays two quotes in the "From coaching clients" section:
1. S.P. — about knowing she's accomplished but not how to make it interesting on a date.
2. R.E. — about hearing Lakshmi on Pivot and being a senior leader.

The widowed-person quote (J.M.) exists in `src/pages/Coaching.tsx` but is not shown on the homepage. The project already has a working `Carousel` component family (`src/components/ui/carousel`).

## Changes

### `src/pages/Index.tsx`

#### 1. Webinar description update
Replace the existing "Dating Essentials for Gen X" description with:

> The foundational insights about connection and dating today that many skip.

#### 2. Testimonials section refresh
Replace the static two-column "From coaching clients" section with a carousel section.

**New header:**

> Client Testimonials:
>
> From coast to coast, Midwest and South... many relationship and professional paths... all with a desire to make the most of this (still) youthful window of dating...

**Carousel quotes:**

1. **S.P.**
   - Quote: "Lakshmi completely changed the way I talk about myself on dates. This alone changed everything."
   - Attribution: S.P., 45 - didn't marry so far

2. **R.E.**
   - Quote: "I heard Lakshmi on Pivot. I'd never heard someone talk about dating that way. I'd seen my peers "fall" back into dating. I didn't want to do that. I've been dating an incredible woman for over a year."
   - Attribution: R.E., 59 - Divorced

3. **J.M. (restored from Coaching page)**
   - Quote: "She didn't tell me what to do - she helped me discover how I wanted to show up. Widowed, I hadn't dated in a very long time. I've now been seeing a wonderful man for five months."
   - Attribution: J.M., 47 - Widowed

4. **E.K. (new)**
   - Quote: "I'm good at sales. Turns out that was actually hurting me in my dating life. Lakshmi helped me step out of sales and into connection mode when it mattered most."
   - Attribution: E.K., 46

**Implementation notes:**
- Use the existing `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` components.
- Each slide shows one quote and attribution.
- Keep the editorial feel: large italic display type for the quote, small uppercase attribution.
- Enable looping so visitors can cycle through.
- Ensure the section does not dominate the page vertically.

## Verification
- Build passes.
- Homepage renders the updated webinar description.
- Homepage renders the carousel with all four testimonials and the new header.
- Carousel navigation works (previous/next) and loops.
- No changes to `src/pages/Coaching.tsx`.
