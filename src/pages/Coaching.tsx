import { Mail } from 'lucide-react';
import type { ReactNode } from 'react';
import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';
import magnet from '@/assets/coaching/magnet.jpg';
import jumpstart from '@/assets/coaching/jumpstart.jpg';
import fireworks from '@/assets/coaching/fireworks.jpg';
import nyt from '@/assets/press/nyt.png';
import pivotPod from '@/assets/press/pivot-pod.jpg';
import profG from '@/assets/press/prof-g.jpg';
import vanityFair from '@/assets/press/vanity-fair.png';

const eyebrowCoral = { color: 'hsl(var(--coral))' };
const coralBorder = { borderColor: 'hsl(var(--coral))' };

// Lakshmi's discovery-call link (same one used on /pilot)
const CALENDLY = 'https://calendly.com/lakshmi-howtodatehumans/30min';

// Self-contained press row — images + source URLs mirror src/components/PressCarousel.tsx
const press = [
  {
    label: 'The New York Times',
    img: nyt,
    url: 'https://www.nytimes.com/2025/01/03/style/dating-predictions.html',
  },
  {
    label: 'Pivot with Kara Swisher & Scott Galloway',
    img: pivotPod,
    url: 'https://podcasts.apple.com/us/podcast/best-friends-of-pivot/id1073226719?i=1000639439067',
  },
  { label: 'The Prof G Pod', img: profG, url: '/about#press' },
  {
    label: 'Vanity Fair',
    img: vanityFair,
    url: 'https://www.vanityfair.com/style/2021/08/08/meet-the-former-matchcom-director-turned-old-school-setup-evangelist',
  },
];

/* Coral highlight for the "payoff" line inside a testimonial. */
const Hl = ({ children }: { children: ReactNode }) => (
  <span style={eyebrowCoral}>{children}</span>
);

type Quote = { text: ReactNode; name: string };

const Testimonial = ({ quote }: { quote: Quote }) => (
  <figure className="border-l-2 pl-5 md:pl-6 max-w-2xl" style={coralBorder}>
    <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-foreground/90">
      {quote.text}
    </blockquote>
    <figcaption className="eyebrow mt-4 text-muted-foreground">— {quote.name}</figcaption>
  </figure>
);

type Offering = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  cta: { label: string; href: string };
  quote?: Quote;
};

const offerings: Offering[] = [
  {
    eyebrow: '90 minutes · Single session',
    title: 'Magnetic storytelling for Gen X daters.',
    body:
      'A 90-minute session where we start building your bank of stories — and you start to see how you might be sitting on your best material. What people call "baggage" is often exactly what leads to connection. You leave with three stories ready to reshape the conversations you have, around what\'s actually made you, well, you. Built for the unique stakes of early dates — and a taste of what expert date coaching actually feels like. Way more than tips and tricks.',
    image: magnet,
    imageAlt: 'A magnet — drawing the right person in',
    cta: {
      label: 'Book a session',
      href: 'mailto:info@howtodatehumans.com?subject=Storytelling%20session',
    },
    quote: {
      text: (
        <>
          “I’m accomplished, but I didn’t know if I was interesting.{' '}
          <Hl>Lakshmi turned the details of my life into magnetic stories I’m excited to tell.</Hl>”
        </>
      ),
      name: 'S.P., 45 · Never married',
    },
  },
  {
    eyebrow: 'Short series · Gen X men',
    title: 'Jumpstart sessions.',
    body:
      "A short series of sessions, mixed with light coaching, to get you oriented and ready to navigate today's world of dating. Designed to make sure you don't repeat the past — and instead build the future you actually want now.",
    image: jumpstart,
    imageAlt: 'Jumper cables — getting reoriented quickly',
    cta: {
      label: 'Tell me more',
      href: 'mailto:info@howtodatehumans.com?subject=Jumpstart%20inquiry%20%E2%80%94%20Gen%20X%20men',
    },
  },
  {
    eyebrow: 'Custom curriculum',
    title: 'Gen X women who did not marry (so far).',
    body:
      "This widely misunderstood cohort is poised to make the most of the new era of dating. A custom curriculum designed for heterosexual women who did not marry, helping you shape an authentic set of skills and stories to leverage — rather than apologize for — why you held out, and why it's worth holding up.",
    image: fireworks,
    imageAlt: 'Fireworks — what becomes possible',
    cta: {
      label: 'Tell me more',
      href: 'mailto:info@howtodatehumans.com?subject=Coaching%20inquiry%20%E2%80%94%20women%20who%20did%20not%20marry',
    },
    quote: {
      text: (
        <>
          “I didn’t realize my ‘never married’ status was holding me back.{' '}
          <Hl>Lakshmi changed it from something I had to explain into something I now see as an asset.</Hl>”
        </>
      ),
      name: 'E.K., 47 · Never married',
    },
  },
  {
    eyebrow: 'Not quite one of the three',
    title: 'General coaching inquiries.',
    body:
      "If none of the above quite fits, write me directly. Sometimes the most useful work is the kind that doesn't have a name yet.",
    image: lakshmiPortrait,
    imageAlt: 'Lakshmi Rengarajan',
    cta: {
      label: 'Email Lakshmi',
      href: 'mailto:lakshmi@howtodatehumans.com?subject=Coaching%20inquiry',
    },
  },
];

