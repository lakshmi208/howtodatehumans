

## Confirmation Message Updates

### Changes

**`src/components/EventCard.tsx`**
- Change "You're on the list! ✓" to **"Thanks! ✓"** (email interest form)
- Add a separate confirmation for story submissions (once that feature is built): **"We'll review your info — thanks! ✓"**

**`src/components/ResearchCard.tsx`**
- "I'll talk" form (vetting fields): Change "You're on the list! ✓" to **"We'll review your info — thanks! ✓"**
- "Please explore this!" form (email only): Change "You're on the list! ✓" to **"Thanks! ✓"**

**`src/data/events.ts`**
- Rename `chicago-romance-stories` title from `'Love Letters to Chicago'` to `'We Met in CHI'`
- Add `hasStoryCapture: true` to its config

**`src/components/EventCard.tsx`** (story capture feature)
- Add "I have a story" button when `event.hasStoryCapture` is true
- Form collects: story textarea + email
- Submits to `form_submissions` with `form_type: 'event-story'`
- Confirmation: **"We'll review your info — thanks! ✓"**

### Logic summary
- **Simple email-only forms** → "Thanks! ✓"
- **Forms where someone shares personal info** (vetting fields, stories) → "We'll review your info — thanks! ✓"

