import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';

const sectionWrap = 'max-w-4xl mx-auto px-6';
const eyebrowCoral = { color: 'hsl(var(--coral))' };

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* WHAT */}
      <section className={`${sectionWrap} pt-20 md:pt-28 pb-16 md:pb-24`}>
        <p className="eyebrow mb-6" style={eyebrowCoral}>
          What
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-8">
          Dating is the bridge to relationships. The bridge is broken.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-10">
          <em>How to Date Humans</em> is a year-long project to find out why.
          Feb 2026 to Feb 2027. In Chicago. Salons, workshops, talks, research,
          listening sessions. One question driving all of it:{' '}
          <em>what actually broke, and what would it take to repair it?</em>
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-base font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          About the project <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* WHY */}
      <section className={`border-t border-border ${sectionWrap} py-16 md:py-24`}>
        <p className="eyebrow mb-6" style={eyebrowCoral}>
          Why
        </p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.04] mb-8">
          The bridge cracked under load.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl">
          The skills that used to make dating work — reading a room, holding
          interest, knowing whether you're actually attracted or just performing
          — don't transmit anymore. Apps cracked the foundations. Disposability
          did the rest. And this isn't just about dating. The same broken pieces
          are now showing up in how we work, befriend, and meet our neighbors.
          We're spending a year looking at what broke, why, and what it would
          take to put it back together.
        </p>
      </section>

      {/* HOW */}
      <section className={`border-t border-border ${sectionWrap} py-16 md:py-24`}>
        <p className="eyebrow mb-6" style={eyebrowCoral}>
          How
        </p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.04] mb-8">
          Step one is understanding what actually broke.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-14">
          Most dating advice rushes to step two —{' '}
          <em>go to events, delete the apps, just put yourself out there.</em>{' '}
          None of it works if you don't know what you're working with. So we're
          spending the year on step one, in public. Listening. Documenting. Then
          building from what we hear.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <Link
            to="/research"
            className="group block border-t border-foreground/20 pt-5"
          >
            <p className="font-display text-2xl mb-2" style={eyebrowCoral}>
              01
            </p>
            <h3 className="font-display text-xl md:text-2xl leading-snug mb-3">
              Research
            </h3>
            <p className="text-base text-foreground/80 mb-4 leading-relaxed">
              We're listening to specific groups this month: never-married
              women, divorced men, Gen Z.
            </p>
            <span className="text-sm font-medium underline underline-offset-4 group-hover:opacity-70 transition-opacity">
              See what we're listening for →
            </span>
          </Link>

          <Link
            to="/events"
            className="group block border-t border-foreground/20 pt-5"
          >
            <p className="font-display text-2xl mb-2" style={eyebrowCoral}>
              02
            </p>
            <h3 className="font-display text-xl md:text-2xl leading-snug mb-3">
              Events &amp; Talks
            </h3>
            <p className="text-base text-foreground/80 mb-4 leading-relaxed">
              Three events done. More on deck. The full timeline of what's
              happened and what's coming.
            </p>
            <span className="text-sm font-medium underline underline-offset-4 group-hover:opacity-70 transition-opacity">
              Past + upcoming →
            </span>
          </Link>

          <Link
            to="/originals"
            className="group block border-t border-foreground/20 pt-5"
          >
            <p className="font-display text-2xl mb-2" style={eyebrowCoral}>
              03
            </p>
            <h3 className="font-display text-xl md:text-2xl leading-snug mb-3">
              Originals — coming this fall
            </h3>
            <p className="text-base text-foreground/80 mb-4 leading-relaxed">
              A few one-of-a-kind events you won't find on any calendar.
              Limited. By application.
            </p>
            <span className="text-sm font-medium underline underline-offset-4 group-hover:opacity-70 transition-opacity">
              See past Originals →
            </span>
          </Link>
        </div>
      </section>

      {/* WHO */}
      <section className={`border-t border-border ${sectionWrap} py-16 md:py-24`}>
        <p className="eyebrow mb-6" style={eyebrowCoral}>
          Who
        </p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.04] mb-8">
          Meet Lakshmi <span style={eyebrowCoral} className="italic">(luck-shmee)</span>.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-10">
          Hi, I'm Lakshmi. Fifteen years in the weeds of dating culture — at
          Match.com, at WeWork, in research, on stage. This year I'm spending
          the time most coaches won't: looking at what actually broke before
          anyone tries to claim they can fix it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/about#lakshmi"
            className="inline-flex items-center gap-2 text-base font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Full bio <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/lakshmi"
            className="inline-flex items-center gap-2 text-base font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Career timeline <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border">
        <NewsletterSignup />
      </section>
    </div>
  );
};

export default Index;
