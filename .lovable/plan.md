

## Copy Tweaks & Layout Changes — 9 Items

### 1. Remove shadow from hero section
The `TimelineHeader` motion div has `className="shadow-md"` on line 43. Remove it so the hero blends seamlessly into the page.

### 2. Make "A One-Year Mission..." headline ~2x bigger
Change the mission statement `<p>` from `text-lg` to `text-2xl md:text-4xl` and add `font-bold` to make it roughly double the current size.

### 3. Make the dynamic logo/headline more balanced
Increase the logo image sizing from `h-32 md:h-48 lg:h-56` to `h-40 md:h-56 lg:h-72` so it feels proportional to the larger mission text.

### 4. Move "Midlife Dating Insights" to early summer + "Coming Soon" badge
In `src/data/events.ts`: change `month: 11` → `month: 6`, `timeframe: 'Late Fall'` → `timeframe: 'Early Summer'`.
In `EventCard.tsx`: add a "Coming Soon" badge rendering (similar to "Up Next") for events that aren't completed and have a specific upcoming timeframe. We can add a `comingSoon?: boolean` field to the event type or simply flag this event directly.

### 5. New "Gauging Interest" section for remaining non-priority events
Split events into two groups on the Index page:
- **Priority events**: kickoff, dating-detox, humans-happy-hour, midlife-dating (completed or coming soon)
- **Gauging Interest**: all other events

Create a new section below the timeline with a header like **"Gauging Interest"** and intro copy: *"We're testing and trying out creative concepts to address dating culture from a multitude of angles. Let us know which ideas pique your interest!"* These cards keep their event type badges and interest buttons but are presented in a grid rather than the timeline.

### 6. Move "Scenes from the Project" below "Research Areas"
In `src/pages/Index.tsx`, swap the order: render `ResearchSection` before `PhotoGallery`.

### 7. Update "Dating Coaches & Advice Culture" research area
In `src/data/research.ts`:
- **Title**: "Dating Coaches & Advice Culture" → **"Dating Coaches & Matchmakers"**
- **Description**: Rewrite to focus on spotlighting and promoting coaches/services that genuinely improve dating, rather than calling out the bad ones. New copy: *"Everyone has opinions about dating coaches and matchmakers — and a lot of what's out there goes unchecked. Instead of calling out the bad ones, we want to spotlight and promote the coaches and services that are actually trying to improve dating, not simply make money off of dating frustration."*
- **whyItMatters**: Update to match the new positive framing.

### 8. Add padding between hero and event legend
Adding `mb-12` or `mb-16` spacing after the `TimelineHeader` section (between the hero image area and the event type legend/filter). Removing the shadow (item 1) plus increasing bottom padding on the header section will create the visual breathing room.

### 9. Change "Focus Group" label to "Research"
In `src/data/events.ts`: update `eventTypeLabels['focus-group']` from `'Focus Group'` to `'Research'`.

### Files to modify

| File | Changes |
|------|---------|
| `src/components/TimelineHeader.tsx` | Remove shadow-md; enlarge mission text ~2x; enlarge logo; add bottom padding |
| `src/data/events.ts` | Move midlife to month 6; rename Focus Group → Research; add comingSoon flag |
| `src/data/research.ts` | Update dating coaches title & description |
| `src/pages/Index.tsx` | Swap PhotoGallery/ResearchSection order; split events into timeline + "Gauging Interest" section |
| `src/components/EventCard.tsx` | Add "Coming Soon" badge rendering |

