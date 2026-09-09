import { useState } from 'react';
import { z } from 'zod';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

type Props = {
  compact?: boolean;
  className?: string;
};

const webinarSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(80, 'First name is too long'),
  age: z.coerce
    .number({ invalid_type_error: 'Please enter a valid age' })
    .int('Please enter a whole number')
    .min(18, 'Age must be at least 18')
    .max(99, 'Age must be 99 or younger'),
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email').max(255),
  website: z.string().max(0, 'Spam detected').optional(),
});

const KIT_FORM_ID = (import.meta.env.VITE_CONVERTKIT_FORM_ID as string | undefined) || '41f402da5e';

const WebinarSignup = ({ compact = false, className = '' }: Props) => {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    setFieldErrors({});

    const parse = webinarSchema.safeParse({ firstName, age, email, website });
    if (!parse.success) {
      const errors: Record<string, string> = {};
      parse.error.errors.forEach((err) => {
        errors[err.path[0] as string] = err.message;
      });
      setFieldErrors(errors);
      setStatus('idle');
      return;
    }

    const { firstName: name, age: ageNum, email: emailAddress } = parse.data;

    const { error: insertError } = await supabase.from('form_submissions').insert({
      form_type: 'webinar:dating-essentials-gen-x',
      subject: 'Webinar interest — Dating Essentials for Gen X',
      fields: { Name: name, Age: ageNum, Email: emailAddress },
    });

    if (insertError) {
      setStatus('error');
      setErrorMsg('Could not save your info. Please try again.');
      return;
    }

    // Kit is best-effort; don't block success if it fails.
    try {
      const formData = new FormData();
      formData.append('email_address', emailAddress);
      formData.append('first_name', name);
      formData.append('fields[age]', String(ageNum));
      await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
        method: 'POST',
        body: formData,
      });
    } catch {
      // ignore
    }

    setStatus('success');
    setFirstName('');
    setAge('');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div className={`${className}`}>
        <div className="flex items-center justify-center gap-2 text-foreground font-medium">
          <CheckCircle2 className="w-5 h-5" style={{ color: 'hsl(var(--coral))' }} />
          <span>You're on the list. I'll be in touch.</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <div className={`grid gap-3 ${compact ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
        <Input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={status === 'loading'}
          className="h-12 text-base"
          aria-label="First name"
          autoComplete="given-name"
          aria-invalid={!!fieldErrors.firstName}
        />
        <Input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          disabled={status === 'loading'}
          className="h-12 text-base"
          aria-label="Age"
          min={18}
          max={99}
          aria-invalid={!!fieldErrors.age}
        />
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="h-12 text-base"
          aria-label="Email address"
          autoComplete="email"
          aria-invalid={!!fieldErrors.email}
        />
      </div>

      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === 'loading'}
        className="w-full sm:w-auto h-12 whitespace-nowrap"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Saving…
          </>
        ) : (
          'Let me know!'
        )}
      </Button>

      {(Object.keys(fieldErrors).length > 0 || errorMsg) && (
        <div className="text-sm text-destructive space-y-1">
          {Object.values(fieldErrors).map((msg, i) => (
            <p key={i}>{msg}</p>
          ))}
          {errorMsg && <p>{errorMsg}</p>}
        </div>
      )}
    </form>
  );
};

export default WebinarSignup;
