import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import TimelineHeader from '@/components/TimelineHeader';
import EventCard from '@/components/EventCard';
import PartnerCTA from '@/components/PartnerCTA';
import AdminToggle from '@/components/AdminToggle';
import IdeaSubmission from '@/components/IdeaSubmission';
import PhotoGallery from '@/components/PhotoGallery';
import GaugingInterest from '@/components/GaugingInterest';
import YearProgress from '@/components/YearProgress';
import { Button } from '@/components/ui/button';
import { events, EventType, eventTypeLabels } from '@/data/events';

const calendarMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const PRIORITY_IDS = ['kickoff-presentation', 'dating-detox-talk', 'humans-happy-hour', 'midlife-dating-talk', 'dating-in-collapse', 'explore-more-placeholder'];

const Events = () => {
  const [showInterest, setShowInterest] = useState(false);
  const [activeFilter, setActiveFilter] = useState<EventType | 'all'>('all');

  const priorityEvents = events.filter((e) => PRIORITY_IDS.includes(e.id));
  const gaugingEvents = events.filter((e) => !PRIORITY_IDS.includes(e.id));

  const sortedEvents = [...priorityEvents]
    .sort((a, b) => a.month - b.month)
    .filter((e) => activeFilter === 'all' || e.type === activeFilter);

  const filteredGaugingEvents = gaugingEvents
    .sort((a, b) => a.month - b.month)
    .filter((e) => activeFilter === 'all' || e.type === activeFilter);

  let lastMonth = -1;

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <TimelineHeader />

      <div className="mb-12">
        <YearProgress />
      </div>

      {/* Featured Event Banner */}
      {(() => {
        const featured = events.find(e => e.upNext && e.ticketUrl);
        if (!featured) return null;
        return (
          <div className="max-w-4xl mx-auto px-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border-2 border-[hsl(var(--primary))] bg-gradient-to-br from-[hsl(var(--primary)/0.08)] to-[hsl(var(--primary)/0.02)] p-6 md:p-8 shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(var(--primary)/0.06)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] mb-3">
                    UP NEXT — TICKETS LIVE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">{featured.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground italic mb-1">{featured.tagline}</p>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {featured.date || featured.timeframe}
                  </p>
                </div>
                <Button size="lg" asChild className="gap-2 whitespace-nowrap self-start md:self-center">
                  <a href={featured.ticketUrl} target="_blank" rel="noopener noreferrer">
                    Get Your Ticket
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        );
      })()}

      {/* Filter */}
      <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto px-4 mb-8">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
            activeFilter === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          All Events
        </button>
        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value as EventType | 'all')}
          className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border-none outline-none cursor-pointer"
        >
          <option value="all">Filter by Type</option>
          {(Object.keys(eventTypeLabels) as EventType[]).map((type) => (
            <option key={type} value={type}>{eventTypeLabels[type]}</option>
          ))}
        </select>
      </div>

      {/* Timeline — priority events only */}
      <div className="relative pb-20">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-[hsl(var(--timeline-line))]" />
        <div className="md:hidden absolute top-0 bottom-0 left-8 w-[2px] bg-[hsl(var(--timeline-line))]" />

        {/* Desktop: horizontal scroll */}
        <div className="hidden md:block overflow-x-auto scrollbar-thin pb-6">
          <div className="flex gap-6 px-6 md:px-12 pt-14 min-w-max">
            {sortedEvents.map((event, index) => {
              const showMonth = event.month !== lastMonth;
              lastMonth = event.month;

              return (
                <div key={event.id} className="flex-shrink-0 flex flex-col items-center">
                  {showMonth && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="mb-2"
                    >
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-1 rounded-full text-xs font-bold tracking-wider whitespace-nowrap">
                        {calendarMonths[event.month - 1]} 2026
                      </div>
                    </motion.div>
                  )}

                  {event.id === 'explore-more-placeholder' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-80 border-2 border-dashed border-[hsl(var(--primary)/0.4)] rounded-xl p-6 text-center bg-card"
                    >
                      <p className="text-lg font-bold mb-2">What's next?</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Explore research areas and event concepts in development below.
                      </p>
                      <button
                        onClick={() => document.getElementById('gauging-interest')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-sm font-semibold text-[hsl(var(--primary))] hover:underline"
                      >
                        See what's in the works ↓
                      </button>
                    </motion.div>
                  ) : (
                    <EventCard
                      event={event}
                      showInterest={showInterest}
                      index={index}
                      side="left"
                    />
                  )}
                </div>
              );
            })}

            <div className="flex-shrink-0 flex items-start pt-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-card border-2 border-[hsl(var(--primary))] px-6 py-4 rounded-xl text-center w-72">
                  <p className="text-lg font-bold mb-1">This is just the beginning.</p>
                  <p className="text-sm text-muted-foreground">
                    12 months. 7 formats. 1 goal: better human connection.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile: vertical scroll */}
        <div className="md:hidden flex flex-col gap-6 px-4 pl-16 pt-4">
          {(() => { lastMonth = -1; return null; })()}
          {sortedEvents.map((event, index) => {
            const showMonth = event.month !== lastMonth;
            lastMonth = event.month;

            return (
              <div key={event.id} className="relative">
                <div className="absolute -left-[2.35rem] top-4 w-3 h-3 rounded-full bg-[hsl(var(--primary))] border-2 border-background" />

                {showMonth && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-2"
                  >
                    <span className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-3 py-0.5 rounded-full text-xs font-bold tracking-wider">
                      {calendarMonths[event.month - 1]} 2026
                    </span>
                  </motion.div>
                )}

                {event.id === 'explore-more-placeholder' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-2 border-dashed border-[hsl(var(--primary)/0.4)] rounded-xl p-6 text-center bg-card"
                  >
                    <p className="text-lg font-bold mb-2">What's next?</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Explore research areas and event concepts in development below.
                    </p>
                    <button
                      onClick={() => document.getElementById('gauging-interest')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm font-semibold text-[hsl(var(--primary))] hover:underline"
                    >
                      See what's in the works ↓
                    </button>
                  </motion.div>
                ) : (
                  <EventCard
                    event={event}
                    showInterest={showInterest}
                    index={index}
                    side="left"
                  />
                )}
              </div>
            );
          })}

          <div className="relative">
            <div className="absolute -left-[2.35rem] top-4 w-3 h-3 rounded-full bg-[hsl(var(--primary))] border-2 border-background" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border-2 border-[hsl(var(--primary))] px-6 py-4 rounded-xl text-center">
                <p className="text-lg font-bold mb-1">This is just the beginning.</p>
                <p className="text-sm text-muted-foreground">
                  12 months. 7 formats. 1 goal: better human connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-4 px-6">
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
              <span>←</span> Scroll to explore the full timeline <span>→</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Click any event to see the full description
            </p>
          </div>
        </div>
      </div>

      <GaugingInterest events={filteredGaugingEvents} showInterest={showInterest} />
      <PhotoGallery />
      <IdeaSubmission />
      <PartnerCTA />
      <AdminToggle showInterest={showInterest} onToggle={setShowInterest} />
    </div>
  );
};

export default Events;
