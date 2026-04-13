import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { ResearchArea, VettingField } from '@/data/research';
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
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const fields: Record<string, string> = {
      'Research Area': area.title,
      'Research ID': area.id,
      'Interest Type': captureMode === 'talk' ? 'Will chat' : 'Wants updates',
    };

    if (captureMode === 'talk') {
      area.vettingFields.forEach((f) => {
        const val = (formData[f.key] || '').trim();
        if (val) fields[f.key] = val;
      });
    } else {
      const email = (formData['Email'] || '').trim();
      if (!email) return;
      fields['Email'] = email;
    }

    const { error: insertError } = await supabase.from('form_submissions').insert({
      form_type: captureMode === 'talk' ? 'research-talk' : 'research-interest',
      subject: `${captureMode === 'talk' ? 'Wants to Talk' : 'Interested In'}: ${area.title}`,
      fields,
    });

    if (insertError) {
      console.error('Failed to save research interest:', insertError);
      setSubmitError('Something went wrong saving your response — please try again.');
      return;
    }

    setSubmitted(true);
    setFormData({});

    setTimeout(() => {
      setCaptureMode(null);
      setSubmitted(false);
    }, 2500);
  };

  const renderField = (field: VettingField) => {
    const value = formData[field.key] || '';

    if (field.type === 'textarea') {
      return (
        <div key={field.key} className="space-y-1">
          <label className="text-xs font-semibold text-foreground">{field.label}</label>
          <Textarea
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => updateField(field.key, e.target.value)}
            className="text-sm resize-none"
            rows={3}
            maxLength={2000}
            required={field.required}
          />
        </div>
      );
    }

    if (field.type === 'select' && field.options) {
      return (
        <div key={field.key} className="space-y-1">
          <label className="text-xs font-semibold text-foreground">{field.label}</label>
          <select
            value={value}
            onChange={(e) => updateField(field.key, e.target.value)}
            className="w-full h-8 text-sm rounded-md border border-input bg-background px-3"
            required={field.required}
          >
            <option value="">Select...</option>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div key={field.key} className="space-y-1">
        <label className="text-xs font-semibold text-foreground">{field.label}</label>
        <Input
          type={field.type === 'email' ? 'email' : 'text'}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => updateField(field.key, e.target.value)}
          className="h-8 text-sm"
          required={field.required}
        />
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
    >
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-[hsl(var(--event-focus-group))] mb-3">
        Research Area
      </span>

      <h3 className="text-xl font-bold mb-1 leading-tight">{area.title}</h3>
      <p className="text-sm font-medium text-[hsl(var(--primary))] italic mb-3">{area.tagline}</p>

      <p className="text-sm leading-relaxed mb-3">{area.description}</p>

      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Why It Matters</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{area.whyItMatters}</p>
      </div>

      {showInterest && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 text-xs text-muted-foreground mb-4">
          <span>
            <strong>{area.interestCount}</strong> interested
          </span>
          <span>
            <strong>{area.talkCount}</strong> want to talk
          </span>
        </motion.div>
      )}

      {captureMode === null ? (
        <div className="flex flex-col sm:flex-row gap-2 border-t border-border pt-4">
          <Button size="sm" onClick={() => setCaptureMode('talk')} className="gap-1.5" variant="default">
            <MessageCircle className="w-3.5 h-3.5" />
            I'll talk
          </Button>
          <Button size="sm" onClick={() => setCaptureMode('interested')} className="gap-1.5" variant="outline">
            <Sparkles className="w-3.5 h-3.5" />
            Please explore this!
          </Button>
        </div>
      ) : (
        <div className="border-t border-border pt-4">
          {submitted ? (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium text-[hsl(var(--event-workshop))]">
              {captureMode === 'talk' ? "We'll review your info — thanks! ✓" : "Thanks! ✓"}
            </motion.span>
          ) : captureMode === 'talk' ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-xs font-medium text-muted-foreground mb-1">
                Tell us a bit about yourself so we can reach out.
              </p>
              {area.vettingFields.map(renderField)}

              <div className="flex items-center gap-2 pt-1">
                <Button size="sm" type="submit" className="h-8">
                  Submit
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    setCaptureMode(null);
                    setFormData({});
                    setSubmitError(null);
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitError && <p className="text-xs text-destructive">{submitError}</p>}
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Drop your email and we'll know you're interested.
              </p>
              <div className="flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData['Email'] || ''}
                  onChange={(e) => updateField('Email', e.target.value)}
                  className="h-8 text-sm"
                  required
                />
                <Button size="sm" type="submit" className="h-8">
                  Go
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    setCaptureMode(null);
                    setFormData({});
                    setSubmitError(null);
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitError && <p className="text-xs text-destructive">{submitError}</p>}
            </form>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ResearchCard;
