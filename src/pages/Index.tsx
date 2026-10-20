import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';
import PressCarousel from '@/components/PressCarousel';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';
import genXFlag from '@/assets/home/gen-x-flag.png';
import chicagoHeartsFlag from '@/assets/home/chicago-hearts-flag.png';
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

// Two ways in — by generation and by geography. Two matching flags; their white
// backgrounds blend into the card color (mix-blend-multiply).
const paths = [
  {
    eyebrow: 'By generation',
    title: 'Dating Coach for Gen X',
    body: 'Coaching and the Essentials webinar for Gen X singles.',
    image: genXFlag,
    alt: 'A Gen X flag: four red Xs between a pink and a brown stripe, labeled Divorced, Didn’t Marry, Widowed and Something Else',
    imageClass: 'w-full h-auto scale-[1.12] mix-blend-multiply',
    next: { label: 'Up next: Oct 28', detail: 'Gen X Dating Essentials · live on Zoom', href: '/essentials/', external: true },
    more: { label: 'Coaching', href: '/coaching' },
  },
  {
    eyebrow: 'By geography',
    title: 'How to Date Humans',
    body: 'Events and talks in Chicago to shape the future of dating culture.',
    image: chicagoHeartsFlag,
    alt: 'The Chicago flag with its stars redrawn as hearts, filling in from outline to solid',
    imageClass: 'w-full h-auto scale-[1.12] mix-blend-multiply',
    next: { label: 'Up next: Nov 5', detail: 'Dating in Collapse · Three Cities Social, River North', href: '/events#up-next' },
    more: { label: 'Events', href: '/events' },
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero — the shared purpose; the two ways in follow directly below */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-6 md:pb-8">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.08] mb-8">
          Hey, I&rsquo;m Lakshmi. I&rsquo;ve been working to keep dating as
          human as possible for 15 years.
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-4">
          I care about how people meet and if they actually connect, and about
          what technology and shifts in culture have done to our hearts.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl">
          I&rsquo;m going about it two ways: one by coaching one generation, the
          other by shifting dating culture in one city. Read below to learn why
          each matters.
        </p>
      </section>

      {/* Two ways in — generation + geography, equal footing */}
      <section className="max-w-5xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {paths.map((path) => (
            <div key={path.title} className="flex flex-col">
              <div className="aspect-[16/10] flex items-center justify-center overflow-hidden border border-border" style={{ backgroundColor: '#f4f8f2' }}>
                <img src={path.image} alt={path.alt} className={path.imageClass} />
              </div>
              <p className="eyebrow mt-6 mb-2" style={eyebrowCoral}>
                {path.eyebrow}
              </p>
              <h2 className="font-display text-2xl md:text-3xl leading-tight mb-3">{path.title}</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-5">{path.body}</p>
              <div className="mt-auto">
                <p className="text-sm text-foreground/70 mb-3">{path.next.detail}</p>
                {path.next.external ? (
                  <a href={path.next.href} className="btn-pill">{path.next.label}</a>
                ) : (
                  <Link to={path.next.href} className="btn-pill">{path.next.label}</Link>
                )}
              </div>
              <Link to={path.more.href} className="mt-5 text-sm font-medium hover:underline">
                {path.more.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why this matters — cinematic pull-quote */}
      <section className="relative w-full bg-foreground py-14 md:py-20">
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

      {/* Credibility + press as one unit */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-10 md:py-14">
        <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-6 mb-10">
          <img
            src={lakshmiPortrait}
            alt="Lakshmi"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-border shrink-0 object-[center_20%]"
          />
          <p className="text-base md:text-lg italic text-foreground/70 max-w-3xl">
            I&rsquo;ve spent 15+ years working to make dating culture more human amid its takeover by tech. Several years ago I focused on researching, and then coaching, Gen X singles — because this group may hold some of the keys to preserving organic love and connection. Match.com, Vox&rsquo;s <em>Land of the Giants</em>, the New York Times, the Institute for the Future.
          </p>
        </div>
        <PressCarousel />
      </section>

      {/* Coaching tile */}
      <section className="border-t border-border max-w-4xl mx-auto px-6 py-12 md:py-16">
        <a
          href="https://calendly.com/lakshmi-howtodatehumans/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-border bg-background hover:border-foreground/40 transition-colors p-7 md:p-8"
        >
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
        </a>
      </section>

      {/* Proof — coaching client quotes */}
      <section className="border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
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

      {/* Newsletter — moved to bottom */}
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

    </div>
  );
};

export default Index;
