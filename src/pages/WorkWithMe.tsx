import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, Check } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import speaking1 from '@/assets/speaking/lakshmi-speaking-1.jpg';
import speaking2 from '@/assets/speaking/lakshmi-speaking-2.jpg';
import speaking3 from '@/assets/speaking/lakshmi-speaking-3.jpg';
import speaking4 from '@/assets/speaking/lakshmi-speaking-4.jpg';

const speakingPhotos = [
  { src: speaking1, alt: 'Lakshmi speaking at an event' },
  { src: speaking2, alt: 'Lakshmi giving a talk' },
  { src: speaking3, alt: 'Lakshmi on stage at a corporate event' },
  { src: speaking4, alt: 'Lakshmi at ZS Associates Learning Day' },
];

const talkIdeas = [
  {
    number: '01',
    title: 'Built Environment & Objects',
    body: 'Space and stuff shape connection. The office, the room, the things in it — they either invite contact or quietly block it.',
  },
  {
    number: '02',
    title: 'Have a Connection Plan',
    body: "Valuing connection isn't enough. People who connect well work from a plan — who, when, where, how — not just good intentions.",
  },
  {
    number: '03',
    title: 'Talk About Yourself Well',
    body: 'Story is the on-ramp. Knowing how to introduce yourself and tell a few sharp stories is the difference between contact and chemistry.',
  },
];

const workshops = [
  {
    number: '01',
    title: 'Designing for Contact',
    subtitle: 'Activating the Built Environment',
    bullets: [
      'Audit your space for friction & flow',
      'Place objects that invite conversation',
      "Run a 'micro-redesign' for one room",
    ],
  },
  {
    number: '02',
    title: 'Build Your Connection Plan',
    subtitle: 'From Good Intentions to Practice',
    bullets: [
      'Map your relational portfolio',
      'Identify 5 cross-level contacts to grow',
      'Leave with a 30-day connection ritual',
    ],
  },
  {
    number: '03',
    title: 'Magnetic Storytelling',
    subtitle: 'Introductions That Open Doors',
    bullets: [
      'Craft your 3 go-to introductions',
      'Build a story bank for any context',
      'Practice live; get peer feedback',
    ],
  },
];

type Venue = { name: string; when: string; image?: string };

// To add a photo for any venue: drop the file into src/assets/speaking/,
// import it at the top, and add `image: <varname>` to the entry below.
const pastVenues: Venue[] = [
  { name: 'Wine Enthusiast Town Hall', when: 'May 2025' },
  { name: 'ZS Associates Learning Day', when: 'Oct 2025' },
  { name: 'Omega Institute', when: 'Sept 2025' },
  { name: 'Fortune Workplace Summit', when: '2026' },
  { name: 'Poptech Conference', when: 'Forthcoming · Oct 2026' },
];

const WorkWithMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !details.trim()) return;
    setStatus('loading');
    const { error } = await supabase.from('form_submissions').insert({
      form_type: 'speaking-inquiry',
      subject: `Speaking / workshop inquiry from ${name || '(no name)'}`,
      fields: {
        Name: name || '(no name)',
        Email: email,
        Organization: organization || '(none)',
        Details: details,
      },
    });
    setStatus(error ? 'error' : 'success');
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-24 pb-12">
        <p className="eyebrow mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
          For your stage, your team, or your year
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-8">
          Work with <em>Lakshmi</em>.
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl mb-10">
          Connection is universal — but it has to be adjusted to the moment, the audience,
          and the situation. Storytelling is the tool. These are the four ways we work
          together.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#speaking" className="btn-pill-outline">Keynote</a>
          <a href="#workshops" className="btn-pill-outline">Workshops</a>
          <a href="#consult" className="btn-pill-outline">Offsite Consult</a>
          <Link to="/coaching" className="btn-pill">Dating Coach for Gen X →</Link>
        </div>
      </section>

      {/* ===== SPEAKING ===== */}
      <section id="speaking" className="max-w-5xl mx-auto px-6 pt-20 pb-12 scroll-mt-20">
        <p className="eyebrow mb-3">Speaking</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5 max-w-3xl">
          A keynote your team uses the next day.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl mb-16">
          Each talk introduces three usable ideas. Each idea can become a workshop your
          team uses the next week. Standalone or three-part series, for organizations
          rethinking how their people actually connect.
        </p>

        {/* Featured talk */}
        <div className="mb-20">
          <p className="eyebrow mb-3">The Talk</p>
          <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3 max-w-3xl">
            What Modern Dating Can Learn From Modern Work
          </h3>
          <p className="text-base md:text-lg italic text-foreground/75 mb-10">
            Three ideas every team can borrow from how dating culture changed.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {talkIdeas.map((idea) => (
              <div key={idea.number}>
                <p className="font-display text-2xl mb-1" style={{ color: 'hsl(var(--coral))' }}>
                  {idea.number}
                </p>
                <h4 className="font-display text-xl md:text-2xl leading-snug mb-3">{idea.title}</h4>
                <p className="text-base leading-relaxed text-foreground/80">{idea.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop pipeline */}
        <div id="workshops" className="mb-20 border-t border-border pt-16 scroll-mt-20">
          <p className="eyebrow mb-3">From Inspiration to Tactics</p>
          <h3 className="font-display text-3xl md:text-4xl leading-tight mb-5 max-w-3xl">
            Three workshops that activate the ideas.
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mb-10">
            Each workshop turns one keynote concept into a tactical playbook — tools and
            rituals your people can use the next day.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-10">
            {workshops.map((w) => (
              <div key={w.number} className="border-t border-foreground/20 pt-5">
                <p className="font-display text-2xl mb-1" style={{ color: 'hsl(var(--coral))' }}>
                  {w.number}
                </p>
                <h4 className="font-display text-xl md:text-2xl leading-snug mb-1">{w.title}</h4>
                <p className="text-sm italic text-foreground/65 mb-4">{w.subtitle}</p>
                <ul className="space-y-2">
                  {w.bullets.map((b) => (
                    <li key={b} className="text-base leading-relaxed text-foreground/85 flex gap-2">
                      <span className="text-[hsl(var(--coral))] shrink-0">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <strong>Format:</strong> 60–90 min interactive · <strong>Audience:</strong>{' '}
            20–60 ideal · <strong>Sequence:</strong> Standalone or three-part series.
          </p>
        </div>

        {/* Recent speaking engagements */}
        <div className="mb-20 border-t border-border pt-16">
          <p className="eyebrow mb-6">Recent speaking engagements</p>

          {/* Photo gallery — random assortment of speaking moments */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
            {speakingPhotos.map((photo, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-muted">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <ul className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {pastVenues.map((v) => (
              <li key={v.name} className="flex items-center gap-4 border-b border-border/50 pb-4">
                {v.image && (
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden bg-muted">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg md:text-xl leading-snug">{v.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{v.when}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Inquiry */}
        <div className="border-t border-border pt-16">
          <p className="eyebrow mb-3">Book a talk or workshop</p>
          <h3 className="font-display text-3xl md:text-4xl leading-tight mb-5 max-w-3xl">
            Tell me about your event.
          </h3>
          <p className="text-base text-foreground/80 mb-8 max-w-xl">
            A short note works. I read everything personally.
          </p>

          {status === 'success' ? (
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Check className="w-5 h-5" />
              Got it. I'll be in touch within a few days.
            </div>
          ) : (
            <form onSubmit={submitInquiry} className="max-w-2xl space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-border h-11"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border h-11"
                />
              </div>
              <Input
                type="text"
                placeholder="Organization (optional)"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="bg-background border-border h-11"
              />
              <Textarea
                placeholder="Audience, format, ideal timing, anything else useful."
                rows={4}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="bg-background border-border"
              />
              <button type="submit" className="btn-pill" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  'Send inquiry'
                )}
              </button>
              <p className="text-xs text-muted-foreground">
                Fees vary by audience and format — I'll share a range in my reply.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ===== OFFSITE CONSULT ===== */}
      <section
        id="consult"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-border scroll-mt-20"
      >
        <p className="eyebrow mb-3">60-minute consult</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5 max-w-3xl">
          When you don&apos;t need a full facilitator.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl mb-8">
          You&apos;re planning an offsite. You don&apos;t have the budget for an outside
          agency — but you could use an hour with someone who&apos;s spent years thinking
          about how connection actually happens. To help you pick activities, design the
          right emotional outcomes, and build connection into the structure of your day.
          One 60-minute call. You leave with a plan.
        </p>
        <ul className="text-base text-foreground/80 leading-relaxed mb-8 space-y-1">
          <li>· 60 minutes, one call</li>
          <li>· Concrete activity recommendations for your offsite</li>
          <li>· Help thinking about the emotional outcomes you want to design</li>
        </ul>
        <a
          href="mailto:lakshmi@howtodatehumans.com?subject=Offsite%20consult%20%E2%80%94%2060%20min"
          className="btn-pill"
        >
          Book a consult
        </a>
      </section>

    </div>
  );
};

export default WorkWithMe;
