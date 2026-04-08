import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Mail, X, Share2, ChevronRight } from 'lucide-react';
import { EventConcept, eventTypeLabels, eventTypeColors } from '@/data/events';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

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

  const isDatingDetoxEvent = false; // No longer active — event completed
  const isCompletedEvent = event.completed || event.id === 'dating-detox-talk';
  const datingDetoxTicketUrl = '';

  const handleSubmitInterest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      const { error: insertError } = await supabase.from('form_submissions').insert({
        form_type: 'event-interest',
        subject: `Interest: ${event.title}`,
        fields: { Email: email, Event: event.title, Tagline: event.tagline },
      });

      if (insertError) {
        console.error('Failed to save interest:', insertError);
        return;
      }
      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setShowEmailForm(false);
        setSubmitted(false);
      }, 2000);
    }
  };

  const handleShareToFriend = () => {
    const shareText = `Check out "${event.title}" — ${event.tagline}\n\n${window.location.href}`;

    if (navigator.share) {
      navigator.share({ title: event.title, text: `Thought you'd be interested in this?`, url: window.location.href });
    } else {
      const mailtoLink = `mailto:?subject=${encodeURIComponent(`Thought you'd be interested in this?`)}&body=${encodeURIComponent(shareText)}`;
      window.open(mailtoLink);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative w-80 flex-shrink-0 ${isCompletedEvent ? 'opacity-90' : ''}`}
    >
      <div className={`border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
        isCompletedEvent
          ? 'bg-[hsl(var(--event-kickoff)/0.08)] border-[hsl(var(--event-kickoff)/0.3)]'
          : isDatingDetoxEvent
            ? 'bg-[hsl(var(--primary)/0.07)] border-[hsl(var(--primary)/0.28)]'
            : 'bg-card border-border'
      }`}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 pb-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-[hsl(var(--primary-foreground))] ${eventTypeColors[event.type]}`}
              >
                {eventTypeLabels[event.type]}
                {event.recurring && <span className="ml-1.5 opacity-80">· Recurring</span>}
              </span>
              {isDatingDetoxEvent && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide bg-[hsl(var(--primary)/0.14)] text-[hsl(var(--primary))]">
                  Up Next
                </span>
              )}
              {isCompletedEvent && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide bg-[hsl(var(--event-workshop)/0.15)] text-[hsl(var(--event-workshop))]">
                  ✓ Completed
                </span>
              )}
              {event.comingSoon && !isCompletedEvent && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide bg-[hsl(var(--primary)/0.14)] text-[hsl(var(--primary))]">
                  Coming Soon
                </span>
              )}
              {event.singlesOnly && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary))]">
                  Singles Only
                </span>
              )}
            </div>
            <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${expanded ? 'rotate-90' : ''}`} />
          </div>

          <h3 className="text-xl font-bold mb-1 leading-tight">{event.title}</h3>
          <p className="text-sm font-medium text-[hsl(var(--primary))] italic">{event.tagline}</p>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-2 block">
            {event.date || event.timeframe}
          </span>
          <span className="text-xs text-muted-foreground mt-2 block">Click to see full event description</span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
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

                <p className="text-sm leading-relaxed text-muted-foreground mb-4">{event.description}</p>

                {!isCompletedEvent && (
                  <div className="flex flex-col gap-2 border-t border-border pt-4">
                    {showInterest && (
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-1">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">{event.interestCount}</span>
                        <span>interested</span>
                      </div>
                    )}

                    {!showEmailForm ? (
                      isDatingDetoxEvent ? (
                        <Button size="sm" asChild className="gap-1.5 w-full">
                          <a href={datingDetoxTicketUrl} target="_blank" rel="noopener noreferrer">
                            <Mail className="w-3.5 h-3.5" />
                            Get Your Ticket
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => setShowEmailForm(true)}
                          className="gap-1.5 w-full"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          I'm Interested
                        </Button>
                      )
                    ) : (
                      <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                              className="h-8 text-sm"
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

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleShareToFriend}
                      className="gap-1.5 w-full"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      Send to a Friend
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default EventCard;
