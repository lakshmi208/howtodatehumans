import { useState } from 'react';
import { Loader2, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  prompt: string;
  image?: string;
  imageAlt?: string;
};

const ListeningSessionCard = ({ slug, eyebrow, title, description, prompt, image, imageAlt }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [err, setErr] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !answer.trim()) return;
    setStatus('loading');
    setErr('');
    const { error } = await supabase.from('form_submissions').insert({
      form_type: `listening-session:${slug}`,
      subject: `Listening session interest — ${title}`,
      fields: { Name: name || '(no name)', Email: email, Prompt: prompt, Answer: answer },
    });
    if (error) {
      setStatus('error');
      setErr(error.message);
      return;
    }
    setStatus('success');
  };

  return (
    <article className="py-12 border-t border-border">
      <div className="flex items-center gap-4 mb-4">
        {image && (
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-muted">
            <img
              src={image}
              alt={imageAlt ?? ''}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">{title}</h3>
      <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl mb-8">
        {description}
      </p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 text-foreground font-medium">
          <Check className="w-5 h-5" />
          <span>
            Thanks. If your perspective fits a session, we'll be in touch personally.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
          <p className="font-display italic text-xl md:text-2xl leading-snug" style={{ color: 'hsl(var(--coral))' }}>
            "{prompt}"
          </p>
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer — a sentence or two is plenty"
            rows={3}
            maxLength={1500}
            required
            className="bg-background border-border"
          />
          <div className="grid sm:grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background border-border"
            />
            <Input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-pill"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending
                </>
              ) : (
                'Raise your hand'
              )}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Sessions are intentionally small. We'll only reach out if your perspective fits.
            </p>
          </div>
          {status === 'error' && (
            <p className="text-sm text-destructive">{err}</p>
          )}
        </form>
      )}
    </article>
  );
};

export default ListeningSessionCard;
