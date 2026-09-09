# Update Homepage Testimonials

## Goal
Refresh the coaching-client testimonial section on the homepage with the exact copy provided and restore the widowed-person quote.

## Current State
`src/pages/Index.tsx` currently displays two quotes in the "From coaching clients" section:
1. S.P. — about knowing she’s accomplished but not how to make it interesting on a date.
2. R.E. — about hearing Lakshmi on Pivot and being a senior leader.

The widowed-person quote (J.M.) exists in `src/pages/Coaching.tsx` but is not shown on the homepage.

## Changes

### `src/pages/Index.tsx`
Replace the `coachingQuotes` array with three testimonials:

1. **First quote (new)**
   - Quote: "Lakshmi completely changed the way I talk about myself on dates. This alone changed everything."
   - Attribution: S.P., 45 · didn’t marry so far

2. **Second quote (revised)**
   - Quote: "I heard Lakshmi on Pivot. I’d never heard someone talk about dating that way. I’d seen my peers “fall” back into dating. I didn’t want to do that. I’ve been dating an incredible woman for over a year."
   - Attribution: R.E., 59 · Divorced

3. **Third quote (restored from Coaching page)**
   - Quote: "She didn’t tell me what to do — she helped me discover how I wanted to show up. Widowed, I hadn’t dated in a very long time. I’ve now been seeing a wonderful man for five months."
   - Attribution: J.M., 47 · Widowed

## Layout Adjustment
The existing two-column grid works for two quotes but will look unbalanced with three. Update the grid so the three testimonials read cleanly:
- Option A: keep two columns, with the third quote spanning full width beneath the first two.
- Option B: switch to a single column for all three quotes.

Use the option that best preserves the editorial feel of the page.

## Verification
- Build passes.
- Homepage renders the three testimonials with correct copy and attributions.
- No changes to `src/pages/Coaching.tsx`.
