import { motion } from 'framer-motion';
import { Handshake, MapPin, Building2, Mail } from 'lucide-react';
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
          <Handshake className="w-4 h-4" />
          Partner With Us
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Help Us Change Dating Culture in Chicago
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          We're looking for venues, sponsors, and community partners who believe dating culture 
          can be better. If you have a space, a brand, or a mission that aligns — let's talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border border-border">
            <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
            <h3 className="font-bold text-sm">Venues</h3>
            <p className="text-xs text-muted-foreground">Host an event that matters. Get foot traffic with purpose.</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border border-border">
            <Building2 className="w-6 h-6 text-[hsl(var(--primary))]" />
            <h3 className="font-bold text-sm">Sponsors</h3>
            <p className="text-xs text-muted-foreground">Align your brand with a cultural movement, not just an event.</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border border-border">
            <Handshake className="w-6 h-6 text-[hsl(var(--primary))]" />
            <h3 className="font-bold text-sm">Partners</h3>
            <p className="text-xs text-muted-foreground">Therapists, researchers, community orgs — let's collaborate.</p>
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
