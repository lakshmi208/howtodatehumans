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
        <h2 className="font-display text-4xl md:text-6xl leading-[1.04] mb-12">
          The bridge cracked under load.
        </h2>

        <div className="max-w-2xl space-y-10 md:space-y-12">
          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-snug mb-3">
              The advice wasn't wrong.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              We were told to take charge of our love lives — be intentional,
              show up, choose well. The problem is that nobody first asked
              whether the system underneath could carry the weight of those
              choices.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-snug mb-3">
              It's not just the apps.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              The apps scaled — that's what capitalism does. But the real
              damage was quieter: they rewired our insides, and their growth
              depended on the slow death of every other way we used to actually
              connect.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-snug mb-3">
              Older generations don't know more.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              They had infrastructure. Dive bars and corner taverns ruled the
              scene — no 14-ingredient cocktails. Jobs were mini stages where
              people interacted across roles and years. Not perfect, but a lot
              of context to work with.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-snug mb-3">
              The commercial success covered the rest.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              Yes, marriages happened. Couples met. Hinge has the receipts.
              Meanwhile, the rest of us were asked to make snap judgments on
              strangers we somehow already knew everything about. Brains and
              hearts short-circuited. The outside showed some success. The
              inside got a serious downgrade.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-snug mb-3">
              AI is the next move.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              Being slid further into our most personal decisions — who to
              date, whether to leave, what to say. Before that gets built
              without us, this is the moment to pause and ask:{' '}
              <em>what actually broke, and what would it take to repair it?</em>
            </p>
          </div>
        </div>
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
