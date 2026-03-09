import { motion } from 'framer-motion';
import { Megaphone, MapPin, Building2, Mail, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PartnerCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-sm font-semibold mb-6">
          <Megaphone className="w-4 h-4" />
          Work With Us
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          This Isn't a Campaign. It's a Cultural Bet.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          We're not looking for logos on a banner. We're looking for brands and voices
          that actually have a point of view on how people connect. If you're covering this
          story or building something that touches it, we should talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border border-border">
            <Building2 className="w-6 h-6 text-[hsl(var(--primary))]" />
            <h3 className="font-bold text-sm">Brands</h3>
            <p className="text-xs text-muted-foreground">You have a point of view on connection. We have a stage. Let's make something worth talking about.</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border border-border">
            <Mic className="w-6 h-6 text-[hsl(var(--primary))]" />
            <h3 className="font-bold text-sm">Media & Cultural Voices</h3>
            <p className="text-xs text-muted-foreground">Journalists, podcasters, writers. If you're telling the story of modern connection, we're generating the material.</p>
          </div>
        </div>

        <Button size="lg" className="gap-2 text-base px-8">
          <Mail className="w-4 h-4" />
          Get In Touch
        </Button>
      </div>
    </motion.section>
  );
};

export default PartnerCTA;
