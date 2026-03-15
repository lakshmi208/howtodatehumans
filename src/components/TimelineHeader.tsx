import { motion } from 'framer-motion';
import stackedLogo from '@/assets/logo-horizontal.png';
import {
  Mic,
  Wrench,
  Calendar,
  Search,
  Flame,
  Wine,
  Rocket } from
'lucide-react';
import { EventType, eventTypeLabels } from '@/data/events';

const typeIcons: Record<EventType, React.ReactNode> = {
  'kickoff': <Rocket className="w-5 h-5" />,
  'talk': <Mic className="w-5 h-5" />,
  'workshop': <Wrench className="w-5 h-5" />,
  'event': <Calendar className="w-5 h-5" />,
  'focus-group': <Search className="w-5 h-5" />,
  'fireside': <Flame className="w-5 h-5" />,
  'happy-hour': <Wine className="w-5 h-5" />
};

const typeColorClasses: Record<EventType, string> = {
  'kickoff': 'text-[hsl(var(--event-kickoff))] bg-[hsl(var(--event-kickoff)/0.1)]',
  'talk': 'text-[hsl(var(--event-talk))] bg-[hsl(var(--event-talk)/0.1)]',
  'workshop': 'text-[hsl(var(--event-workshop))] bg-[hsl(var(--event-workshop)/0.1)]',
  'event': 'text-[hsl(var(--event-event))] bg-[hsl(var(--event-event)/0.1)]',
  'focus-group': 'text-[hsl(var(--event-focus-group))] bg-[hsl(var(--event-focus-group)/0.1)]',
  'fireside': 'text-[hsl(var(--event-fireside))] bg-[hsl(var(--event-fireside)/0.1)]',
  'happy-hour': 'text-[hsl(var(--event-happy-hour))] bg-[hsl(var(--event-happy-hour)/0.1)]'
};


const TimelineHeader = () => {
  const types = Object.keys(typeIcons) as EventType[];

  return (
    <section className="text-center py-16 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="shadow-md">
        
        <p className="font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-4 text-lg">
          A One-Year Mission to Change Dating Culture in Chicago
        </p>
        <img src={stackedLogo} alt="How to Date Humans" className="h-32 md:h-48 lg:h-56 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          Dating culture didn't break overnight — and it won't heal overnight either. 
          This is a year-long effort to understand what happened, reclaim what we lost, and build what comes next.
        </p>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10">
          Each concept below is a piece of the puzzle. Show your interest to help us bring it to life 
          — and show venues and sponsors that Chicago wants this.
        </p>
      </motion.div>

      {/* Event type legend */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        
        {types.map((type) =>
        <div
          key={type}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${typeColorClasses[type]}`}>
          
            {typeIcons[type]}
            <span>{eventTypeLabels[type]}</span>
          </div>
        )}
      </motion.div>
    </section>);

};

export default TimelineHeader;