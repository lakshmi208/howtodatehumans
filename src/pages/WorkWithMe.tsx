import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Heart, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SiteNav from '@/components/SiteNav';
import { supabase } from '@/integrations/supabase/client';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

type FormState = 'idle' | 'submitted';

const WorkWithMe = () => {
  const [speakerForm, setSpeakerForm] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    date: '',
    details: '',
  });
  const [coachingForm, setCoachingForm] = useState({
    name: '',
    email: '',
    age: '',
    situation: '',
    whyNow: '',
  });
  const [speakerState, setSpeakerState] = useState<FormState>('idle');
  const [coachingState, setCoachingState] = useState<FormState>('idle');

  const handleSpeakerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await supabase.from('form_submissions').insert({
        form_type: 'speaker-inquiry',
        subject: `Speaker Inquiry: ${speakerForm.organization || 'Unknown Org'}`,
        fields: {
          Name: speakerForm.name,
          Email: speakerForm.email,
          Organization: speakerForm.organization,
          'Event Type': speakerForm.eventType,
          'Tentative Date': speakerForm.date,
          Details: speakerForm.details,
        },
      });
    } catch (err) {
      console.error('Failed to save speaker inquiry:', err);
    }
    setSpeakerState('submitted');
    setSpeakerForm({ name: '', email: '', organization: '', eventType: '', date: '', details: '' });
  };

  const handleCoachingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await supabase.from('form_submissions').insert({
        form_type: 'coaching-application',
        subject: `Coaching Application: ${coachingForm.name || 'Anonymous'}`,
        fields: {
          Name: coachingForm.name,
          Email: coachingForm.email,
          Age: coachingForm.age,
          Situation: coachingForm.situation,
          'Why Now': coachingForm.whyNow,
        },
      });
    } catch (err) {
      console.error('Failed to save coaching application:', err);
    }
    setCoachingState('submitted');
    setCoachingForm({ name: '', email: '', age: '', situation: '', whyNow: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-4">
            Work with me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
            Two ways to go{' '}
            <span className="text-[hsl(var(--primary))]">deeper</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I've spent 15 years studying how people connect. Whether you want
            that perspective on your stage or in your dating life, here's how we
            can work together.
          </p>
        </motion.div>
      </section>

      {/* Speaker Section */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
              <Mic className="w-5 h-5 text-[hsl(var(--primary-foreground))]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Book me to speak</h2>
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-2">
            I talk about what's actually happening to human connection and what
            we can do about it. I've spoken at companies, conferences, and
            podcasts ranging from Vox Media to WeWork to Match.com.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Keynotes, panels, podcasts, fireside chats. If your audience cares
            about how people relate to each other, we should talk.
          </p>

          {speakerState === 'submitted' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <CheckCircle className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-3" />
              <p className="text-lg font-bold mb-1">Got it. I'll be in touch.</p>
              <p className="text-sm text-muted-foreground">
                I review every inquiry personally.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSpeakerSubmit}
              className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name</label>
                  <Input
                    required
                    maxLength={100}
                    value={speakerForm.name}
                    onChange={(e) =>
                      setSpeakerForm({ ...speakerForm, name: e.target.value })
                    }
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    value={speakerForm.email}
                    onChange={(e) =>
                      setSpeakerForm({ ...speakerForm, email: e.target.value })
                    }
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Organization
                  </label>
                  <Input
                    required
                    maxLength={200}
                    value={speakerForm.organization}
                    onChange={(e) =>
                      setSpeakerForm({
                        ...speakerForm,
                        organization: e.target.value,
                      })
                    }
                    placeholder="Company or event name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Event type
                  </label>
                  <Input
                    maxLength={100}
                    value={speakerForm.eventType}
                    onChange={(e) =>
                      setSpeakerForm({
                        ...speakerForm,
                        eventType: e.target.value,
                      })
                    }
                    placeholder="Keynote, panel, podcast…"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Tentative date
                </label>
                <Input
                  maxLength={100}
                  value={speakerForm.date}
                  onChange={(e) =>
                    setSpeakerForm({ ...speakerForm, date: e.target.value })
                  }
                  placeholder="e.g. Fall 2026, TBD"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Tell me more
                </label>
                <Textarea
                  maxLength={1000}
                  value={speakerForm.details}
                  onChange={(e) =>
                    setSpeakerForm({ ...speakerForm, details: e.target.value })
                  }
                  placeholder="What's the event about? What does your audience care about?"
                  rows={4}
                />
              </div>
              <Button type="submit" className="gap-2">
                <Send className="w-4 h-4" />
                Send inquiry
              </Button>
            </form>
          )}
        </motion.div>
      </section>

      {/* Coaching Section */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
              <Heart className="w-5 h-5 text-[hsl(var(--primary-foreground))]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Let me be your midlife dating guide</h2>
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-2">
            I work with a small number of midlife daters who are ready to stop
            recycling the same patterns and start dating with actual clarity.
            This isn't advice from a script. It's 15 years of pattern recognition
            applied to your life.
          </p>

          <div className="border-l-4 border-[hsl(var(--primary))] pl-5 my-6">
            <p className="text-base leading-relaxed font-medium">
              I only take a handful of clients at a time. If spots are full,
              I'll let you know when one opens up.
            </p>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
            Apply below
          </p>

          {coachingState === 'submitted' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <CheckCircle className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-3" />
              <p className="text-lg font-bold mb-1">Application received.</p>
              <p className="text-sm text-muted-foreground">
                I'll reach out if it's a good fit. No form letters.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleCoachingSubmit}
              className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name</label>
                  <Input
                    required
                    maxLength={100}
                    value={coachingForm.name}
                    onChange={(e) =>
                      setCoachingForm({ ...coachingForm, name: e.target.value })
                    }
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    value={coachingForm.email}
                    onChange={(e) =>
                      setCoachingForm({ ...coachingForm, email: e.target.value })
                    }
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Age</label>
                <Input
                  maxLength={10}
                  value={coachingForm.age}
                  onChange={(e) =>
                    setCoachingForm({ ...coachingForm, age: e.target.value })
                  }
                  placeholder="e.g. 45"
                  className="w-32"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  What's your situation?
                </label>
                <Textarea
                  required
                  maxLength={1000}
                  value={coachingForm.situation}
                  onChange={(e) =>
                    setCoachingForm({
                      ...coachingForm,
                      situation: e.target.value,
                    })
                  }
                  placeholder="Recently divorced, back on the apps, haven't dated in 20 years — whatever's true."
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Why now?
                </label>
                <Textarea
                  maxLength={1000}
                  value={coachingForm.whyNow}
                  onChange={(e) =>
                    setCoachingForm({ ...coachingForm, whyNow: e.target.value })
                  }
                  placeholder="What made you look for help today?"
                  rows={3}
                />
              </div>
              <Button type="submit" className="gap-2">
                <Send className="w-4 h-4" />
                Submit application
              </Button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default WorkWithMe;
