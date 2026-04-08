

## Plan

### 1. Remove tagline from event interest submissions
**`src/components/EventCard.tsx`** line 32 — Remove `Tagline: event.tagline` from the `fields` object so it only stores `{ Email, Event }`.

### 2. Rename research buttons globally
**`src/components/ResearchCard.tsx`**:
- "I'd like to chat" → **"I'll talk"** (line 100)
- "Keep me posted" → **"Please explore this!"** (line 104)

### 3. Add per-area vetting questions
**`src/data/research.ts`** — Add a `vettingFields` array to each area:

| Area | Fields |
|---|---|
| Divorced Dudes | Name, Age, Years Divorced, Email, Share links/anything else (textarea) |
| Gen Z | Name, Age, Email, One Word to Describe Dating Today, Share links/anything else (textarea) |
| Coaches & Matchmakers | Name, Age, Coach/Matchmaker/Both (select), Email, Share links/anything else (textarea) |
| AI & Dating | Name, Age, Email, How have you used AI in dating? (textarea), Share links/anything else (textarea) |

### 4. Render dynamic vetting form
**`src/components/ResearchCard.tsx`** — When "talk" mode is active, render fields from the area's `vettingFields` schema instead of the current generic textarea + email. All answers stored as key-value pairs in `form_submissions.fields` JSON. No database changes needed.

### 5. Desktop timeline month labels scroll with cards
**`src/pages/Index.tsx`** — Attach month badges to their card groups so they scroll horizontally together instead of staying static.

