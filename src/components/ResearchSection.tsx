import { motion } from 'framer-motion';
import { researchAreas } from '@/data/research';
import ResearchCard from '@/components/ResearchCard';

interface ResearchSectionProps {
  showInterest: boolean;
}

const ResearchSection = ({ showInterest }: ResearchSectionProps) => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Research Areas</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          These are the areas we're actively exploring to understand dating culture.
          By talking to real people, we learn what's actually going on — and what
          events, workshops, and talks to build next.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {researchAreas.map((area, index) => (
          <ResearchCard
            key={area.id}
            area={area}
            index={index}
            showInterest={showInterest}
          />
        ))}
      </div>
    </section>
  );
};

export default ResearchSection;
