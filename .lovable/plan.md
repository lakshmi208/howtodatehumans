## Reset the hero to text-only

The bento grid mixed real photos with invented captions/field-notes. Removing it and returning to a clean, confident text hero.

### Changes

1. **`src/pages/Index.tsx`**
   - Remove `import HeroBentoGrid` and the `<HeroBentoGrid />` usage.
   - Replace with an inline text hero section:
     - Eyebrow: "A 1-year project · Feb 2026 – Feb 2027"
     - H1 (display, large): "How to Date Humans."
     - Subhead (1–2 sentences): positions the project as an active, living investigation into modern dating culture.
     - Two CTAs: primary → `/events`, secondary → `#newsletter` (or About).
   - Keep existing spacing scale and the coral eyebrow token already used elsewhere on the page.

2. **`src/components/HeroBentoGrid.tsx`**
   - Delete the file (no other consumers).

3. **No other sections touched.** WHY / events / newsletter blocks stay exactly as they are.

### Out of scope
- No new photo grids, no captions, no "field notes."
- Real photos will be reintroduced later in a dedicated section once you tell me what each one actually is.

### Copy I'll use (open to edits)
- Eyebrow: `A 1-year project · Feb 2026 – Feb 2027`
- Headline: `How to Date Humans.`
- Subhead: `An ongoing investigation into how we connect now — and how to rebuild the infrastructure that made it possible.`
- CTAs: `See what's happening →` / `Get updates`

Reply with any copy tweaks, otherwise I'll implement as written.