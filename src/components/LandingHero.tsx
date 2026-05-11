import { Link } from 'react-router-dom';
import heroLoop from '@/assets/video/hero-loop.mp4';
import heroPoster from '@/assets/video/hero-poster.jpg';

const LandingHero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-20 pb-16">
      {/* Eyebrow */}
      <p
        className="eyebrow mb-8 md:mb-10"
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        One year. One city.
      </p>

      {/* Headline — full width, massive editorial */}
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-12 md:mb-16 max-w-5xl">
        <span className="font-display">How to Date Humans</span> is a year-long project
        to figure out what <em>actually</em> happened to dating — and whether one
        city can do something about it.
      </h1>

      {/* Video + body + CTAs */}
      <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
        {/* Vertical video — full frame, uncropped */}
        <div className="w-full max-w-xs md:max-w-sm mx-auto md:mx-0">
          <div className="aspect-[9/16] overflow-hidden rounded-sm bg-foreground">
            <video
              className="w-full h-full object-cover motion-reduce:hidden"
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
              className="w-full h-full object-cover hidden motion-reduce:block"
            />
          </div>
        </div>

        {/* Body + CTAs */}
        <div className="max-w-md">
          <p className="text-lg leading-relaxed mb-8">
            A year of experimental labs, salons, &amp; events for anyone who cares about
            how humans find each other, why it got <em>so hard</em>, &amp; what we can do
            about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/#timeline" className="btn-pill">
              See the event timeline
            </Link>
            <Link to="/about" className="btn-pill-outline">
              Read the manifesto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
