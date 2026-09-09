import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = {
  eyebrow?: string;
  title?: string;
  description?: React.ReactNode;
  buttonLabel?: string;
  className?: string;
  /** Kit form ID to submit to. Defaults to VITE_CONVERTKIT_FORM_ID (the general newsletter). */
  formId?: string;
};

const NewsletterSignup = ({
  eyebrow = 'Dating in Collapse',
  title = 'A newsletter on what happened to connection — and how to get it back.',
  description = 'Essays, dispatches from the year-long Chicago experiment, and occasional event invites. No spam.',
  buttonLabel = 'Join the movement',
  className = '',
  formId = (import.meta.env.VITE_CONVERTKIT_FORM_ID as string | undefined) || '41f402da5e',
}: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formId) {
      setStatus('error');
      setErrorMsg('Newsletter is not configured yet — check back soon.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    try {
      const formData = new FormData();
      formData.append('email_address', email);
      if (firstName) formData.append('first_name', firstName);
      if (lastName) formData.append('fields[last_name]', lastName);

      const res = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Try again.');
    }
  };

  return (
    <section
      id="newsletter"
      className={`max-w-3xl mx-auto px-6 py-12 md:py-16 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card border border-border rounded-2xl p-6 md:p-10 text-center"
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
            className="flex flex-col gap-3 max-w-md mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                type="text"
                required
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={status === 'loading'}
                className="h-12 text-base"
                aria-label="First name"
                autoComplete="given-name"
              />
              <Input
                type="text"
                required
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={status === 'loading'}
                className="h-12 text-base"
                aria-label="Last name"
                autoComplete="family-name"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="flex-1 h-12 text-base"
                aria-label="Email address"
                autoComplete="email"
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
            </div>
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
