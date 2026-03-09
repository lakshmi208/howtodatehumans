import { motion } from 'framer-motion';
import { Handshake, Mail } from 'lucide-react';
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
          Wanna Help?
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          This isn't a campaign. It's a cultural bet.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          We need all sorts of human talents to build How to Date Humans.
          Photographers, venue owners, storytellers, producers, people who
          know how to make a room feel right. If you believe that romantic
          hope is worth preserving for as long as possible, drop us a line
          and tell us how you want to help.
        </p>

        <Button size="lg" className="gap-2 text-base px-8">
          <Mail className="w-4 h-4" />
          Drop Us a Line
        </Button>
      </div>
    </motion.section>
  );
};

export default PartnerCTA;
