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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative w-80 flex-shrink-0 ${event.completed ? 'opacity-90' : ''}`}
    >

      <div className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
        event.completed
          ? 'bg-[hsl(var(--event-kickoff)/0.08)] border-[hsl(var(--event-kickoff)/0.3)]'
          : 'bg-card border-border'
      }`}>
        {/* Type badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white ${eventTypeColors[event.type]}`}
            >
              {eventTypeLabels[event.type]}
              {event.recurring && (
                <span className="ml-1.5 opacity-80">· Recurring</span>
              )}
            </span>
            {event.completed && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide bg-[hsl(var(--event-workshop)/0.15)] text-[hsl(var(--event-workshop))]">
                ✓ Completed
              </span>
            )}
            {event.singlesOnly && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary))]">
                Singles Only
              </span>
            )}
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {event.date || event.timeframe}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-1 leading-tight">
          {event.title.split(':').map((part, i) => (
            <span key={i}>
              {part}
              {i < event.title.split(':').length - 1 && (
                <span className="text-[hsl(var(--orange-glow))]">:</span>
              )}
            </span>
          ))}
        </h3>
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
        {!event.completed && (
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            {showInterest && !event.completed && (
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
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;
