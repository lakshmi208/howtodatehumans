import { Mail } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';
import magnet from '@/assets/coaching/magnet.jpg';
import jumpstart from '@/assets/coaching/jumpstart.jpg';
import fireworks from '@/assets/coaching/fireworks.jpg';

const eyebrowCoral = { color: 'hsl(var(--coral))' };

// Lakshmi's discovery-call link (same one used on /pilot)
const CALENDLY = 'https://calendly.com/lakshmi-howtodatehumans/30min';

type Offering = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  cta: { label: string; href: string };
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

      {/* Hero + Book a call */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-12">
        <p className="eyebrow mb-6" style={eyebrowCoral}>
          Coaching
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-8">
          Coaching, calibrated for <em>Gen X</em>.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-10">
          Storytelling is the spine of modern dating — the skill that turns a passing
          question into the start of something. Four flavors of one-on-one work, all
          calibrated to where you actually are.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
          >
            Book a call
          </a>
          <a
            href="#offerings"
            className="btn-pill-outline"
          >
            See the four formats
          </a>
        </div>
      </section>

      {/* Who this is for */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="eyebrow mb-3">Who this is for</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6 max-w-3xl">
          {/* TODO: Lakshmi — short copy describing the holistic Gen X ICP. */}
          {/* Brief said "use my existing copy" but no existing block on this page */}
          {/* describes the broader Gen X coaching ICP (only product-level descriptions). */}
          {/* Suggested shape: 2–3 sentences on who shows up well in this work. */}
          Gen X. Dating again, or dating differently than you used to.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-foreground/75 max-w-2xl italic">
          [TODO copy from Lakshmi — placeholder]
        </p>
      </section>

      {/* How it works */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="eyebrow mb-3">How it works</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-10 max-w-3xl">
          A short shape, by design.
        </h2>
        {/* TODO: Lakshmi — 3–4 steps of the engagement flow (discovery call → */}
        {/* pick a format → first session → ongoing). Use her existing client */}
        {/* onboarding language if she has it documented. */}
        <ol className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl italic">
          <li>1. [TODO: discovery call step]</li>
          <li>2. [TODO: format/scope decision step]</li>
          <li>3. [TODO: first working session step]</li>
          <li>4. [TODO: ongoing engagement step]</li>
        </ol>
      </section>

      {/* The four formats */}
      <section id="offerings" className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-20 scroll-mt-20">
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
            <h3 className="font-display text-2xl md:text-3xl leading-tight mb-5">
              {o.title}
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl mb-7">
              {o.body}
            </p>
            <a href={o.cta.href} className="btn-pill">
              <Mail className="w-4 h-4" />
              {o.cta.label}
            </a>
          </article>
        ))}
      </section>

      {/* Client quotes */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="eyebrow mb-3">From clients</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-10 max-w-3xl">
          What people have said after a session.
        </h2>
        {/* TODO: Lakshmi — at least one verbatim quote from a coaching client. */}
        {/* Event-attendee quotes on /events don't count here — these need to be */}
        {/* specifically from 1:1 coaching engagements. */}
        <div className="space-y-8 max-w-2xl">
          <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-foreground/60">
            &ldquo;[TODO: client quote 1]&rdquo;
            <footer className="text-xs uppercase tracking-widest text-muted-foreground mt-3 not-italic">
              — [client attribution]
            </footer>
          </blockquote>
          <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-foreground/60">
            &ldquo;[TODO: client quote 2 — optional second quote]&rdquo;
            <footer className="text-xs uppercase tracking-widest text-muted-foreground mt-3 not-italic">
              — [client attribution]
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Book a call — final CTA */}
      <section className="border-t border-border bg-foreground/[0.03]">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="eyebrow mb-3" style={eyebrowCoral}>
            Start a conversation
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] mb-6">
            One 30-minute call. No pitch — just a real fit conversation.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/85 mb-10 max-w-xl mx-auto">
            If any of this sounded like you, the next step is a discovery call. We figure
            out together whether (and how) we should work.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
          >
            Book a call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Coaching;
