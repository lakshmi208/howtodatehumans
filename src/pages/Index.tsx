import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';
import workingFromHoxton from '@/assets/working-from-hoxton.jpeg';
import event1 from '@/assets/event-1.jpeg';
import event3 from '@/assets/event-3.jpeg';
import detoxSlide from '@/assets/events-past/detox-slide.jpg';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';

const eyebrowCoral = { color: 'hsl(var(--coral))' };

// Real audience quotes from past How to Date Humans events.
const quotes = [
  {
    quote:
      'A friend dragged me…but I’m glad he did. As a guy you feel like you’re supposed to know everything and yet we can’t — this stuff is so recent. Understanding how the system was built was a game changer.',
    by: 'Attendee, Dating Detox',
  },
  {
    quote:
      'I have never been to an event like this. It wasn’t a singles event but it was about dating. That alone made the room interesting and full of energy because everyone could relate — single or not.',
    by: 'Attendee, Kickoff',
  },
  {
    quote:
      'I love the fact that it’s based in Chicago and runs for just one year. I want to see what Lakshmi learns.',
    by: 'Attendee, Kickoff',
  },
  {
    quote:
      'The dating advice we’ve been fed is outdated. This is the stuff we actually need to hear.',
    by: 'Attendee, Dating in Collapse',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero — locked opening copy */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-20">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.08] mb-8">
          Hey, I&rsquo;m Lakshmi — a dating coach for <em>Gen X</em>. I&rsquo;ve
          been working to keep dating as human as possible for 15 years.
        </h1>

        <div className="mb-10">
          <Link to="/coaching" className="btn-pill">
            Work with me
          </Link>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-4">
          I care about how people meet and if they actually connect.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-8">
          I care about the future of dating culture and how it will shape our
          hearts.
        </p>

        <p className="font-display italic text-xl md:text-2xl text-foreground/75 mb-10 max-w-2xl">
          My latest project <em>How to Date Humans</em> is fueled by the idea
          that tech should be an option in dating, not the default setting it
          has become…
        </p>

        <Link to="/events" className="btn-pill-outline">
          See the project
        </Link>
      </section>

      {/* Why this matters — cinematic pull-quote */}
      <section className="relative w-full bg-foreground py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote
            className="font-display italic text-2xl md:text-4xl lg:text-5xl leading-[1.18]"
            style={{ color: 'hsl(var(--background))' }}
          >
            Dating is about way more than romance. It&rsquo;s about what we
            think our hearts could experience in our lifetimes. Over these past
            15 years we&rsquo;ve handed that part of ourselves to corporations
            and screens — <em>without fully realizing it</em>.
          </blockquote>
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
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={lakshmiPortrait}
                alt="Lakshmi Rengarajan"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: 'center 25%' }}
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
                src={event3}
                alt="Engaged audience at a How to Date Humans event"
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
                A year-long project to figure out what happened to dating — and
                how we bring some of it back. Chicago. Research, talks, salons,
                new event formats. To make sure tech is an option, not a default
                setting, for how we meet and get to know others.
              </p>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                See the project →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Proof — audience quotes */}
      <section className="border-t border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="eyebrow mb-12">What we&rsquo;ve heard so far</p>

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
                src={detoxSlide}
                alt="Slide from Dating Detox — how relationships used to form"
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
          <p className="text-sm italic text-muted-foreground mt-4 max-w-2xl">
            Not singles events — yet. Talks and events to understand what
            happened to modern dating…
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
