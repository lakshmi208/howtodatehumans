import { Link } from 'react-router-dom';

const LandingHero = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-20">
      <p
        className="eyebrow mb-8"
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        One year. One city.
      </p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-10">
        How to Date Humans is a year-long project to figure out what{' '}
        <em>actually</em> happened to dating — and whether one city can do
        something about it.
      </h1>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/#timeline" className="btn-pill">
          See the event timeline
        </Link>
        <Link to="/about" className="btn-pill-outline">
          Read the manifesto
        </Link>
      </div>
    </section>
  );
};

export default LandingHero;
