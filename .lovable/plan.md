# Homepage: Dating Coach for Gen X + webinar signup

Fast turnaround. The page now says one thing clearly up top — you are a dating coach for Gen X — and asks for one thing: a spot at the webinar.

## What changes

### 1. New opening statement
Replaces the current "Hey, I'm Lakshmi…" headline as the first thing under the nav.

- Eyebrow: "Dating Coach for Gen X"
- Headline: **I'm Lakshmi. I coach Gen X singles through modern dating.**
- Below it, in your words:
  - The generation that took many different relationship paths, now navigating modern dating culture.
  - Your hybrid upbringing — equally digital and analog — is an advantage, if you understand what happened to the human heart and what it takes to connect today.
- Two buttons: "Save my spot" (jumps to the webinar signup) and "Work with me" (coaching).

### 2. The webinar block, right below
- Eyebrow: "Live Webinar"
- Title: **Dating Essentials for Gen X**
- One line of pitch, then the signup: first name, email, "Save my spot"
- Quiet line under the form: "Date and time announced to the list first."

No date, time, or price appears until you send them. I will not invent them.

### 3. Your credibility, tightened
The existing 15-years line stays but gets rewritten to your framing: 15+ years working to make dating culture more human amid its takeover by tech; several years researching and then coaching Gen X singles, because this group may hold the keys to preserving organic love and connection. Match.com, Vox's *Land of the Giants*, the New York Times, the Institute for the Future stay as proof.

### 4. Everything else stays, reordered behind the new opening
The *How to Date Humans* project paragraph, the big pull quote, the general newsletter, the coaching and events tiles, the client and attendee quotes, the photo strip — all kept, all in the same order, just sitting beneath the new top. Nothing is deleted.

### 5. Second chance to sign up
A slim repeat of the webinar signup after the two tiles, so a full-page scroller still gets the ask.

## Where signups land

Both places, so nothing is lost:
- Saved to your database as `webinar:dating-essentials-gen-x`, visible at `/admin` with your other responses
- Added to your Kit list (existing form `41f402da5e`) so you can email them

Success shows only after the save actually succeeds. Invisible spam trap included, same as your other forms.

## Technical notes

- New `src/components/WebinarSignup.tsx` — first name + email, honeypot, inserts into `form_submissions` (`form_type: 'webinar:dating-essentials-gen-x'`, `subject: 'Webinar interest — Dating Essentials for Gen X'`, `fields: { Name, Email }`), then posts to Kit. Kit failure does not block success; a DB failure does. Accepts a `compact` prop for the second placement.
- `src/pages/Index.tsx` — new opening statement + webinar block above the existing content; compact signup after the two-tile section; credibility paragraph rewritten.
- Existing tokens only (`--coral`, `btn-pill`, `btn-pill-outline`, `eyebrow`, `font-display`). No new colors or fonts.
- Head title and meta description updated: Gen X dating coach + the webinar.
- No schema change — `form_submissions` already accepts this shape.

## Needs from you

Date, time, length, and price for the webinar when you have them, plus a one-line description if you want different wording than the placeholder pitch.
