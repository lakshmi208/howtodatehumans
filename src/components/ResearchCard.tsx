import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Mail, X } from 'lucide-react';
import { ResearchArea } from '@/data/research';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';

interface ResearchCardProps {
  area: ResearchArea;
  index: number;
  showInterest: boolean;
}

type CaptureMode = 'talk' | 'interested' | null;

const ResearchCard = ({ area, index, showInterest }: ResearchCardProps) => {
  const [captureMode, setCaptureMode] = useState<CaptureMode>(null);
  const [email, setEmail] = useState('');
  const [context, setContext] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    if (!email.trim()) return;

    const { error: insertError } = await supabase.from('form_submissions').insert({
      form_type: captureMode === 'talk' ? 'research-talk' : 'research-interest',
      subject: `${captureMode === 'talk' ? 'Wants to Talk' : 'Interested In'}: ${area.title}`,
      fields: {
        Email: email,
        'Research Area': area.title,
        'Research ID': area.id,
        'Interest Type': captureMode === 'talk' ? 'Will chat' : 'Wants updates',
        ...(captureMode === 'talk' && context.trim() ? { Context: context.trim() } : {}),
      },
    });

    if (insertError) {
      console.error('Failed to save research interest:', insertError);
      setSubmitError(true);
      return;
    }

    setSubmitted(true);
    setEmail('');
    setContext('');
    setTimeout(() => {
      setCaptureMode(null);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
    >
      {/* Badge */}
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-[hsl(var(--event-focus-group))] mb-3">
        Research Area
      </span>

      <h3 className="text-xl font-bold mb-1 leading-tight">{area.title}</h3>
      <p className="text-sm font-medium text-[hsl(var(--primary))] italic mb-3">
        {area.tagline}
      </p>

      <p className="text-sm leading-relaxed mb-3">{area.description}</p>

      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Why It Matters
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {area.whyItMatters}
        </p>
      </div>

      {/* Interest counts (admin only) */}
      {showInterest && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-4 text-xs text-muted-foreground mb-4"
        >
          <span>
            <strong>{area.interestCount}</strong> interested
          </span>
          <span>
            <strong>{area.talkCount}</strong> want to talk
          </span>
        </motion.div>
      )}

      {/* CTAs or email form */}
      {captureMode === null ? (
        <div className="flex flex-col sm:flex-row gap-2 border-t border-border pt-4">
          <Button
            size="sm"
            onClick={() => setCaptureMode('talk')}
            className="gap-1.5"
            variant="default"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            I'll chat with you
          </Button>
          <Button
            size="sm"
            onClick={() => setCaptureMode('interested')}
            className="gap-1.5"
            variant="outline"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Yes, please explore this!
          </Button>
        </div>
      ) : (
        <div className="border-t border-border pt-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">
            {captureMode === 'talk'
              ? "We'd love to hear from you. Tell us a bit about yourself and your experience — then drop your email so we can reach out."
              : "Great — leave your email and we'll keep you in the loop."}
          </p>
          {submitted ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-medium text-[hsl(var(--event-workshop))]"
            >
              You're on the list! ✓
            </motion.span>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              {captureMode === 'talk' && (
                <Textarea
                  placeholder="Tell us about yourself — your relationship history, what you've learned, what you'd want to talk about. The more context, the better."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="text-sm resize-none"
                  rows={4}
                  maxLength={2000}
                />
              )}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
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
                  onClick={() => { setCaptureMode(null); setContext(''); setSubmitError(false); }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {submitError && (
                <p className="text-xs text-destructive">Something went wrong — please try again.</p>
              )}
            </form>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ResearchCard;
