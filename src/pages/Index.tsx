import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';
import WebinarSignup from '@/components/WebinarSignup';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const eyebrowCoral = { color: 'hsl(var(--coral))' };

// Coaching client quotes — featured on the homepage carousel.
const coachingQuotes = [
  {
    quote:
      'Lakshmi completely changed the way I talk about myself on dates. This alone changed everything.',
    by: 'S.P., 45 · didn’t marry so far',
  },
  {
    quote:
      'I heard Lakshmi on Pivot. I’d never heard someone talk about dating that way. I’d seen my peers “fall” back into dating. I didn’t want to do that. I’ve been dating an incredible woman for over a year.',
    by: 'R.E., 59 · Divorced',
  },
  {
    quote:
      'She didn’t tell me what to do — she helped me discover how I wanted to show up. Widowed, I hadn’t dated in a very long time. I’ve now been seeing a wonderful man for five months.',
    by: 'J.M., 47 · Widowed',
  },
  {
    quote:
      'I’m good at sales. Turns out that was actually hurting me in my dating life. Lakshmi helped me step out of sales and into connection mode when it mattered most.',
    by: 'E.K., 46',
  },
];

const Index = () => {
  const scrollToWebinar = () => {
    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero — Dating Coach for Gen X */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-20">
        <p className="eyebrow mb-4" style={eyebrowCoral}>
          Dating Coach for Gen X
        </p>

        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.08] mb-8">
          I&rsquo;m Lakshmi. I coach Gen X singles through modern dating.
        </h1>

        <div className="flex flex-wrap gap-3 mb-10">
          <button onClick={scrollToWebinar} className="btn-pill">
            Essentials Webinar
          </button>
          <a
            href="https://calendly.com/lakshmi-howtodatehumans/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-outline"
          >
            Work with me
          </a>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-4">
          The generation that took many different relationship paths, now navigating modern dating culture.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl">
          Your hybrid upbringing — equally digital and analog — is a huge advantage, if you understand what happened to the human heart and what it takes to connect today.
        </p>
      </section>

      {/* Webinar — primary ask */}
      <section id="webinar" className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <p className="eyebrow mb-3" style={eyebrowCoral}>
            Coming Soon
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-4">
            Dating Essentials for Gen X
          </h2>
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-8 max-w-2xl">
            The foundational insights about connection and dating today that many skip.
          </p>
          <WebinarSignup />
        </div>
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

      {/* Newsletter */}
      <section className="border-t border-border">
        <NewsletterSignup
          eyebrow="The Newsletter"
          title="We're All Dating All The Time"
          description={
            <>
              A newsletter about what it takes to connect today.
              <br />
              Because it&rsquo;s easy to meet, harder to connect&trade;.
            </>
          }
          buttonLabel="Send it my way"
        />
      </section>

      {/* Credibility */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-12 md:py-16">
        <p className="text-base md:text-lg italic text-foreground/70 max-w-3xl">
          I&rsquo;ve spent 15+ years working to make dating culture more human amid its takeover by tech. Several years ago I focused on researching, and then coaching, Gen X singles — because this group may hold some of the keys to preserving organic love and connection. Match.com, Vox&rsquo;s <em>Land of the Giants</em>, the New York Times, the Institute for the Future.
        </p>
      </section>

      {/* Coaching tile */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-24">
        <a
          href="https://calendly.com/lakshmi-howtodatehumans/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-border bg-background hover:border-foreground/40 transition-colors"
        >
          <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-muted">
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
              &ldquo;Get back out there.&rdquo; &ldquo;You know what you want
              now.&rdquo; The advice hasn&rsquo;t kept up. Dating as a Gen X-er
              is a bridge experience unlike any other. I&rsquo;ve spent years
              studying and interviewing this group — and built a one-of-a-kind
              map for how to navigate it.
            </p>
            <span className="text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
              See if this fits →
            </span>
          </div>
        </a>
      </section>

      {/* Proof — coaching client quotes */}
      <section className="border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="eyebrow mb-6" style={eyebrowCoral}>
            Client Testimonials:
          </p>
          <p className="text-base md:text-lg font-normal text-foreground/80 leading-relaxed max-w-3xl mb-10">
            From coast to coast, Midwest and South… many relationship and
            professional paths… all with a desire to make the most of this
            (still) youthful window of dating…
          </p>

          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {coachingQuotes.map((q, i) => (
                <CarouselItem key={i} className="pl-6 basis-full md:basis-full">
                  <figure className="space-y-5 max-w-3xl">
                    <blockquote className="font-display italic text-2xl md:text-4xl leading-tight text-foreground">
                      &ldquo;{q.quote}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs uppercase tracking-widest text-muted-foreground">
                      — {q.by}
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious
                className="static translate-y-0 h-10 w-10 bg-transparent border-foreground/30 text-foreground hover:bg-transparent hover:border-foreground"
                variant="outline"
              />
              <CarouselNext
                className="static translate-y-0 h-10 w-10 bg-transparent border-foreground/30 text-foreground hover:bg-transparent hover:border-foreground"
                variant="outline"
              />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Second chance to sign up */}
      <section className="border-t border-border max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h2 className="font-display text-2xl md:text-3xl leading-tight mb-2">
          Dating Essentials for Gen X
        </h2>
        <p className="text-foreground/70 mb-6">
          Be the first to know when the webinar is ready.
        </p>
        <WebinarSignup compact />
      </section>

      {/* Project footnote */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-12 md:py-16">
        <p className="text-sm text-muted-foreground">
          Also:{' '}
          <Link to="/events" className="underline hover:text-foreground transition-colors">
            How to Date Humans
          </Link>{' '}
          — a series of events and talks to shape the future of dating culture by looking at what happened and how we might shift things.
        </p>
      </section>
    </div>
  );
};

export default Index;