const Coaching = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* ① Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-12">
        <p className="eyebrow mb-6" style={eyebrowCoral}>
          Coaching for Gen X
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-8">
          You did the work on yourself. Nobody taught you the <em>mechanics</em>.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-10">
          You understand yourself better than you ever have. So why does <em>dating</em> still
          feel like guesswork? There’s a skill set no one names — because we’re all told this
          should just come naturally. It doesn’t. Not anymore. That’s where I come in.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-pill">
            Book a call
          </a>
          <a href="#offerings" className="btn-pill-outline">
            See the offerings
          </a>
          <a href="#one-pager" className="btn-pill-outline">
            Free one-pager
          </a>
        </div>
      </section>

      {/* ② Social proof — self-contained press logo row */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-7">
          <p className="eyebrow text-muted-foreground mb-4">As featured in</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {press.map((p) => {
              const external = p.url.startsWith('http');
              return (
                <a
                  key={p.label}
                  href={p.url}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={p.label}
                  className="block"
                >
                  <img
                    src={p.img}
                    alt={p.label}
                    className="h-8 md:h-9 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                    loading="lazy"
                  />
                </a>
              );
            })}
            <a
              href="/about#press"
              className="eyebrow text-muted-foreground hover:text-foreground transition-colors"
            >
              See all press →
            </a>
          </div>
        </div>
      </section>

      {/* ③ The storytelling reveal — the differentiator, surfaced early — + I.S. */}
      <section className="border-t border-border bg-foreground/[0.03]">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="eyebrow mb-3" style={eyebrowCoral}>
            The skill no one teaches
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.08] mb-8 max-w-3xl">
            The most important thing you do on a date isn’t asking the right questions. It’s{' '}
            <em>storytelling</em>.
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mb-12">
            <p>
              Not performing. Not your résumé. The right, true stories — told so that someone
              actually understands who you are and what’s inside you. What you’ve been calling
              baggage is usually exactly what creates connection.
            </p>
            <p>
              It’s a craft, unlike any other kind of storytelling, and it’s the heart of how we
              work together. I’ve honed it like no one else.
            </p>
          </div>
          <Testimonial
            quote={{
              text: (
                <>
                  “Her story-shaping session transformed how I talk about myself. I didn’t realize
                  I was so interesting —{' '}
                  <Hl>and now I know how to share that in the short window that is dinner or drinks.</Hl>”
                </>
              ),
              name: 'I.S., 51 · Widowed',
            }}
          />
        </div>
      </section>

      {/* ④ Why the usual advice fails you (bad-advice reframe + success paradox) + R.E. */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="eyebrow mb-3">Why the usual advice fails you</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6 max-w-3xl">
          “You’re older now. You know what you want. Just get back out there.”
        </h2>
        <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mb-12">
          <p>
            If someone tells you that — be a little suspicious. Yes, get back out there. But{' '}
            <em>how</em> you do it is everything. Few things are more corrosive to the Gen X heart
            than dating advice copy-pasted from a 20- or 30-something’s playbook.
          </p>
          <p>
            And there’s a trap no one warns you about: you’re successful — and that’s part of what’s
            hiding the problem. You’re excellent in your field, so you assume you’ll be fine here
            too. But being good at your job has almost nothing to do with this. Most people just
            dive in — and learn the hard way.
          </p>
          <p>You deserve strategies built for <em>this</em> moment in the timeline of dating.</p>
        </div>
        <Testimonial
          quote={{
            text: (
              <>
                “I heard Lakshmi on Pivot and thought,{' '}
                <Hl>I’m a senior leader, I can figure this out. I could not.</Hl> She saved me so
                much time — I’ve been dating an incredible woman for over a year. I later brought
                her into my company to help with all our relationships.”
              </>
            ),
            name: 'R.E., 59 · Divorced',
          }}
        />
      </section>

      {/* ⑤ Why this window — and why me (Gen X window + the "not a…" block) + J.M. */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="eyebrow mb-3">Why this window — and why me</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-8 max-w-3xl">
          More wisdom than ever. It just doesn’t always <em>translate</em> to dating.
        </h2>
        <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mb-10">
          <p>
            Gen X is a pivotal generation in shaping where romance goes next. You’ve lived, you’ve
            learned — and still, the actual moves of connecting today can feel foreign.
          </p>
          <p>
            You’d tell your friends you’re “just seeing what’s out there.” Sure. We don’t have to
            say the rest out loud. But you and I both know the difference between good enough and
            the thing you actually want.
          </p>
          <p>
            What you do in this window matters — not in an alarmist way. This is the rekindling of
            your heart. Don’t leave that to a generic coach, a matchmaker, or your well-meaning
            group chat.
          </p>
          <p>
            I spent three years studying how Gen X actually dates, then built the playbook.
            “Midlife” never fit; this generation needed its own approach. I was doing this work
            before the apps existed, and I have a point of view, not a script.
          </p>
          <ul className="space-y-4">
            <li>
              <strong className="font-medium text-foreground">Not a matchmaker.</strong> You don’t
              want a relationship handed to you. You want to author your own story — you just want
              to be good at it.
            </li>
            <li>
              <strong className="font-medium text-foreground">Not a cheerleader.</strong> I’m not
              here to hype you up or scan profiles for red flags. (I’ve productively disagreed with
              Prof G — I’ll bring you that same honesty.)
            </li>
            <li>
              <strong className="font-medium text-foreground">Not your group chat.</strong> Your
              friends are more entertained by your dating life than equipped to guide it.
            </li>
          </ul>
        </div>
        <Testimonial
          quote={{
            text: (
              <>
                “She didn’t tell me what to do — she helped me discover how I wanted to show up.
                Widowed, I hadn’t dated in a very long time.{' '}
                <Hl>I’ve now been seeing a wonderful man for five months.</Hl>”
              </>
            ),
            name: 'J.M., 47 · Widowed',
          }}
        />
      </section>

      {/* ⑥ The offerings */}
      <section
        id="offerings"
        className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-20 scroll-mt-20"
      >
        <p className="eyebrow mb-3">The work, four ways</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-12 max-w-3xl">
          Pick the format that fits.
        </h2>

        {offerings.map((o) => (
          <article key={o.title} className="py-12 border-t border-border">
            <div className="flex items-center gap-5 mb-5">
              {o.image && (
                <div className="shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-muted">
                  <img
                    src={o.image}
                    alt={o.imageAlt ?? ''}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <p className="eyebrow">{o.eyebrow}</p>
            </div>
            <h3 className="font-display text-2xl md:text-3xl leading-tight mb-5">{o.title}</h3>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl mb-7">
              {o.body}
            </p>
            <a href={o.cta.href} className="btn-pill">
              <Mail className="w-4 h-4" />
              {o.cta.label}
            </a>

            {o.quote && (
              <div className="mt-9">
                <Testimonial quote={o.quote} />
              </div>
            )}
          </article>
        ))}
      </section>

      {/* ⑦ Free one-pager (lead magnet) */}
      <section className="border-t border-border">
        <div id="one-pager" className="scroll-mt-20">
          <NewsletterSignup
            eyebrow="Free one-pager"
            title="What Gen X daters actually find useful."
            description="The insights listeners return to most — from The Later Dater Today, featured in The New York Times and on Prof G — plus the prompts to put them to work this week."
            buttonLabel="Send it to me"
          />
        </div>
      </section>

      {/* ⑧ Final CTA */}
      <section className="border-t border-border bg-foreground/[0.03]">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="eyebrow mb-3" style={eyebrowCoral}>
            Start a conversation
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] mb-6">
            One 30-minute call. No pitch — just a real fit conversation.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/85 mb-10 max-w-xl mx-auto">
            If any of this sounded like you, the next step is a discovery call. We figure out
            together whether — and how — we should work.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-pill">
            Book a call
          </a>
        </div>
      </section>

      {/* ⑨ Footer strip — nurture + quiet downsell */}
      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {/* TODO Lakshmi: add the real podcast + e-book URLs */}
          <a href="#" className="hover:text-foreground transition-colors">
            Listen: The Later Dater Today →
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Prefer to start on your own? The e-book →
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Coaching;
