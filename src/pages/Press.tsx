import { motion } from 'framer-motion';
import { ExternalLink, Newspaper, Mic, FileText } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import NewsletterSignup from '@/components/NewsletterSignup';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

type PressItem = {
  outlet: string;
  title: string;
  url: string;
  year?: string;
};

const articles: PressItem[] = [
  {
    outlet: 'Vanity Fair',
    title: 'Meet the former Match.com director turned old-school setup evangelist',
    url: 'https://www.vanityfair.com/style/2021/08/08/meet-the-former-matchcom-director-turned-old-school-setup-evangelist',
    year: '2021',
  },
  {
    outlet: 'The New York Times',
    title: 'Dating predictions',
    url: 'https://www.nytimes.com/2025/01/03/style/dating-predictions.html',
    year: '2025',
  },
  {
    outlet: 'The New York Times',
    title: 'Dating app hacks: gaming the algorithm',
    url: 'https://www.nytimes.com/2024/02/09/style/dating-app-hacks-algorithm.html',
    year: '2024',
  },
  {
    outlet: 'The New York Times',
    title: 'No scrolling required at new dating sites',
    url: 'https://www.nytimes.com/2012/04/15/fashion/no-scrolling-required-at-new-dating-sites.html',
    year: '2012',
  },
];

const podcasts: PressItem[] = [
  {
    outlet: 'Land of the Giants — Vox Media',
    title: 'The big business of online dating',
    url: 'https://podcasts.apple.com/us/podcast/the-big-business-of-online-dating-land-of-the-giants/id1643307527?i=1000597693218',
    year: '2022',
  },
  {
    outlet: 'Pivot — Kara Swisher & Scott Galloway',
    title: 'Best Friends of Pivot',
    url: 'https://podcasts.apple.com/us/podcast/best-friends-of-pivot/id1073226719?i=1000639439067',
    year: '2023',
  },
  {
    outlet: 'Dating Games',
    title: 'Featured episode',
    url: 'https://podcasts.apple.com/us/podcast/dating-games/id1465767420?i=1000592320726',
  },
  {
    outlet: 'Spotify',
    title: 'Dating Games — episode',
    url: 'https://open.spotify.com/episode/7hkYnqY01lAzJWGNYUTPsQ',
  },
  {
    outlet: 'Spotify',
    title: 'Featured conversation',
    url: 'https://open.spotify.com/episode/0ayHjT2ZOX5UVyWNxJEPLJ',
  },
  {
    outlet: 'YouTube',
    title: 'Featured talk',
    url: 'https://www.youtube.com/watch?v=fXdqNRIq3JI',
  },
];

const research: PressItem[] = [
  {
    outlet: 'Institute for the Future',
    title:
      'Who is controlling our romantic futures — and what your heart can do about it: the perils and promise of AI in modern dating',
    url: 'https://www.iftf.org/insights/who-is-controlling-our-romantic-futures-and-what-your-heart-can-do-about-it-the-perils-and-promise-of-ai-in-modern-dating/',
  },
];

const Section = ({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Newspaper;
  title: string;
  items: PressItem[];
}) => (
  <motion.div {...fadeUp} className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
    </div>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 p-4 rounded-xl bg-card border border-border hover:border-[hsl(var(--primary))] hover:shadow-sm transition-all"
          >
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--primary))] mb-1">
                {item.outlet}
                {item.year && (
                  <span className="text-muted-foreground font-medium normal-case tracking-normal ml-2">
                    · {item.year}
                  </span>
                )}
              </p>
              <p className="text-base md:text-lg font-medium leading-snug group-hover:underline">
                {item.title}
              </p>
            </div>
            <ExternalLink className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-[hsl(var(--primary))] transition-colors mt-1" />
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="max-w-3xl mx-auto px-6 pt-24 pb-12">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-4">
            Press & Appearances
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Quoted, profiled, and on the record about what's happened to dating.
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Fifteen years of conversations across publications, podcasts, and research about how connection
            is changing — and what to do about it.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <Section icon={Newspaper} title="Articles" items={articles} />
        <Section icon={Mic} title="Podcasts & Talks" items={podcasts} />
        <Section icon={FileText} title="Research" items={research} />
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default Press;
