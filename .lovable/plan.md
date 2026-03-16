
Goal: pivot away from the failed “full timeline” social graphic and create a stronger square 1:1 event promo asset that still feels native to the current site.

What I found
- The clearest promotional focal point is the Dating Detox event:
  - It is expanded by default in the timeline.
  - It already has a direct ticket CTA to Eventbrite.
  - It is the most “launchable” single event in the codebase.
- The site visual system is already well defined:
  - Warm cream background, orange primary, muted borders.
  - Horizontal logo in nav, oversized logo treatment in hero.
  - Editorial typography with serif headlines and italic emphasis.
- Existing event cards already provide the right content structure:
  - event type
  - title
  - tagline
  - date/timeframe
  - problem/approach/description
  - CTA

Recommended direction
- Build a square event promo graphic for “Dating Detox” instead of another all-project summary.
- Keep it page-derived, but not as a literal screenshot.
- Make it feel like a polished export of the existing event card + hero branding.

Proposed composition
```text
[ top ]
small horizontal logo

TALK badge
Dating Detox:
A Brief History of Modern Dating
& What Happened to Us

italic tagline
Understanding how we got here

date / recurring info

short 2–3 line supporting copy
pulled from existing event content

primary CTA block
Get Your Ticket

[ bottom ]
small “How to Date Humans”
or “Chicago” / project identifier
```

Visual approach
- Use the current brand palette from `src/index.css`.
- Use the horizontal logo from `src/assets/logo-horizontal.png`.
- Use the Dating Detox content from `src/data/events.ts`.
- Match the site’s editorial tone:
  - serif headline
  - italic accent line
  - soft card/border treatment
  - no decorative skyline/illustration
- Optional: include one subtle geometric accent shape only if it supports hierarchy.

Implementation plan
1. Create a dedicated social asset concept around the Dating Detox event.
2. Use only existing brand elements and copy already present in the codebase.
3. Design the square with stronger hierarchy than the previous timeline attempts:
   - big event title
   - clear date/context
   - obvious CTA
4. Export one clean 1:1 version first.
5. If that lands, derive follow-ups from the same system:
   - alternate event promo
   - 4:5 version
   - reusable “social card” template in the codebase if needed later

Why this should work better
- It gives the graphic a single job: announce one compelling thing.
- It avoids trying to compress the full timeline into a square.
- It aligns with how the site already treats Dating Detox as the lead event.
- It will read much better in social feeds than a dense mission/timeline card.

Technical details
- Best source content:
  - `src/data/events.ts` → `dating-detox-talk`
  - `src/components/EventCard.tsx` for the CTA pattern and event hierarchy
  - `src/assets/logo-horizontal.png` for branding
  - `src/index.css` for colors and typography direction
- No backend work is needed.
- This can be implemented either as:
  - a generated image asset, or
  - a real React-rendered promo card on a dedicated route/component and then exported visually
- If we implement it in-app first, that also makes future social variants much easier and more consistent.

Suggested deliverable
- One square 1:1 promo for “Dating Detox” optimized for announcement posts, with:
  - logo
  - event type label
  - full title
  - tagline
  - date/recurring context
  - concise supporting copy
  - strong “Get Your Ticket” CTA

<lov-actions>
<lov-suggestion message="Test the new Dating Detox promo graphic end-to-end in square social crops and make sure the headline and CTA are readable">Verify that it works</lov-suggestion>
<lov-suggestion message="Create a square 1:1 Dating Detox event promo graphic using the existing logo, event title, tagline, date, and Get Your Ticket CTA in the current brand style">Make the Dating Detox promo</lov-suggestion>
<lov-suggestion message="Create a second square promo focused on Humans Happy Hour using the same branded event-promo system">Make a Happy Hour promo</lov-suggestion>
<lov-suggestion message="Turn the event promo into a reusable React-based social card template so future event graphics can be generated consistently">Build a reusable social card template</lov-suggestion>
</lov-actions>
