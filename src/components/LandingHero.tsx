import { Link } from 'react-router-dom';
import workingFromHoxton from '@/assets/working-from-hoxton.jpeg';

const LandingHero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-20 pb-12">
      {/* Tiny eyebrow / tagline */}
      <p className="eyebrow text-center mb-8" style={{ color: 'hsl(var(--muted-foreground))' }}>
        It's easy to meet, but harder to connect.<sup className="ml-0.5">™</sup>
      </p>

      {/* Massive editorial headline */}
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-16 md:mb-20 max-w-5xl">
        Lakshmi Rengarajan wants you to date your friends.{' '}
        <span className="whitespace-nowrap">(<em>And</em></span> your coworkers.{' '}
        <em>And</em> your neighbors.)
      </h1>

      {/* Photo + intro + CTA */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto md:ml-12">
        {/* Circle-cropped photo */}
        <div className="aspect-square w-full max-w-md mx-auto md:mx-0 rounded-full overflow-hidden">
          <img
            src={workingFromHoxton}
            alt="A How to Date Humans event at The Hoxton, Chicago"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro + CTA */}
        <div className="max-w-md">
          <p className="text-lg leading-relaxed mb-8">
            A year of experimental labs, salons, &amp; events for anyone who cares about how humans
            find each other, why it got <em className="italic">so hard</em> &amp; what we can do about it.
          </p>
          <Link to="/#timeline" className="btn-pill">
            See the event timeline
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
