import { motion } from 'framer-motion';
import EventCard from '@/components/EventCard';
import { EventConcept } from '@/data/events';

interface GaugingInterestProps {
  events: EventConcept[];
  showInterest: boolean;
}

const GaugingInterest = ({ events, showInterest }: GaugingInterestProps) => {
  if (events.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Gauging Interest</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We're testing and trying out creative concepts to address dating culture from a multitude of angles. Let us know which ideas pique your interest!
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            showInterest={showInterest}
            index={index}
            side="left"
          />
        ))}
      </div>
    </section>
  );
};

export default GaugingInterest;
