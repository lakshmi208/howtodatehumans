import { motion } from 'framer-motion';
import event1 from '@/assets/event-1.jpeg';
import workingFromHoxton from '@/assets/working-from-hoxton.jpeg';
import event3 from '@/assets/event-3.jpeg';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';

const photos = [
  {
    src: event1,
    alt: 'Community gathering at a coworking space',
    caption: 'Building connections in person',
  },
  {
    src: workingFromHoxton,
    alt: 'Working From signage at The Hoxton during the kickoff event',
    caption: 'Kickoff hosted by Working From at The Hoxton',
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
        className="mb-8 text-center"
      >
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">Scenes from the Project</h2>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          A kickoff hosted by Working From at The Hoxton. A talk and fireside chat with founder Lakshmi Rengarajan. Singles and non-singles alike gathering to focus on how to change local dating culture rather than simply pointing at the wreckage. Food and drink supplied by local Chicagoans, of course.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <img
            src={lakshmiPortrait}
            alt="Lakshmi Rengarajan speaking on stage"
            className="h-20 w-20 rounded-full object-cover object-top ring-2 ring-border"
            loading="lazy"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-foreground">Lakshmi Rengarajan</p>
            <p className="text-sm text-muted-foreground">Founder, speaker, and host</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[hsl(var(--foreground)/0.7)] to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium text-[hsl(var(--background))]">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
