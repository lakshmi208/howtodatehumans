import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';
import workingFromHoxton from '@/assets/working-from-hoxton.jpeg';
import event1 from '@/assets/event-1.jpeg';
import event3 from '@/assets/event-3.jpeg';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';

const eyebrowCoral = { color: 'hsl(var(--coral))' };

// Real audience quotes from past How to Date Humans events.
const quotes = [
  {
    quote: 'I didn’t know most of this stuff about dating history.',
    by: 'Audience comment',
  },
  {
    quote:
      'I think if people had this knowledge, we might see each other in a different light.',
    by: 'Audience email',
  },
  {
    quote: 'Seriously good vibes. I loved the no-phones recommendation.',
    by: 'Attendee feedback',
  },
  {
    quote:
      'I like how these are not “singles events” per se. They’re interesting discussions about the experience of being single today. I brought my married best friend with me.',
    by: 'Attendee, Dating Detox',
  },
  {
    quote:
      'I am married but I think about what the future holds for my children, and this was illuminating.',
    by: 'Audience email',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero — locked opening copy */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-20">
        <p className="eyebrow mb-8" style={eyebrowCoral}>
          Gen X Dating Coach · Chicago
        </p>

        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.08] mb-8">
          Hey, I&rsquo;m Lakshmi — a dating coach for Gen X, but also someone
          who&rsquo;s been <em>obsessed</em> with keeping dating as human as
          possible for 15 years.
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-6">
          I care about how we meet, whether or not we actually connect, and what
          that means for how we imagine the future and the shape of our hearts.
        </p>

        <p className="font-display italic text-xl md:text-2xl text-foreground/75 mb-10 max-w-2xl">
          How to Date Humans is my latest project…
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/coaching" className="btn-pill">
            Work with me
          </Link>
          <Link to="/events" className="btn-pill-outline">
            See the project
          </Link>
        </div>
      </section>

      {/* One-line credibility cue */}
      {/* TODO: Lakshmi to sign off on specific wording. Example from brief: */}
      {/* "I spent years inside companies studying how humans connect — and don't. */}
      {/* Now I bring that to your dating life." Below is a placeholder using her */}
      {/* existing credentials, no invented framing. */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-12 md:py-16">
        <p className="text-base md:text-lg italic text-foreground/70 max-w-3xl">
          Fifteen years inside the dating industry — Match.com, Vox&rsquo;s{' '}
          <em>Land of the Giants</em>, the New York Times, the Institute for the
          Future. Now coaching one-on-one and running a year-long project in Chicago.
        </p>
      </section>

      {/* Two offerings, side by side */}
      <section className="border-t border-border max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Coaching tile */}
          <Link
            to="/coaching"
            className="group block border border-border bg-background hover:border-foreground/40 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={lakshmiPortrait}
                alt="Lakshmi Rengarajan"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-7 md:p-8">
              <p className="eyebrow mb-3" style={eyebrowCoral}>
                1:1 Coaching
              </p>
              <h2 className="font-display text-2xl md:text-3xl leading-tight mb-4">
                Custom coaching for Gen X daters.
              </h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-6">
                Four flavors of one-on-one work — from a single storytelling
                session to ongoing engagements. Pick the format that fits, or
                book a call to figure out which one does.
              </p>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                Book a call →
              </span>
            </div>
          </Link>

          {/* Events tile */}
          <Link
            to="/events"
            className="group block border border-border bg-background hover:border-foreground/40 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={workingFromHoxton}
                alt="A How to Date Humans event at The Hoxton"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-7 md:p-8">
              <p className="eyebrow mb-3" style={eyebrowCoral}>
                How to Date Humans
              </p>
              <h2 className="font-display text-2xl md:text-3xl leading-tight mb-4">
                A year-long Chicago project.
              </h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-6">
                Events, salons, listening sessions, talks. A real attempt to
                figure out what happened to modern dating — and see if we can
                turn things around.
              </p>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                See upcoming events →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Proof — audience quotes */}
      <section className="border-t border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="eyebrow mb-12">What we&rsquo;re hearing</p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16 mb-16">
            {quotes.map((q, i) => (
              <figure key={i} className="space-y-4">
                <blockquote className="font-display italic text-2xl md:text-3xl leading-tight text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="text-xs uppercase tracking-widest text-muted-foreground">
                  — {q.by}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Small photo strip — not your typical singles event */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 border-t border-border pt-12">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={workingFromHoxton}
                alt="The Hoxton kickoff"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={event3}
                alt="Engaged audience at a How to Date Humans event"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={event1}
                alt="Community gathering at a coworking space"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mt-4 italic">
            Not your typical singles event. <Link to="/events" className="underline underline-offset-4 hover:text-foreground transition-colors">See the full project →</Link>
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border">
        <NewsletterSignup />
      </section>
    </div>
  );
};

export default Index;
