# Homepage: Dating Coach for Gen X + webinar interest

Fast turnaround. The homepage becomes about you — a dating coach for Gen X — with one ask: the webinar. How to Date Humans stays in the background as a footnote.

## What changes

### 1. New opening statement
Replaces the current "Hey, I'm Lakshmi…" headline as the first thing under the nav.

- Eyebrow: "Dating Coach for Gen X"
- Headline: **I'm Lakshmi. I coach Gen X singles through modern dating.**
- Below it, in your words:
  - The generation that took many different relationship paths, now navigating modern dating culture.
  - Your hybrid upbringing — equally digital and analog — is an advantage, if you understand what happened to the human heart and what it takes to connect today.
- Two buttons: "Essentials Webinar" (jumps to the webinar form) and "Work with me" (coaching).

### 2. The webinar block, right below
- Eyebrow: "Coming Soon"
- Title: **Dating Essentials for Gen X**
- One line of pitch, then the form: **first name, age, email**, button **"Let me know!"**
- Nothing about date, time, price, or when details get released. Those go in only when you send them.

### 3. Your credibility, tightened
The 15-years line gets rewritten to your framing: 15+ years working to make dating culture more human amid its takeover by tech; several years researching and then coaching Gen X singles, because this group may hold the keys to preserving organic love and connection. Match.com, Vox's *Land of the Giants*`, the New York Times, the Institute for the Future stay as proof.

### 4. What stays on the homepage
The pull quote, the newsletter signup, the coaching tile, the coaching client quotes.

### 5. What leaves the homepage
The *How to Date Humans* italic paragraph, the events tile, the event attendee quotes, and the event photo strip. They are not moved to a new page — the project becomes a one-line footnote near the bottom of the homepage, linking to `/events` for anyone who wants more.

### 6. Second chance to sign up
A slim repeat of the webinar form near the bottom of the homepage.

### 7. Nav stays as-is for now
"Events" remains in the nav. No new route or redirect needed.

## Where signups land

Both places, so nothing is lost:
- Saved to your database as `webinar:dating-essentials-gen-x`, visible at `/admin` with your other responses
- Added to your Kit list (existing form `41f402da5e`) so you can email them

Success shows only after the save actually succeeds. Invisible spam trap included, same as your other forms.

## Technical notes

- New `src/components/WebinarSignup.tsx` — first name, age, email, honeypot; zod validation (name ≤80, age 18–99, email ≤255); inserts into `form_submissions` (`form_type: 'webinar:dating-essentials-gen-x'`, `subject: 'Webinar interest — Dating Essentials for Gen X'`, `fields: { Name, Age, Email }`) then posts to Kit with `fields[age]`. Kit failure does not block success; a DB failure does. `compact` prop for the second placement.
- `src/pages/Index.tsx` — rebuilt order: opening statement, webinar block, credibility, coaching tile, client quotes, pull quote, newsletter, compact webinar form, project footnote.
- `src/components/SiteNav.tsx` — unchanged.
- `src/App.tsx` — unchanged.
- Existing tokens only (`--coral`, `btn-pill`, `btn-pill-outline`, `eyebrow`, `font-display`). No new colors or fonts.
- Head title and meta description updated: Gen X dating coach + the webinar.
- No schema change — `form_submissions` already accepts this shape.

## Needs from you

Date, time, length, and price for the webinar when you have them, plus a one-line description if you want different wording than the placeholder pitch.
