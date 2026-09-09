# Homepage: capture interest for "Dating Essentials for Gen X"

Fast turnaround. The homepage keeps its current voice and structure — the webinar takes the top of the page and becomes the one thing a visitor is asked to do.

## What changes

### 1. New top section: the webinar
Replaces the current opening headline block as the first thing below the nav.

- Eyebrow: "Live Webinar"
- Headline: **Dating Essentials for Gen X**
- Short pitch (2 lines, in your voice): the advice hasn't kept up for Gen X daters — this is the map, in one sitting.
- Signup form right there: first name, email, "Save my spot"
- A quiet line under the form: "Date and time announced to the list first."

No date, time, or price appears anywhere until you give me those — I will not invent them.

### 2. Your intro moves down one notch
The "Hey, I'm Lakshmi…" headline, the two "I care about…" lines, and the *How to Date Humans* italic paragraph all stay — they just sit directly beneath the webinar block instead of above it. Nothing is deleted.

### 3. Second chance to sign up
A slim repeat of the webinar signup after the coaching / events tiles, so someone who scrolls the whole page still gets the ask.

### 4. Everything else untouched
Pull quote, general newsletter, credibility line, the two tiles, the quotes and photo strip all stay exactly as they are.

## Where signups land

Both places, so nothing is lost:
- Saved to your database with the type `webinar:dating-essentials-gen-x`, visible at `/admin` alongside your other responses
- Added to your Kit list (the existing newsletter form `41f402da5e`) so you can email them

Success message only shows after the save actually succeeds. Invisible spam trap included, same as your other forms.

## Technical notes

- New `src/components/WebinarSignup.tsx` — email + first name, honeypot field, inserts into `form_submissions` (`form_type: 'webinar:dating-essentials-gen-x'`, `subject: 'Webinar interest — Dating Essentials for Gen X'`, `fields: { Name, Email }`), then posts to Kit. Kit failure does not block the success state; a DB failure does.
- `src/pages/Index.tsx` — webinar section inserted above the existing hero; compact variant of the same component placed after the two-tile section.
- Styling uses existing tokens (`--coral`, `btn-pill`, `eyebrow`, `font-display`). No new colors or fonts.
- Head title and meta description updated to lead with the webinar.
- No schema change — `form_submissions` already accepts this shape.

## Needs from you

Send the date, time, length, and price when you have them and I will drop them into the block. Same for a one-line description if you want different wording than the placeholder pitch.
