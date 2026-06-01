import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';
import workingFromHoxton from '@/assets/working-from-hoxton.jpeg';
import event3 from '@/assets/event-3.jpeg';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';

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
      'The best part is that these are NOT singles events. I got to bring my married best friend and we chat about it. I felt like she understood me a bit better.',
    by: 'Married attendee',
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

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
          Dating is the bridge to relationships. The bridge is <em>broken</em>.
        </h1>
      </section>

      {/* Bento — 5 tiles */}
      <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {/* About the project — 8 cols */}
          <Link
            to="/about"
            className="group bg-background border border-border p-8 md:p-10 md:col-span-8 hover:border-foreground/40 transition-colors flex flex-col justify-between min-h-[260px] md:min-h-[320px]"
          >
            <div>
              <p className="eyebrow mb-4">About the project</p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-4">
                A year-long investigation into what actually broke about dating.
              </h3>
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
                Chicago. Feb 2026 — Feb 2027. Salons, research, listening sessions,
                talks. One question.
              </p>
            </div>
            <p className="mt-6 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Read the manifesto →
            </p>
          </Link>

          {/* Why? — 4 cols (coral) */}
          <Link
            to="/about"
            className="group md:col-span-4 p-8 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[320px]"
            style={{
              backgroundColor: 'hsl(var(--coral))',
              color: 'hsl(var(--ink-foreground))',
            }}
          >
            <p className="eyebrow opacity-70">Why?</p>
            <p className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-tight">
              Dating culture isn’t really about dating.
            </p>
            <p className="text-sm font-medium group-hover:translate-x-1 transition-transform">
              Read the diagnosis →
            </p>
          </Link>

          {/* How — 3 cols */}
          <Link
            to="/research"
            className="group md:col-span-3 bg-background border border-border p-6 md:p-7 flex flex-col justify-between min-h-[220px] md:min-h-[280px] hover:border-foreground/40 transition-colors"
          >
            <div>
              <p className="eyebrow mb-3">How</p>
              <p className="font-display text-xl md:text-2xl leading-tight mb-3">
                Step one is understanding what actually broke.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Listening sessions, salons, field notes, talks.
              </p>
            </div>
            <p className="mt-4 text-sm font-medium group-hover:translate-x-1 transition-transform">
              See what we’re listening for →
            </p>
          </Link>

          {/* Gallery — 3 cols (photo) */}
          <Link
            to="/gallery"
            className="group md:col-span-3 relative overflow-hidden min-h-[220px] md:min-h-[280px]"
          >
            <img
              src={event3}
              alt="Scenes from a How to Date Humans event"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <p className="eyebrow mb-2 text-white/70">Gallery</p>
              <p className="text-white font-display text-xl md:text-2xl leading-tight">
                Scenes from the work →
              </p>
            </div>
          </Link>

          {/* The Project (so far) — 6 cols (large photo) */}
          <Link
            to="/events"
            className="group md:col-span-6 relative overflow-hidden min-h-[220px] md:min-h-[280px]"
          >
            <img
              src={workingFromHoxton}
              alt="A How to Date Humans event in progress at The Hoxton"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="eyebrow mb-2 text-white/70">The project so far</p>
              <p className="text-white font-display text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
                Three events done. Nine more coming.
              </p>
              <p className="text-white/80 text-sm mt-3 font-medium group-hover:translate-x-1 transition-transform inline-block">
                See the full timeline →
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* What we're hearing — full-width quote section */}
      <section className="border-t border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="eyebrow mb-12">What we’re hearing</p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
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
        </div>
      </section>

      {/* Bio */}
      <section className="border-t border-border max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-4">
            <div className="aspect-square overflow-hidden bg-muted max-w-[320px] mx-auto md:mx-0">
              <img
                src={lakshmiPortrait}
                alt="Lakshmi Rengarajan"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="eyebrow mb-3">Meet Lakshmi (luck-shmee)</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              The human <em>behind</em> How to Date Humans.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85 mb-8 max-w-xl">
              Hi, I’m Lakshmi. Fifteen years in the weeds of dating culture —
              at Match.com, at WeWork, in research, on stage. This year I’m
              spending the time most coaches won’t: looking at what actually broke
              before anyone tries to claim they can fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/about#lakshmi" className="btn-pill-outline">
                Read more
              </Link>
              <a
                href="mailto:lakshmi@howtodatehumans.com"
                className="btn-pill-outline"
              >
                Email Lakshmi
              </a>
            </div>
          </div>
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
