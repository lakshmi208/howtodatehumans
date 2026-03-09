import { useState } from 'react';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import TimelineHeader from '@/components/TimelineHeader';
import EventCard from '@/components/EventCard';
import DependencyArrow from '@/components/DependencyArrow';
import PartnerCTA from '@/components/PartnerCTA';
import AdminToggle from '@/components/AdminToggle';
import { events } from '@/data/events';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const Index = () => {
  const [showInterest, setShowInterest] = useState(false);

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
            <span>JAN 2026</span>
            <span className="text-[hsl(var(--primary))]">One Year. One Mission.</span>
            <span>DEC 2026</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '20%' }}
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

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-4 pb-20">
        {/* Central timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[hsl(var(--timeline-line))] -translate-x-1/2" />

        <div className="space-y-8 md:space-y-12">
          {sortedEvents.map((event, index) => {
            const showMonth = event.month !== lastMonth;
            lastMonth = event.month;
            const side = index % 2 === 0 ? 'left' : 'right';
            const dependsOnEvent = event.dependsOn
              ? events.find((e) => e.id === event.dependsOn)
              : null;

            return (
              <div key={event.id}>
                {/* Month marker */}
                {showMonth && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-6"
                  >
                    <div className="relative z-10 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-1.5 rounded-full text-sm font-bold tracking-wider">
                      {months[event.month - 1]} 2026
                    </div>
                  </motion.div>
                )}

                {/* Dependency arrow */}
                {dependsOnEvent && (
                  <DependencyArrow
                    fromTitle={dependsOnEvent.title}
                    toTitle={event.title}
                  />
                )}

                <EventCard
                  event={event}
                  showInterest={showInterest}
                  index={index}
                  side={side}
                />
              </div>
            );
          })}
        </div>

        {/* Timeline end */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="bg-card border-2 border-[hsl(var(--primary))] px-8 py-4 rounded-xl text-center">
            <p className="text-xl font-bold mb-1">This is just the beginning.</p>
            <p className="text-sm text-muted-foreground">
              12 months. 7 formats. 1 goal: better human connection.
            </p>
          </div>
        </motion.div>
      </div>

      <PartnerCTA />
      <AdminToggle showInterest={showInterest} onToggle={setShowInterest} />
    </div>
  );
};

export default Index;
