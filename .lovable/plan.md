

## Promote "Dating in Collapse" — Ticket Link + Prominence

### 1. Replace "I'm Interested" with "Get Your Ticket" for Dating in Collapse

**`src/components/EventCard.tsx`**
- Add a `ticketUrl?: string` check on the event object
- When `event.ticketUrl` is set, render a "Get Your Ticket" button (links to the URL in a new tab) instead of the "I'm Interested" email form
- Remove the now-dead `isDatingDetoxEvent` / `datingDetoxTicketUrl` variables and use the generic `ticketUrl` pattern

**`src/data/events.ts`**
- Add `ticketUrl?: string` to the `EventConcept` interface
- Set `ticketUrl: 'https://www.eventbrite.com/e/1987143217857?aff=oddtdtcreator'` on the `dating-in-collapse` event

### 2. Showcase Dating in Collapse more prominently

**`src/pages/Index.tsx`** — Add a featured event banner between the urgency bar and the filter row:
- A highlighted card/banner that calls out "Dating in Collapse" with its tagline, date, and a prominent "Get Your Ticket" CTA linking to Eventbrite
- Styled distinctly (gradient border or accent background) so it stands out from the timeline
- Only renders when the event has `upNext: true` (so it's reusable for future featured events)

**`src/components/EventCard.tsx`** — Visual differentiation:
- When `event.upNext` is true, give the card a more prominent border/glow (e.g., a primary-colored border or subtle gradient background) so it pops on the timeline

### Summary of prominence strategies
- **Featured banner** above the timeline with direct ticket CTA
- **Visual glow/border** on the timeline card itself
- **"Get Your Ticket" button** replaces interest capture since tickets are live

