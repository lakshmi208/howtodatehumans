import { useState } from 'react';
import { Loader2, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import SiteNav from '@/components/SiteNav';
import ListeningSessionCard from '@/components/ListeningSessionCard';
import YearProgress from '@/components/YearProgress';
import ResearchSection from '@/components/ResearchSection';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import discussionPhoto from '@/assets/photos/discussion.jpg';
import genzPhoto from '@/assets/photos/genz.jpg';
import matchmakerPhoto from '@/assets/photos/matchmaker_coaches.jpg';
import reenteringPhoto from '@/assets/photos/reenterdating.jpg';

const Research = () => {
  // Survey waitlist
  const [surveyEmail, setSurveyEmail] = useState('');
  const [surveyStatus, setSurveyStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Open story submission
  const [storyName, setStoryName] = useState('');
  const [storyEmail, setStoryEmail] = useState('');
  const [storyText, setStoryText] = useState('');
  const [storyStatus, setStoryStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submitSurveyWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveyEmail.trim()) return;
    setSurveyStatus('loading');
    const { error } = await supabase.from('form_submissions').insert({
      form_type: 'survey-waitlist',
      subject: 'Survey waitlist signup',
      fields: { Email: surveyEmail },
    });
    setSurveyStatus(error ? 'error' : 'success');
    if (!error) setSurveyEmail('');
  };

  const submitStory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyEmail.trim() || !storyText.trim()) return;
    setStoryStatus('loading');
    const { error } = await supabase.from('form_submissions').insert({
      form_type: 'research-story',
      subject: 'Research story submission',
      fields: {
        Name: storyName || '(no name)',
        Email: storyEmail,
        Story: storyText,
      },
    });
    setStoryStatus(error ? 'error' : 'success');
    if (!error) {
      setStoryName('');
      setStoryEmail('');
      setStoryText('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
          May 2026 · Research Month
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-8">
          What we're listening for this month.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
          The commercial success of dating apps is masking what's actually happening to the rest
          of the ecosystem — and that's worth investigating, whatever your relationship status.
        </p>
      </section>

      {/* Year progress — same as homepage, anchors "May = research month" */}
      <div className="mb-16">
        <YearProgress />
      </div>

      {/* Listening sessions */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-6 mb-7">
          <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-muted">
            <img
              src={discussionPhoto}
              alt="People talking around a table"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="eyebrow">Listening Sessions</p>
        </div>
        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mb-4">
          Three groups we want to hear from this month. Raise your hand below. If your perspective
          fits a session, we'll be in touch personally — sessions are intentionally small.
        </p>

        <ListeningSessionCard
          slug="gen-z"
          eyebrow="Gen Z"
          title="What you'd never download — and why"
          description="If you're under 25 and find yourself opting out of dating apps — or going on them and feeling worse for it — we want to understand why. Not to convince you back on. To document what your generation noticed first."
          prompt="What's the moment you stopped wanting to be on apps?"
          image={genzPhoto}
          imageAlt="A finger over a delete key"
        />

        <ListeningSessionCard
          slug="coaches-and-matchmakers"
          eyebrow="Hiring a coach or matchmaker"
          title="What actually happened when you hired one"
          description="The industry is largely unregulated. People spend thousands with no shared way to compare what worked, what didn't, what was a scam, what crossed a line — and what was actually good. We're documenting both. Maybe especially the good, since the loudest stories are the bad ones."
          prompt="What's the part of your experience you've never told anyone outside your closest friends?"
          image={matchmakerPhoto}
          imageAlt="A hand signing a contract"
        />

        <ListeningSessionCard
          slug="reentering-daters"
          eyebrow="Reentering daters"
          title="You remember when this worked differently."
          description="If you got married before dating apps and you're back in the field now, you have data nobody else does. You're the only people who can compare what dating felt like in 1995, 2005, 2015 — and what it's like to try now. We're listening for what you noticed change."
          prompt="Compare your first date in your earlier dating era to your last one. What's different?"
          image={reenteringPhoto}
          imageAlt="Back of a man in flannel looking out"
        />
      </section>

      {/* Featured pull-quote */}
      <section className="relative w-full bg-foreground py-20 md:py-28 my-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="eyebrow mb-6"
            style={{ color: 'rgba(247, 244, 246, 0.7)' }}
          >
            What we've already heard
          </p>
          <blockquote
            className="font-display text-2xl md:text-4xl lg:text-5xl leading-[1.18] mb-6"
            style={{ color: 'hsl(var(--background))' }}
          >
            "It's not just that I don't want to be on a dating app.{' '}
            <em>I'm actually concerned that being on a dating app will harm my heart's
              ability to connect.</em>"
          </blockquote>
          <p
            className="text-sm tracking-wider uppercase"
            style={{ color: 'rgba(247, 244, 246, 0.7)' }}
          >
            — A Gen Z respondent
          </p>
        </div>
      </section>

      {/* The Survey */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <p className="eyebrow mb-3">The survey</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-5">
          A new survey is coming. Taking it should change what you notice.
        </h2>
        <p className="text-base md:text-lg text-foreground/85 max-w-2xl mb-8">
          The questions are designed so that the act of answering reveals what's actually shifted —
          a small unsettling tour through what's changed, regardless of where you are in the
          ecosystem. Be first to take it.
        </p>

        {surveyStatus === 'success' ? (
          <div className="flex items-center gap-2 text-foreground font-medium">
            <Check className="w-5 h-5" />
            You're on the list.
          </div>
        ) : (
          <form onSubmit={submitSurveyWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              type="email"
              placeholder="Email"
              required
              value={surveyEmail}
              onChange={(e) => setSurveyEmail(e.target.value)}
              className="bg-background border-border h-12"
            />
            <button type="submit" className="btn-pill" disabled={surveyStatus === 'loading'}>
              {surveyStatus === 'loading' ? (
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
      </section>

      {/* Broader research areas */}
      <section className="border-t border-border pt-8">
        <ResearchSection showInterest={false} />
      </section>

      {/* Open story submission */}
      <section className="max-w-4xl mx-auto px-6 pb-24 border-t border-border pt-16">
        <p className="eyebrow mb-3">Submit a story</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-5">
          Tell us what <em>you've</em> noticed change.
        </h2>
        <p className="text-base md:text-lg text-foreground/85 max-w-2xl mb-8">
          Don't need to fit a listening session. If you've watched something shift — in dating,
          in friendship, in how people meet, in how people leave — we want it on the record.
        </p>

        {storyStatus === 'success' ? (
          <div className="flex items-center gap-2 text-foreground font-medium">
            <Check className="w-5 h-5" />
            On the record. Thank you.
          </div>
        ) : (
          <form onSubmit={submitStory} className="max-w-2xl space-y-4">
            <Textarea
              value={storyText}
              onChange={(e) => setStoryText(e.target.value)}
              placeholder="What did you notice change? Be as specific as you want."
              rows={5}
              maxLength={3000}
              required
              className="bg-background border-border"
            />
            <div className="grid sm:grid-cols-2 gap-3">
              <Input
                type="text"
                placeholder="First name (optional)"
                value={storyName}
                onChange={(e) => setStoryName(e.target.value)}
                className="bg-background border-border"
              />
              <Input
                type="email"
                placeholder="Email"
                required
                value={storyEmail}
                onChange={(e) => setStoryEmail(e.target.value)}
                className="bg-background border-border"
              />
            </div>
            <button type="submit" className="btn-pill" disabled={storyStatus === 'loading'}>
              {storyStatus === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Research;
