import { ArrowRight } from 'lucide-react';
import datingDetoxPoster from '@/assets/dating-detox-promo-square.png';
import discussionPhoto from '@/assets/photos/discussion.jpg';
import matchmakerPhoto from '@/assets/photos/matchmaker_coaches.jpg';
import audiencePhoto from '@/assets/event-3.jpeg';

const panelBase = 'overflow-hidden rounded-md border border-border bg-card';

const PhotoTile = ({
  src,
  alt,
  caption,
  className = '',
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) => (
  <figure className={`${panelBase} group ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    />
    <figcaption className="border-t border-border bg-background px-4 py-3 text-xs uppercase tracking-[0.18em] text-foreground/70">
      {caption}
    </figcaption>
  </figure>
);

const HeroBentoGrid = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-16">
      <p className="eyebrow mb-6 text-primary">
        What
      </p>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
            Dating is the <em>bridge</em> to relationships. The bridge is{' '}
            <em>broken.</em>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/85 md:text-xl">
            <em className="not-italic font-medium">How to Date Humans</em> is a
            year-long project to understand what actually broke — and what it
            would take to repair it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/events" className="btn-pill">
              See the timeline <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/about" className="btn-pill-outline">
              About the project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <aside className={`${panelBase} bg-foreground text-background`}>
          <img
            src={audiencePhoto}
            alt="Audience gathered for a How to Date Humans talk in Chicago"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="space-y-5 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-background/70">
              Living project · Feb 2026 → Feb 2027
            </p>
            <p className="font-display text-3xl leading-tight md:text-4xl">
              Built in rooms, in public, as the work unfolds.
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <a href="/events" className={`${panelBase} group block`}>
          <img
            src={datingDetoxPoster}
            alt="Dating Detox event poster — March 24, 2026, Passages Wine + Books, Chicago"
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="flex items-center justify-between border-t border-border bg-background p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Up next</p>
              <p className="mt-1 font-display text-2xl leading-tight">Dating Detox</p>
            </div>
            <ArrowRight className="h-4 w-4 text-foreground/70" />
          </div>
        </a>

        <PhotoTile
          src={discussionPhoto}
          alt="People in conversation at a How to Date Humans gathering"
          caption="Recent conversation · Chicago"
        />

        <PhotoTile
          src={matchmakerPhoto}
          alt="A participant writing during a How to Date Humans workshop"
          caption="Workshop notes · matchmakers + coaches"
        />
      </div>
    </section>
  );
};

export default HeroBentoGrid;