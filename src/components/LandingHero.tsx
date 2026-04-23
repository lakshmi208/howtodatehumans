import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LandingHero = () => {
  return (
    <section className="relative max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[hsl(var(--primary))] mb-6"
      >
        It's easy to meet, but harder to connect.<sup className="text-xs">™</sup>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 max-w-3xl mx-auto"
      >
        Lakshmi Rengarajan wants you to date your friends.{' '}
        <span className="text-muted-foreground italic font-normal">
          (And your coworkers. And your neighbors.)
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
      >
        A year-long experiment in Chicago to bring dating culture back to humans — and a newsletter,
        <em> Dating in Collapse</em>, on what happened to connection.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
      >
        <a href="#newsletter">
          <Button size="lg" className="gap-2 h-12 px-6">
            <Mail className="w-4 h-4" />
            Join the newsletter
          </Button>
        </a>
        <Link to="/about">
          <Button size="lg" variant="outline" className="gap-2 h-12 px-6">
            Read the manifesto
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default LandingHero;
