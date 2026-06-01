import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';

// Stub gallery page. Starts with event photos already in the repo.
// When Lakshmi uploads presentation slides, add them to the photos array
// and consider re-grouping (e.g. "Events" / "Slides" tabs).
import event1 from '@/assets/event-1.jpeg';
import event3 from '@/assets/event-3.jpeg';
import workingFromHoxton from '@/assets/working-from-hoxton.jpeg';

const photos = [
  { src: workingFromHoxton, alt: 'The Hoxton kickoff' },
  { src: event3, alt: 'Engaged audience at a How to Date Humans event' },
  { src: event1, alt: 'Community gathering at a coworking space' },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-10 md:pb-14">
        <p className="eyebrow mb-4">Gallery</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-6">
          Scenes from the work.
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-foreground/75 max-w-2xl">
          Moments from past events, talks, and salons. Slides from recent keynotes
          coming soon.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`overflow-hidden bg-muted ${
                i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <p className="text-sm italic text-muted-foreground mt-8 text-center">
          More coming — including slide excerpts from recent keynotes.
        </p>
      </section>

      <section className="border-t border-border">
        <NewsletterSignup />
      </section>
    </div>
  );
};

export default Gallery;
