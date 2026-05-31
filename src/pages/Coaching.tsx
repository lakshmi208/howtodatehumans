import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';
import magnet from '@/assets/coaching/magnet.jpg';
import jumpstart from '@/assets/coaching/jumpstart.jpg';
import fireworks from '@/assets/coaching/fireworks.jpg';

const eyebrowCoral = { color: 'hsl(var(--coral))' };

type Offering = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  cta: { label: string; href: string; external?: boolean };
};

// Photos go in src/assets/coaching/. Filenames:
//   magnet.jpg · cables.jpg · fireworks.jpg
// Lakshmi's portrait reuses the existing /assets/lakshmi-portrait.jpg.
// If a file isn't found at build time the build fails — drop them in first,
// then we'll wire the imports below.
const offerings: Offering[] = [
  {
    eyebrow: '90 minutes · Single session',
    title: 'Magnetic storytelling for Gen X daters.',
    body:
      'A 90-minute session where we start building your bank of stories — and you start to see how you might be sitting on your best material. What people call "baggage" is often exactly what leads to connection. You leave with three stories ready to reshape the conversations you have, around what\'s actually made you, well, you. Built for the unique stakes of early dates — and a taste of what expert date coaching actually feels like. Way more than tips and tricks.',
    image: magnet,
    imageAlt: 'A magnet — drawing the right person in',
    cta: {
      label: 'Book a session',
      href: 'mailto:info@howtodatehumans.com?subject=Storytelling%20session',
    },
  },
  {
    eyebrow: 'Short series · Gen X men',
    title: 'Jumpstart sessions.',
    body:
      "A short series of sessions, mixed with light coaching, to get you oriented and ready to navigate today's world of dating. Designed to make sure you don't repeat the past — and instead build the future you actually want now.",
    image: jumpstart,
    imageAlt: 'Jumper cables — getting reoriented quickly',
    cta: {
      label: 'Tell me more',
      href: 'mailto:info@howtodatehumans.com?subject=Jumpstart%20inquiry%20%E2%80%94%20Gen%20X%20men',
    },
  },
  {
    eyebrow: 'Custom curriculum',
    title: 'Gen X women who did not marry (so far).',
    body:
      'This widely misunderstood cohort is poised to make the most of the new era of dating. A custom curriculum designed for heterosexual women who did not marry, helping you shape an authentic set of skills and stories to leverage — rather than apologize for — why you held out, and why it\'s worth holding up.',
    image: fireworks,
    imageAlt: 'Fireworks — what becomes possible',
    cta: {
      label: 'Tell me more',
      href: 'mailto:info@howtodatehumans.com?subject=Coaching%20inquiry%20%E2%80%94%20women%20who%20did%20not%20marry',
    },
  },
  {
    eyebrow: 'Not quite one of the three',
    title: 'General coaching inquiries.',
    body:
      "If none of the above quite fits, write me directly. Sometimes the most useful work is the kind that doesn't have a name yet.",
    image: lakshmiPortrait,
    imageAlt: 'Lakshmi Rengarajan',
    cta: {
      label: 'Email Lakshmi',
      href: 'mailto:lakshmi@howtodatehumans.com?subject=Coaching%20inquiry',
    },
  },
];

const Coaching = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-12">
        <p className="eyebrow mb-6" style={eyebrowCoral}>
          Coaching
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-8">
          Coaching, calibrated for <em>Gen X</em>.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl">
          Storytelling is the spine of modern dating — the skill that turns a passing
          question into the start of something. These are the four ways we apply that work,
          calibrated to where you actually are.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        {offerings.map((o) => {
          const isInternal = !o.cta.href.startsWith('mailto:') && !o.cta.href.startsWith('http');
          const isMail = o.cta.href.startsWith('mailto:');
          return (
            <article key={o.title} className="py-12 border-t border-border">
              <div className="flex items-center gap-5 mb-5">
                {o.image && (
                  <div className="shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-muted">
                    <img
                      src={o.image}
                      alt={o.imageAlt ?? ''}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="eyebrow">{o.eyebrow}</p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-5">
                {o.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl mb-7">
                {o.body}
              </p>
              {isInternal ? (
                <Link to={o.cta.href} className="btn-pill">
                  {o.cta.label} <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <a href={o.cta.href} className="btn-pill">
                  {isMail && <Mail className="w-4 h-4" />}
                  {o.cta.label}
                </a>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Coaching;
