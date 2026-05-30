import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const coralBg = { backgroundColor: 'hsl(var(--coral))', color: 'hsl(var(--ink-foreground))' };
const blushBg = { backgroundColor: 'hsl(var(--blush))', color: 'hsl(var(--foreground))' };
const inkBg = { backgroundColor: 'hsl(var(--ink))', color: 'hsl(var(--ink-foreground))' };
const coralText = { color: 'hsl(var(--coral))' };

const HeroBentoGrid = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-3 md:gap-4 md:h-[640px]">
        {/* Headline */}
        <div className="bg-background border border-border p-8 md:p-10 flex items-end md:col-span-8 md:row-span-4">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
            Dating is the <em>bridge</em> to relationships. The bridge is <em>broken</em>.
          </h1>
        </div>

        {/* Brand */}
        <div
          className="p-6 md:p-8 flex items-center md:col-span-4 md:row-span-2"
          style={coralBg}
        >
          <p className="font-display italic text-3xl md:text-4xl leading-tight">
            How to Date Humans
          </p>
        </div>

        {/* Timing */}
        <div
          className="p-6 md:p-8 flex flex-col justify-center md:col-span-4 md:row-span-2"
          style={blushBg}
        >
          <p className="eyebrow mb-3">Feb 2026 — Feb 2027</p>
          <p className="font-display text-2xl md:text-3xl leading-tight">
            A 1-year project
          </p>
        </div>

        {/* Question */}
        <div className="bg-background border border-border p-6 md:p-8 flex items-center md:col-span-6 md:row-span-2">
          <p className="font-display text-3xl md:text-5xl leading-tight">
            What actually <em>broke</em>?
          </p>
        </div>

        {/* Methods */}
        <div
          className="p-6 md:p-8 flex items-center md:col-span-6 md:row-span-2"
          style={inkBg}
        >
          <p className="font-display text-2xl md:text-3xl leading-snug">
            Salons · Workshops · Field notes · Talks
          </p>
        </div>

        {/* CTA */}
        <div className="bg-background border border-border p-6 md:px-8 md:py-5 flex flex-wrap items-center justify-between gap-4 md:col-span-12 md:row-span-1">
          <p className="eyebrow" style={coralText}>
            Start here
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              See what's happening
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#newsletter"
              className="inline-flex items-center px-5 py-2.5 border border-foreground/20 text-sm font-medium hover:border-foreground/60 transition-colors"
            >
              Get updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBentoGrid;