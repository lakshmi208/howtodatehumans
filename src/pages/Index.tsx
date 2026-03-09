import { useState } from 'react';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import TimelineHeader from '@/components/TimelineHeader';
import EventCard from '@/components/EventCard';
import DependencyArrow from '@/components/DependencyArrow';
import PartnerCTA from '@/components/PartnerCTA';
import AdminToggle from '@/components/AdminToggle';
import ResearchSection from '@/components/ResearchSection';
import { events } from '@/data/events';

const months = [
  'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb',
];

const Index = () => {
  const [showInterest, setShowInterest] = useState(false);

  // Calculate timeline progress based on current date
  const timelineStart = new Date(2026, 1, 1); // Feb 1, 2026
  const timelineEnd = new Date(2027, 1, 28);  // Feb 28, 2027
  const now = new Date();
  const totalMs = timelineEnd.getTime() - timelineStart.getTime();
  const elapsedMs = Math.max(0, Math.min(now.getTime() - timelineStart.getTime(), totalMs));
  const progressPercent = `${Math.round((elapsedMs / totalMs) * 100)}%`;

  // Sort events by month
  const sortedEvents = [...events].sort((a, b) => a.month - b.month);

  // Group by month for timeline markers
  let lastMonth = -1;

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <TimelineHeader />

      {/* Urgency bar */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-2">
            <span>FEB 2026</span>
            <span className="text-[hsl(var(--primary))]">One Year. One Mission.</span>
            <span>FEB 2027</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: progressPercent }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--orange-glow))]"
            />
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--orange-glow))]"
            />
          </div>
          <div className="flex justify-between mt-1">
            {months.map((m) => (
              <span key={m} className="text-[10px] text-muted-foreground">{m}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative pb-20">
        {/* Horizontal timeline line */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-[hsl(var(--timeline-line))]" />

        <div className="overflow-x-auto scrollbar-thin pb-6">
          <div className="flex gap-6 px-6 md:px-12 pt-14 min-w-max">
            {sortedEvents.map((event, index) => {
              const showMonth = event.month !== lastMonth;
              lastMonth = event.month;
              const dependsOnEvent = event.dependsOn
                ? events.find((e) => e.id === event.dependsOn)
                : null;

              return (
                <div key={event.id} className="flex-shrink-0 flex flex-col items-center">
                  {/* Month marker above the timeline line */}
                  {showMonth && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute top-0"
                    >
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-1 rounded-full text-xs font-bold tracking-wider whitespace-nowrap">
                        {months[event.month - 1]} 2026
                      </div>
                    </motion.div>
                  )}

                  {/* Dependency label */}
                  {dependsOnEvent && (
                    <div className="text-[10px] text-muted-foreground mb-1 italic whitespace-nowrap">
                      ← Follows: {dependsOnEvent.title.slice(0, 25)}…
                    </div>
                  )}

                  <EventCard
                    event={event}
                    showInterest={showInterest}
                    index={index}
                    side="left"
                  />
                </div>
              );
            })}

            {/* Timeline end card */}
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

        {/* Scroll hint */}
        <div className="flex justify-center mt-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <span>←</span> Scroll to explore the full timeline <span>→</span>
          </p>
        </div>
      </div>

      <ResearchSection showInterest={showInterest} />
      <PartnerCTA />
      <AdminToggle showInterest={showInterest} onToggle={setShowInterest} />
    </div>
  );
};

export default Index;
