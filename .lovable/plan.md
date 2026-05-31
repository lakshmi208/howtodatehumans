**Scope:** Add a muted/stone logo to the top of the `/pilot` page that links back to the homepage.

**Current state:** The pilot page (`src/pages/Pilot.tsx`) has no navigation or branding at the top. It opens directly into the hero section.

**Change:**

1. Import the existing horizontal logo asset (`logo-horizontal.png`) into `Pilot.tsx`.
2. Add a logo link above the hero `<header>`, wrapped in an `<a href="/">`.
3. Apply CSS filters to desaturate and mute the logo so it matches the pilot page's stone palette:
   - `grayscale(100%)` or high desaturation
   - `opacity` reduced slightly (e.g. `opacity-60` or `opacity-70`)
   - Optional: `hover:opacity-100` for a subtle interaction
4. Keep the styling minimal — no nav links, no full SiteNav. Just the logo alone, small and unobtrusive, aligned left or centered above the hero.
5. Add an `aria-label` for accessibility.

**Visual intent:** The logo should feel like a quiet breadcrumb back to the main site, not a bold brand statement. It must not break the contemplative, soulful tone of the pilot page.

**File changed:** `src/pages/Pilot.tsx` only.