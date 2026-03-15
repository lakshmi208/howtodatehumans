import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';

const IdeaSubmission = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      try {
        await supabase.functions.invoke('send-form-email', {
          body: {
            formType: 'idea-submission',
            subject: `New Event Idea from ${name || 'Anonymous'}`,
            fields: { Name: name || 'Not provided', Email: email, Idea: idea },
          },
        });
      } catch (err) {
        console.error('Failed to send idea:', err);
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setIdea('');
      }, 3000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-sm font-semibold mb-4">
            <Lightbulb className="w-4 h-4" />
            Got an Idea?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What event would you want to see?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This project is built by the community. If you have an idea for an event, workshop, talk, or experience 
            that could help people connect better — we want to hear it.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[hsl(var(--event-workshop)/0.1)] border border-[hsl(var(--event-workshop)/0.3)] rounded-xl p-8 text-center"
          >
            <p className="text-lg font-semibold text-[hsl(var(--event-workshop))]">
              Love it — we'll take a look! ✓
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                  Your Name
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Your Event Idea
              </label>
              <Textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Tell us about it — even a rough idea is great..."
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full gap-2">
              <Send className="w-4 h-4" />
              Submit Your Idea
            </Button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default IdeaSubmission;
