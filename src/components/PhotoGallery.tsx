import { motion } from 'framer-motion';
import event1 from '@/assets/event-1.jpeg';
import event2 from '@/assets/event-2.png';
import event3 from '@/assets/event-3.jpeg';

const photos = [
  {
    src: event1,
    alt: 'Community gathering at a coworking space',
    caption: 'Building connections in person',
  },
  {
    src: event2,
    alt: 'Speakers engaging with the audience',
    caption: 'Conversations that matter',
  },
  {
    src: event3,
    alt: 'Engaged audience at How to Date Humans event',
    caption: 'How to Date Humans — In Action',
  },
];

const PhotoGallery = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Scenes from the Project</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real moments from real gatherings. This is what it looks like when people show up.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--foreground)/0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-sm font-medium text-[hsl(var(--background))]">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
