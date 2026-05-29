import { useState } from 'react';
import { Loader2, Check } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';

import meetMyFriend from '@/assets/originals/meet-my-amazing-friend.jpg';
import redBrownLine from '@/assets/originals/red-brown-line.jpg';
import slowDating from '@/assets/originals/slow-dating.jpg';
import quarterlife from '@/assets/originals/quarterlife.jpg';
import marketFresh from '@/assets/originals/market-fresh-40-plus.jpg';

type Original = {
  image: string;
  year: string;
  title: string;
  description: string;
};

const originals: Original[] = [
  {
    image: meetMyFriend,
    year: '2014',
    title: 'Meet My Amazing Friend Night',
    description:
      'The original "Pitch My Friend" format. The insight: we toast our friends at weddings and funerals — exactly when they\'re no longer on the market. Let\'s flip that. Hundreds of pitches later, the format spread. The next version is in development.',
  },
  {
    image: redBrownLine,
    year: '2012',
    title: 'Red Line / Brown Line',
    description:
      "A logistics experiment dressed as a singles event. We gathered busy singles who lived on Chicago's two transit lines with the most transfer points — the city's highest-density crossroads for actual encounter — and made it ridiculous not to meet someone.",
  },
  {
    image: slowDating,
    year: '2014',
    title: 'Slow Dating',
    description:
      'Built on original research about how connection actually accelerates. The result: a first date that felt like a fourth — without the optimization theater that makes most first dates unbearable.',
  },
  {
    image: quarterlife,
    year: '2012',
    title: 'Tales from the Quarterlife',
    description:
      "An evening for 20-somethings who'd figured out they hadn't figured anything out — and were ready to say it out loud. Half talk, half group exhale, zero pressure to have a plan.",
  },
  {
    image: marketFresh,
    year: '2013',
    title: 'Market Fresh and 40+',
    description:
      "A deliberate refusal of the idea that midlife dating is an exercise in sorting baggage. Built for people with interior weather, taste, and conviction — and tired of being talked about like they don't.",
  },
];

const Originals = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    const { error } = await supabase.from('form_submissions').insert({
      form_type: 'originals-waitlist',
      subject: 'Originals waitlist signup',
      fields: { Email: email },
    });
    setStatus(error ? 'error' : 'success');
    if (!error) setEmail('');
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Originals
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-8">
          Events that don't exist <em>anywhere else</em>.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl">
          A few times a year we run something off-calendar — limited size, unusual format,
          never repeated the same way twice. Some you can apply to. Some you can't. Below: a
          decade of the ones we've built before.
        </p>
      </section>

      {/* Originals — alternating editorial layout */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-20 md:space-y-32">
          {originals.map((o, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <article
                key={o.title}
                className="grid md:grid-cols-2 gap-8 md:gap-14 items-center"
              >
                <div className={imageLeft ? 'md:order-1' : 'md:order-2'}>
                  <div className="overflow-hidden bg-muted">
                    <img
                      src={o.image}
                      alt={o.title}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={imageLeft ? 'md:order-2' : 'md:order-1'}>
                  <p className="eyebrow mb-3 text-muted-foreground">{o.year}</p>
                  <h2 className="font-display text-3xl md:text-5xl leading-[1.04] mb-5">
                    {o.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-foreground/85">
                    {o.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Coming this fall */}
      <section className="border-t border-border bg-foreground text-background mt-16">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p
            className="eyebrow mb-6"
            style={{ color: 'rgba(247, 244, 246, 0.7)' }}
          >
            Coming this fall
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] mb-6">
            Three new Originals, currently in development.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: 'rgba(247, 244, 246, 0.85)' }}
          >
            Limited size. By application. The first wave drops in September. We'll let you
            know when applications open.
          </p>

          {status === 'success' ? (
            <div className="flex items-center gap-2 font-medium">
              <Check className="w-5 h-5" />
              You're on the list.
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/30 text-background placeholder:text-background/60 h-12"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  'Notify me'
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Originals;
