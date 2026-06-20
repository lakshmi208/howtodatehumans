import { useState } from 'react';
import { Loader2, Check } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
import SiteNav from '@/components/SiteNav';
import YearProgress from '@/components/YearProgress';
import ListeningSessionCard from '@/components/ListeningSessionCard';
import GaugingInterest from '@/components/GaugingInterest';
import IdeaSubmission from '@/components/IdeaSubmission';
import PartnerCTA from '@/components/PartnerCTA';
import { supabase } from '@/integrations/supabase/client';
import { events } from '@/data/events';

// Past event photos (this-year project)
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

// Listening session photos (research)
import discussionPhoto from '@/assets/photos/discussion.jpg';
import genzPhoto from '@/assets/photos/genz.jpg';
import matchmakerPhoto from '@/assets/photos/matchmaker_coaches.jpg';
import reenteringPhoto from '@/assets/photos/reenterdating.jpg';

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

      <div className="mt-2">
        <Carousel opts={{ align: 'start', loop: false }} className="w-full">
          <CarouselContent>
            {event.photos.map((p, i) => (
              <CarouselItem key={i}>
                <div className="aspect-video overflow-hidden bg-muted">
                  <img src={p} alt="" className="w-full h-full object-cover" />
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

  // Originals "Coming this fall" waitlist
  const [fallEmail, setFallEmail] = useState('');
  const [fallStatus, setFallStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submitFall = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fallEmail.trim()) return;
    setFallStatus('loading');
    const { error } = await supabase.from('form_submissions').insert({
      form_type: 'originals-waitlist',
      subject: 'Originals waitlist signup',
      fields: { Email: fallEmail },
    });
    setFallStatus(error ? 'error' : 'success');
    if (!error) setFallEmail('');
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero with timeline + section anchors */}
      <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-8 text-center">Events</p>
        <div className="mb-10 md:mb-14">
          <YearProgress />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#past" className="btn-pill-outline">What we&rsquo;ve done</a>
          <a href="#up-next" className="btn-pill-outline">What&rsquo;s coming</a>
          <a href="#listening" className="btn-pill-outline">What we&rsquo;re listening for</a>
        </div>
      </section>

      {/* Past Events — this year's project */}
      <section id="past" className="max-w-6xl mx-auto px-6 pb-16 md:pb-24 scroll-mt-20">
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

      {/* What we're listening for — folded from /research */}
      <section
        id="listening"
        className="border-t border-border max-w-4xl mx-auto px-6 py-16 md:py-24 scroll-mt-20"
      >
        <div className="flex items-center gap-6 mb-7">
          <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-muted">
            <img
              src={discussionPhoto}
              alt="People talking around a table"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="eyebrow">What we&rsquo;re listening for</p>
        </div>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6 max-w-3xl">
          The commercial success of dating apps is masking what&rsquo;s actually
          happening to the rest of the <em>ecosystem</em>.
        </h2>
        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mb-10">
          Three groups we want to hear from. Raise your hand below. If your perspective
          fits a session, we&rsquo;ll be in touch personally — sessions are intentionally
          small.
        </p>

        <ListeningSessionCard
          slug="gen-z"
          eyebrow="Gen Z"
          title="What you'd never download — and why"
          description="If you're under 25 and find yourself opting out of dating apps — or going on them and feeling worse for it — we want to understand why. Not to convince you back on. To document what your generation noticed first."
          prompt="What's the moment you stopped wanting to be on apps?"
          image={genzPhoto}
          imageAlt="A finger over a delete key"
        />

        <ListeningSessionCard
          slug="coaches-and-matchmakers"
          eyebrow="Hiring a coach or matchmaker"
          title="What actually happened when you hired one"
          description="The industry is largely unregulated. People spend thousands with no shared way to compare what worked, what didn't, what was a scam, what crossed a line — and what was actually good. We're documenting both. Maybe especially the good, since the loudest stories are the bad ones."
          prompt="What's the part of your experience you've never told anyone outside your closest friends?"
          image={matchmakerPhoto}
          imageAlt="A hand signing a contract"
        />

        <ListeningSessionCard
          slug="reentering-daters"
          eyebrow="Reentering daters"
          title="You remember when this worked differently."
          description="If you got married before dating apps and you're back in the field now, you have data nobody else does. You're the only people who can compare what dating felt like in 1995, 2005, 2015 — and what it's like to try now. We're listening for what you noticed change."
          prompt="Compare your first date in your earlier dating era to your last one. What's different?"
          image={reenteringPhoto}
          imageAlt="Back of a man in flannel looking out"
        />
      </section>

      {/* Featured pull-quote (Gen Z) — folded from /research */}
      <section className="relative w-full bg-foreground py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="eyebrow mb-6"
            style={{ color: 'rgba(247, 244, 246, 0.7)' }}
          >
            What we&rsquo;ve already heard
          </p>
          <blockquote
            className="font-display text-2xl md:text-4xl lg:text-5xl leading-[1.18] mb-6"
            style={{ color: 'hsl(var(--background))' }}
          >
            &ldquo;It&rsquo;s not just that I don&rsquo;t want to be on a dating app.{' '}
            <em>I&rsquo;m actually concerned that being on a dating app will harm my
              heart&rsquo;s ability to connect.</em>&rdquo;
          </blockquote>
          <p
            className="text-sm tracking-wider uppercase"
            style={{ color: 'rgba(247, 244, 246, 0.7)' }}
          >
            — A Gen Z respondent
          </p>
        </div>
      </section>

      {/* Up Next — next 3 months */}
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

      {/* Coming this Fall — Originals waitlist (folded from /originals) */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p
            className="eyebrow mb-6"
            style={{ color: 'rgba(247, 244, 246, 0.7)' }}
          >
            Coming this fall
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] mb-6">
            Three new Originals, currently in development.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: 'rgba(247, 244, 246, 0.85)' }}
          >
            Limited size. By application. The first wave drops in September. We&rsquo;ll
            let you know when applications open.
          </p>

          {fallStatus === 'success' ? (
            <div className="flex items-center gap-2 font-medium">
              <Check className="w-5 h-5" />
              You&rsquo;re on the list.
            </div>
          ) : (
            <form onSubmit={submitFall} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Email"
                required
                value={fallEmail}
                onChange={(e) => setFallEmail(e.target.value)}
                className="bg-background/10 border-background/30 text-background placeholder:text-background/60 h-12"
              />
              <button
                type="submit"
                disabled={fallStatus === 'loading'}
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                {fallStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  'Notify me'
                )}
              </button>
            </form>
          )}
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

      <IdeaSubmission />
      <PartnerCTA />
    </div>
  );
};

export default Events;
