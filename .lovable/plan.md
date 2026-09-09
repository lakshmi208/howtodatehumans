# Rename "Events" to "The Project" in navigation

## Goal
Update the site navigation so the page previously labeled "Events" reads "The Project", while keeping the link destination as `/events`.

## Why
The upcoming webinar is itself an event, so calling the events page "Events" creates confusion. "The Project" better describes the collection of talks, events, and initiatives behind How to Date Humans.

## Changes

### `src/components/SiteNav.tsx`
Change the `navItems` entry:

```text
- { label: 'Events', href: '/events', activePath: '/events' },
+ { label: 'The Project', href: '/events', activePath: '/events' },
```

No other nav items, routes, or page content change. The `/events` route and page remain exactly as they are.

## Acceptance
- Desktop nav shows "THE PROJECT" instead of "EVENTS".
- Mobile menu shows "The Project" instead of "Events".
- Clicking it still navigates to `/events`.
- Active state still highlights when on `/events`.