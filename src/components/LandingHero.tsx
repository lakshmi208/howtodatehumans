import { Link } from 'react-router-dom';
import heroLoop from '@/assets/video/hero-loop.mp4';
import heroPoster from '@/assets/video/hero-poster.jpg';

const LandingHero = () => {
  return (
    <section className="relative w-full h-[88vh] min-h-[560px] overflow-hidden bg-foreground">
      <video
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroLoop} type="video/mp4" />
      </video>
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover hidden motion-reduce:block"
      />

      {/* Gradient overlay — heavier at bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/70" />

      <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-14 md:pb-20">
        <p
          className="eyebrow mb-6"
          style={{ color: 'rgba(247, 244, 246, 0.85)' }}
        >
          One year. One city.
        </p>
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] max-w-4xl mb-10"
          style={{ color: 'hsl(var(--background))' }}
        >
          <span className="font-display">How to Date Humans</span> is a year-long project
          to figure out what <em>actually</em> happened to dating — and whether one
          city can do something about it.
        </h1>
        <div className="flex flex-col sm:flex-row items-start gap-3">
          <Link to="/#timeline" className="btn-pill">
            See the event timeline
          </Link>
          <Link
            to="/about"
            className="btn-pill-outline"
            style={{ borderColor: 'hsl(var(--background))', color: 'hsl(var(--background))' }}
          >
            Read the manifesto
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
