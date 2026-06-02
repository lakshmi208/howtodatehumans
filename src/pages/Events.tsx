import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SiteNav from '@/components/SiteNav';
import GaugingInterest from '@/components/GaugingInterest';
import IdeaSubmission from '@/components/IdeaSubmission';
import PartnerCTA from '@/components/PartnerCTA';
import { events } from '@/data/events';

// Past event photos
import kickoffSlide from '@/assets/events-past/kickoff-slide.jpg';
import kickoffStage from '@/assets/events-past/kickoff-stage.jpg';
import kickoffAction1 from '@/assets/events-past/kickoff-action-1.jpg';
import kickoffAction2 from '@/assets/events-past/kickoff-action-2.jpg';
import detoxSlide from '@/assets/events-past/detox-slide.jpg';
import detox1 from '@/assets/events-past/detox-1.jpg';
import detoxMegan1 from '@/assets/events-past/detox-megan-1.jpg';
import detoxMegan2 from '@/assets/events-past/detox-megan-2.jpg';
import collapse1 from '@/assets/events-past/collapse-1.jpg';
import collapse2 from '@/assets/events-past/collapse-2.jpg';
import collapse3 from '@/assets/events-past/collapse-3.jpg';
import collapse4 from '@/assets/events-past/collapse-4.jpg';

type PastEvent = {
  slug: string;
  date: string;
  title: string;
  venue: string;
  cover: string;
  photos: string[];
  purposeTopics?: string[];
  purpose?: string;
  quotes: string[];
};

const pastEvents: PastEvent[] = [
  {
    slug: 'kickoff',
    date: 'Feb 19, 2026',
    title: 'The Kickoff: How to Date Humans',
    venue: 'Working From at The Hoxton',
    cover: kickoffAction1,
    photos: [kickoffAction1, kickoffSlide, kickoffStage, kickoffAction2],
    purposeTopics: ['Why now', 'Who is Lakshmi', 'The Dating Culture Timeline'],
    quotes: [
      "The vibes were unmatched. I can't wait to see how this all unfolds over just one year.",
    ],
  },
  {
    slug: 'dating-detox',
    date: 'March 24, 2026',
    title: 'Dating Detox: A Brief History of Modern Dating',
    venue: 'Passages Wine + Books',
    cover: detoxSlide,
    photos: [detoxSlide, detox1, detoxMegan1, detoxMegan2],
    purpose:
      'A look at how we got here — the forces and structures you may not know about. When we understand, we can make better decisions.',
    quotes: [
      "I had NO idea that there was a 'history' of modern dating worth knowing about. This all makes so much more sense now.",
      "I like how these are not 'singles events' per se. They're interesting discussions about the experience of being single today. I brought my married best friend with me.",
    ],
  },
  {
    slug: 'dating-in-collapse',
    date: 'April 22, 2026',
    title: 'Dating in Collapse',
    venue: 'SHFT Behavioral Health',
    cover: collapse1,
    photos: [collapse1, collapse2, collapse3, collapse4],
    purpose:
      "What's the point of dating when it feels like the world is falling apart? For many, the decision to date or not is not technical, it's existential.",
    quotes: [
      'I deeply resonated with the talk and wanted to say thank you — the dots you connected make me want to keep my heart open.',
    ],
  },
];

const upcomingEvents = [
  {
    month: 'June',
    title: 'The New Era of Dating',
    venue: 'BIAN Social Club',
    status: 'Members only',
  },
  {
    month: 'July',
    title: 'Invitation only event',
    venue: 'SHFT Behavioral Health',
    status: 'Stay tuned',
  },
  {
    month: 'August',
    title: 'Six-Month Project Check-in',
    venue: 'Working From at The Hoxton',
    status: '',
  },
];

const PRIORITY_IDS = [
  'kickoff-presentation',
  'dating-detox-talk',
  'humans-happy-hour',
  'midlife-dating-talk',
  'dating-in-collapse',
  'explore-more-placeholder',
];

const PastEventCard = ({ event }: { event: PastEvent }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="group text-left w-full block">
        <div className="aspect-video overflow-hidden bg-muted mb-4">
          <img
            src={event.cover}
            alt={`${event.title} cover`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          {event.date}
        </p>
        <h3 className="font-display text-xl md:text-2xl leading-tight group-hover:underline underline-offset-4">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 italic">
          Click for the case study →
        </p>
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl bg-background border-border max-h-[92vh] overflow-y-auto">
      <DialogTitle className="font-display text-3xl md:text-4xl leading-tight pr-8">
        {event.title}
      </DialogTitle>
      <DialogDescription className="text-xs uppercase tracking-widest text-muted-foreground">
        {event.date} · {event.venue}
      </DialogDescription>

      {/* Photo carousel */}
      <div className="mt-2">
        <Carousel opts={{ align: 'start', loop: false }} className="w-full">
          <CarouselContent>
            {event.photos.map((p, i) => (
              <CarouselItem key={i}>
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={p}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {event.photos.length > 1 && (
            <div className="flex justify-end gap-2 mt-3">
              <CarouselPrevious
                className="static translate-y-0 h-9 w-9 bg-transparent border-foreground/30 text-foreground hover:bg-transparent hover:border-foreground"
                variant="outline"
              />
              <CarouselNext
                className="static translate-y-0 h-9 w-9 bg-transparent border-foreground/30 text-foreground hover:bg-transparent hover:border-foreground"
                variant="outline"
              />
            </div>
          )}
        </Carousel>
      </div>

      {/* Purpose */}
      <div className="mt-6">
        <p className="eyebrow mb-3">Purpose</p>
        {event.purposeTopics ? (
          <ul className="space-y-2 text-base md:text-lg leading-relaxed text-foreground/85">
            {event.purposeTopics.map((t) => (
              <li key={t} className="flex gap-3">
                <span style={{ color: 'hsl(var(--coral))' }} className="shrink-0">·</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-base md:text-lg leading-relaxed text-foreground/85">
            {event.purpose}
          </p>
        )}
      </div>

      {/* Quotes */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="eyebrow mb-4">What we heard</p>
        <div className="space-y-5">
          {event.quotes.map((q, i) => (
            <blockquote
              key={i}
              className="font-display italic text-xl md:text-2xl leading-snug text-foreground"
            >
              &ldquo;{q}&rdquo;
            </blockquote>
          ))}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const Events = () => {
  const gaugingEvents = events
    .filter((e) => !PRIORITY_IDS.includes(e.id))
    .sort((a, b) => a.month - b.month);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6">Events</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
          What we&rsquo;ve done. What&rsquo;s <em>coming</em>.
        </h1>
      </section>

      {/* Past Events */}
      <section
        id="past"
        className="max-w-6xl mx-auto px-6 pb-16 md:pb-24 scroll-mt-20"
      >
        <p className="eyebrow mb-3">Past Events</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-10 max-w-3xl">
          Three events in.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pastEvents.map((ev) => (
            <PastEventCard key={ev.slug} event={ev} />
          ))}
        </div>
      </section>

      {/* Up Next */}
      <section
        id="up-next"
        className="border-t border-border max-w-6xl mx-auto px-6 py-16 md:py-24 scroll-mt-20"
      >
        <p className="eyebrow mb-3">Up Next</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-10 max-w-3xl">
          Three more coming this summer.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {upcomingEvents.map((ev) => (
            <div
              key={ev.month}
              className="border-t-2 border-foreground/20 pt-5"
            >
              <p
                className="font-display text-3xl md:text-4xl mb-3"
                style={{ color: 'hsl(var(--coral))' }}
              >
                {ev.month}
              </p>
              <h3 className="font-display text-xl md:text-2xl leading-snug mb-2">
                {ev.title}
              </h3>
              <p className="text-sm text-foreground/70 mb-3">{ev.venue}</p>
              {ev.status && (
                <p className="text-xs uppercase tracking-widest text-muted-foreground italic">
                  {ev.status}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Vote on what's next */}
      <section
        id="vote"
        className="border-t border-border max-w-6xl mx-auto px-6 py-16 md:py-24 scroll-mt-20"
      >
        <p className="eyebrow mb-3">Vote on what&rsquo;s next</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-5 max-w-3xl">
          Help shape the second half of the year.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mb-12">
          A few event ideas we&rsquo;re exploring. Click the ones that interest
          you — and the ones that get traction we&rsquo;ll build out.
        </p>
        <GaugingInterest events={gaugingEvents} showInterest={true} />
      </section>

      {/* Submit your own idea */}
      <IdeaSubmission />

      {/* Partner with us */}
      <PartnerCTA />
    </div>
  );
};

export default Events;
