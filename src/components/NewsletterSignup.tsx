import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FORM_ID = import.meta.env.VITE_CONVERTKIT_FORM_ID as string | undefined;

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  className?: string;
};

const NewsletterSignup = ({
  eyebrow = 'Dating in Collapse',
  title = 'A newsletter on what happened to connection — and how to get it back.',
  description = 'Essays, dispatches from the year-long Chicago experiment, and occasional event invites. No spam.',
  buttonLabel = 'Join the movement',
  className = '',
}: Props) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORM_ID) {
      setStatus('error');
      setErrorMsg('Newsletter is not configured yet — check back soon.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    try {
      const formData = new FormData();
      formData.append('email_address', email);

      const res = await fetch(`https://app.kit.com/forms/${FORM_ID}/subscriptions`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Try again.');
    }
  };

  return (
    <section
      id="newsletter"
      className={`max-w-3xl mx-auto px-6 py-16 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-xs font-bold uppercase tracking-widest mb-4">
          <Mail className="w-3.5 h-3.5" />
          {eyebrow}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">{title}</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">{description}</p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-[hsl(var(--primary))] font-semibold">
            <CheckCircle2 className="w-5 h-5" />
            <span>You're in. Check your inbox to confirm.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 h-12 text-base"
              aria-label="Email address"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === 'loading'}
              className="h-12 whitespace-nowrap"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Joining…
                </>
              ) : (
                buttonLabel
              )}
            </Button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-sm text-destructive mt-4">{errorMsg}</p>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSignup;
