import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, RefreshCw, Mail, MessageCircle, Sparkles, Lightbulb, Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

interface Submission {
  id: string;
  form_type: string;
  subject: string;
  fields: Record<string, string>;
  created_at: string;
}

const formTypeConfig: Record<string, { label: string; icon: typeof Mail; color: string }> = {
  'event-interest': { label: 'Event Interest', icon: Calendar, color: 'bg-[hsl(var(--event-talk))]' },
  'research-talk': { label: 'Research — Will Chat', icon: MessageCircle, color: 'bg-[hsl(var(--event-workshop))]' },
  'research-interest': { label: 'Research — Interested', icon: Sparkles, color: 'bg-[hsl(var(--event-fireside))]' },
  'idea-submission': { label: 'Idea Submissions', icon: Lightbulb, color: 'bg-[hsl(var(--event-event))]' },
  'speaker-inquiry': { label: 'Speaker Inquiries', icon: Mail, color: 'bg-[hsl(var(--event-focus-group))]' },
  'coaching-inquiry': { label: 'Coaching Inquiries', icon: Mail, color: 'bg-[hsl(var(--primary))]' },
};

const Admin = () => {
  const [adminKey, setAdminKey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const fetchSubmissions = async (key: string) => {
    setLoading(true);
    setError('');
    try {
      const { data, error: fnError } = await supabase.functions.invoke('get-submissions', {
        headers: { 'x-admin-key': key },
      });

      if (fnError) throw fnError;
      setSubmissions(data as Submission[]);
      setAuthenticated(true);
    } catch (err: any) {
      setError(err.message || 'Failed to load submissions');
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminKey.trim()) fetchSubmissions(adminKey.trim());
  };

  const toggleGroup = (type: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
  };

  // Group submissions by form_type
  const grouped = submissions.reduce<Record<string, Submission[]>>((acc, sub) => {
    (acc[sub.form_type] = acc[sub.form_type] || []).push(sub);
    return acc;
  }, {});

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm text-center">
            <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-xl font-bold mb-1">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground mb-6">Enter your admin key to view submissions.</p>
            <form onSubmit={handleLogin} className="space-y-3">
              <Input
                type="password"
                placeholder="Admin key"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                required
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Loading...' : 'View Submissions'}
              </Button>
            </form>
            {error && <p className="text-sm text-destructive mt-3">{error}</p>}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Submissions Dashboard</h1>
            <p className="text-sm text-muted-foreground">{submissions.length} total submissions</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchSubmissions(adminKey)}
            className="gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Refresh
          </Button>
        </div>

        <div className="space-y-4">
          {Object.entries(grouped).map(([type, subs]) => {
            const config = formTypeConfig[type] || { label: type, icon: Mail, color: 'bg-muted' };
            const Icon = config.icon;
            const isOpen = expandedGroups.has(type);

            return (
              <div key={type} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleGroup(type)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white ${config.color}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-semibold">{config.label}</span>
                    <span className="text-sm text-muted-foreground">({subs.length})</span>
                  </div>
                  {isOpen ? <ChevronDown className="w-5 h-5 text-muted-foreground" /> : <ChevronRight className="w-5 h-5 text-muted-foreground" />}
                </button>

                {isOpen && (
                  <div className="border-t border-border divide-y divide-border">
                    {subs.map((sub) => (
                      <div key={sub.id} className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <p className="text-sm font-medium">{sub.subject}</p>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                            {new Date(sub.created_at).toLocaleDateString('en-US', {
                              month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit',
                            })}
                          </span>
                        </div>
                        <div className="space-y-1">
                          {Object.entries(sub.fields).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="font-medium text-muted-foreground">{key}:</span>{' '}
                              <span className={key === 'Context' || key === 'Idea' ? 'italic' : ''}>{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
