import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Mail, X } from 'lucide-react';
import { EventConcept, eventTypeLabels, eventTypeColors } from '@/data/events';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EventCardProps {
  event: EventConcept;
  showInterest: boolean;
  index: number;
  side: 'left' | 'right';
}

const EventCard = ({ event, showInterest, index, side }: EventCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setShowEmailForm(false);
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative w-full md:w-[calc(50%-2rem)] ${
        side === 'left' ? 'md:mr-auto' : 'md:ml-auto'
      }`}
    >
      {/* Connector dot on timeline */}
      <div
        className={`hidden md:block absolute top-8 w-4 h-4 rounded-full border-[3px] border-[hsl(var(--primary))] bg-background z-10 ${
          side === 'left' ? '-right-[2.5rem]' : '-left-[2.5rem]'
        }`}
      />

      {/* Connector line to timeline */}
      <div
        className={`hidden md:block absolute top-[1.05rem] h-[3px] w-8 bg-[hsl(var(--timeline-line))] ${
          side === 'left' ? '-right-8' : '-left-8'
        }`}
      />

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        {/* Type badge */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white ${eventTypeColors[event.type]}`}
          >
            {eventTypeLabels[event.type]}
            {event.recurring && (
              <span className="ml-1.5 opacity-80">· Recurring</span>
            )}
          </span>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {event.timeframe}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-1 leading-tight">{event.title}</h3>
        <p className="text-sm font-medium text-[hsl(var(--primary))] italic mb-3">
          {event.tagline}
        </p>

        {/* Problem / Solution */}
        <div className="space-y-3 mb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              The Problem
            </p>
            <p className="text-sm leading-relaxed">{event.problem}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              Our Approach
            </p>
            <p className="text-sm leading-relaxed">{event.solution}</p>
          </div>
        </div>

        {/* Expandable description */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-4"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {event.description}
            </p>
          </motion.div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-semibold text-[hsl(var(--primary))] hover:underline mb-4 flex items-center gap-1"
        >
          {expanded ? 'Show less' : 'Read more'}
          <ArrowRight className={`w-3 h-3 transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </button>

        {/* Interest + CTA */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            {showInterest && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <Users className="w-4 h-4" />
                <span className="font-semibold">{event.interestCount}</span>
                <span className="hidden sm:inline">interested</span>
              </motion.div>
            )}
          </div>

          {!showEmailForm ? (
            <Button
              size="sm"
              onClick={() => setShowEmailForm(true)}
              className="gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              I'm Interested
            </Button>
          ) : (
            <motion.form
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              onSubmit={handleSubmitInterest}
              className="flex items-center gap-2"
            >
              {submitted ? (
                <span className="text-sm font-medium text-[hsl(var(--event-workshop))]">
                  You're on the list! ✓
                </span>
              ) : (
                <>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-8 w-44 text-sm"
                    required
                  />
                  <Button size="sm" type="submit" className="h-8">
                    Go
                  </Button>
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              )}
            </motion.form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
