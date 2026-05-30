import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import datingDetoxPoster from '@/assets/dating-detox-promo-square.png';
import discussionPhoto from '@/assets/photos/discussion.jpg';
import matchmakerPhoto from '@/assets/photos/matchmaker_coaches.jpg';
import slideArtifact from '@/assets/social-timeline-minimal-square.png';

const coral = 'hsl(var(--coral))';
const ink = 'hsl(var(--ink))';
const blush = 'hsl(var(--blush))';

const tileBase =
  'relative rounded-md overflow-hidden border border-border/60 transition-all duration-300';

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
  <figure className={`${tileBase} group ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-4 text-xs uppercase tracking-[0.18em] text-white/95">
      {caption}
    </figcaption>
  </figure>
);

const HeroBentoGrid = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-16 md:pb-24">
      <p className="eyebrow mb-6" style={{ color: coral }}>
        What
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[120px] gap-3 md:gap-4">
        {/* HEADLINE — 8x3 */}
        <div
          className={`${tileBase} md:col-span-8 md:row-span-3 bg-background hover:border-[hsl(var(--coral))] p-8 md:p-10 flex flex-col justify-between`}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
            Dating is the <em>bridge</em> to relationships. The bridge is{' '}
            <em>broken.</em>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-xl mt-6">
            <em className="not-italic font-medium">How to Date Humans</em> is a
            year-long project to find out{' '}
            <em className="italic" style={{ color: coral }}>
              what actually broke
            </em>{' '}
            — and what it would take to repair it.
          </p>
        </div>

        {/* UP NEXT — real poster, 4x3, clickable */}
        <Link
          to="/events"
          className={`${tileBase} md:col-span-4 md:row-span-3 group block`}
          aria-label="See upcoming events"
        >
          <img
            src={datingDetoxPoster}
            alt="Dating Detox event poster — March 24, 2026, Passages Wine + Books, Chicago"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span
            className="absolute top-4 right-4 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white rounded-sm"
            style={{ background: coral }}
          >
            Up next
          </span>
          <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/95 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-1">
            <span>Mar 2026 · Chicago</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        {/* TALK PHOTO — 4x3 */}
        <PhotoTile
          src={discussionPhoto}
          alt="Lakshmi presenting at a How to Date Humans event in Chicago"
          caption="From a recent talk · Chicago"
          className="md:col-span-4 md:row-span-3"
        />

        {/* FIELD NOTE — 4x3 */}
        <div
          className={`${tileBase} md:col-span-4 md:row-span-3 p-6 md:p-7 flex flex-col justify-between`}
          style={{ background: blush }}
        >
          <p
            className="text-[10px] font-medium uppercase tracking-[0.22em]"
            style={{ color: ink }}
          >
            Field note · 04
          </p>
          <p
            className="font-display text-3xl md:text-4xl leading-[1.05]"
            style={{ color: ink }}
          >
            <em className="italic" style={{ color: ink }}>
              Very cool
            </em>{' '}
            event in progress.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: ink, opacity: 0.75 }}>
            Spotted on the door at our last salon. The work is happening — in
            rooms, in real time.
          </p>
        </div>

        {/* METHODS — 4x3, deep brown */}
        <div
          className={`${tileBase} md:col-span-4 md:row-span-3 p-7 md:p-8 flex flex-col justify-between`}
          style={{ background: ink, color: 'hsl(var(--ink-foreground))' }}
        >
          <p
            className="text-[10px] font-medium uppercase tracking-[0.22em]"
            style={{ color: blush }}
          >
            The methods
          </p>
          <ul className="font-display text-3xl md:text-4xl leading-tight space-y-1">
            <li>Salons.</li>
            <li>Workshops.</li>
            <li>
              <em className="italic" style={{ color: coral }}>
                Talks.
              </em>
            </li>
            <li>Research.</li>
            <li>Listening.</li>
          </ul>
          <p className="text-xs opacity-70">Feb 2026 → Feb 2027 · Chicago</p>
        </div>

        {/* SLIDE FROM THE DECK — 8x3 */}
        <figure
          className={`${tileBase} md:col-span-8 md:row-span-3 group`}
        >
          <img
            src={slideArtifact}
            alt="Slide from a recent talk — How Relationships Used to Form"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-5 flex items-end justify-between text-xs uppercase tracking-[0.18em] text-white/95">
            <span>From the deck · a recent talk</span>
            <span className="opacity-80">How relationships used to form</span>
          </figcaption>
        </figure>

        {/* MATCHMAKER PHOTO — 4x2 */}
        <PhotoTile
          src={matchmakerPhoto}
          alt="Matchmaker and coaches workshop"
          caption="Workshop · matchmakers + coaches"
          className="md:col-span-4 md:row-span-2"
        />

        {/* CTA strip — 8x2 */}
        <div
          className={`${tileBase} md:col-span-8 md:row-span-2 bg-background p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4`}
        >
          <p className="font-display text-2xl md:text-3xl leading-snug max-w-md">
            A living project. Updated as it unfolds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/about" className="btn-pill">
              About the project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/events" className="btn-pill-outline">
              See the timeline <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBentoGrid;