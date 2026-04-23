import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type PressTile = {
  outlet: string;
  context?: string;
  url: string;
  bg: string;
  text: string;
  font?: string;
};

const tiles: PressTile[] = [
  {
    outlet: 'On with Kara Swisher',
    context: 'Best Friends of Pivot · 2023',
    url: 'https://podcasts.apple.com/us/podcast/best-friends-of-pivot/id1073226719?i=1000639439067',
    bg: 'bg-[#111111]',
    text: 'text-white',
    font: 'font-[\'Playfair_Display\',serif] italic',
  },
  {
    outlet: 'Offline with Jon Favreau',
    context: 'Crooked Media',
    url: 'https://www.youtube.com/watch?v=fXdqNRIq3JI',
    bg: 'bg-gradient-to-br from-[#a78bfa] via-[#f472b6] to-[#fb923c]',
    text: 'text-white',
  },
  {
    outlet: 'The New York Times',
    context: 'Quoted, multiple times',
    url: 'https://www.nytimes.com/2025/01/03/style/dating-predictions.html',
    bg: 'bg-black',
    text: 'text-white',
    font: 'font-[\'Playfair_Display\',serif]',
  },
  {
    outlet: 'Vanity Fair',
    context: 'Profiled · 2021',
    url: 'https://www.vanityfair.com/style/2021/08/08/meet-the-former-matchcom-director-turned-old-school-setup-evangelist',
    bg: 'bg-[#d63b1f]',
    text: 'text-white',
    font: 'font-[\'Playfair_Display\',serif] uppercase tracking-widest',
  },
  {
    outlet: 'WeWork',
    context: 'First-ever Director of Workplace Connection',
    url: '/lakshmi',
    bg: 'bg-white border border-border',
    text: 'text-black',
    font: 'font-bold',
  },
  {
    outlet: 'Land of the Giants',
    context: 'Co-host · Vox Media · Dating Games',
    url: 'https://podcasts.apple.com/us/podcast/the-big-business-of-online-dating-land-of-the-giants/id1643307527?i=1000597693218',
    bg: 'bg-[hsl(var(--primary))]',
    text: 'text-white',
    font: 'font-bold uppercase tracking-wider',
  },
  {
    outlet: 'Institute for the Future',
    context: 'Authored research paper',
    url: 'https://www.iftf.org/insights/who-is-controlling-our-romantic-futures-and-what-your-heart-can-do-about-it-the-perils-and-promise-of-ai-in-modern-dating/',
    bg: 'bg-[#1f3a5f]',
    text: 'text-white',
    font: 'font-semibold',
  },
];

const PressCarousel = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-12 text-center md:text-right"
      >
        <h2 className="font-[\'Playfair_Display\',serif] text-3xl md:text-5xl leading-tight max-w-2xl md:ml-auto">
          I've been urging people to date like humans for{' '}
          <em className="text-[hsl(var(--primary))]">awhile</em>.
        </h2>
      </motion.div>

      <Carousel
        opts={{ align: 'start', loop: false }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {tiles.map((tile) => {
            const isExternal = tile.url.startsWith('http');
            const TileInner = (
              <div
                className={`relative aspect-square rounded-xl shadow-md overflow-hidden p-6 flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.02] ${tile.bg} ${tile.text}`}
              >
                <ExternalLink className="self-end w-5 h-5 opacity-0 group-hover:opacity-70 transition-opacity" />
                <div>
                  <p className={`text-2xl md:text-3xl leading-tight ${tile.font ?? 'font-bold'}`}>
                    {tile.outlet}
                  </p>
                  {tile.context && (
                    <p className="mt-3 text-xs md:text-sm opacity-80 leading-snug">
                      {tile.context}
                    </p>
                  )}
                </div>
              </div>
            );
            return (
              <CarouselItem
                key={tile.outlet}
                className="pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <a
                  href={tile.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group block"
                  aria-label={`${tile.outlet} — ${tile.context ?? ''}`}
                >
                  {TileInner}
                </a>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-6">
          <CarouselPrevious
            className="static translate-y-0 h-10 w-10"
            variant="outline"
          />
          <CarouselNext
            className="static translate-y-0 h-10 w-10"
            variant="outline"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default PressCarousel;
