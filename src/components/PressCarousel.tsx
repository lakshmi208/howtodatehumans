import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import nyt from '@/assets/press/nyt.png';
import iftf from '@/assets/press/iftf.png';
import landOfTheGiants from '@/assets/press/land-of-the-giants.jpg';
import profG from '@/assets/press/prof-g.jpg';
import pivotPod from '@/assets/press/pivot-pod.jpg';
import karaSwisher from '@/assets/press/kara-swisher-on-microphone-min.webp';
import offline from '@/assets/press/offline-jon-favreau.webp';
import vanityFair from '@/assets/press/vanity-fair.png';
import weWork from '@/assets/press/we-work-logo-min.webp';

type PressTile = {
  outlet: string;
  image: string;
  url: string;
};

const tiles: PressTile[] = [
  {
    outlet: 'Pivot with Kara Swisher & Scott Galloway',
    image: pivotPod,
    url: 'https://podcasts.apple.com/us/podcast/best-friends-of-pivot/id1073226719?i=1000639439067',
  },
  {
    outlet: 'The New York Times',
    image: nyt,
    url: 'https://www.nytimes.com/2025/01/03/style/dating-predictions.html',
  },
  {
    outlet: 'Institute for the Future',
    image: iftf,
    url: 'https://www.iftf.org/insights/who-is-controlling-our-romantic-futures-and-what-your-heart-can-do-about-it-the-perils-and-promise-of-ai-in-modern-dating/',
  },
  {
    outlet: 'Land of the Giants — Dating Games',
    image: landOfTheGiants,
    url: 'https://podcasts.apple.com/us/podcast/the-big-business-of-online-dating-land-of-the-giants/id1643307527?i=1000597693218',
  },
  {
    outlet: 'The Prof G Pod with Scott Galloway',
    image: profG,
    url: '#',
  },
  {
    outlet: 'On with Kara Swisher',
    image: karaSwisher,
    url: '#',
  },
  {
    outlet: 'Offline with Jon Favreau',
    image: offline,
    url: 'https://www.youtube.com/watch?v=fXdqNRIq3JI',
  },
  {
    outlet: 'Vanity Fair',
    image: vanityFair,
    url: 'https://www.vanityfair.com/style/2021/08/08/meet-the-former-matchcom-director-turned-old-school-setup-evangelist',
  },
  {
    outlet: 'WeWork',
    image: weWork,
    url: '/lakshmi',
  },
];

const PressCarousel = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-3xl ml-auto text-right mb-10 md:mb-14">
        I've been urging people to date like humans for <em>awhile</em>.
      </h2>

      <Carousel
        opts={{ align: 'start', loop: false }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {tiles.map((tile) => {
            const isExternal = tile.url.startsWith('http');
            return (
              <CarouselItem
                key={tile.outlet}
                className="pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <a
                  href={tile.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="block group"
                  aria-label={tile.outlet}
                >
                  <div className="aspect-square overflow-hidden bg-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:-translate-y-1">
                    <img
                      src={tile.image}
                      alt={tile.outlet}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground text-center px-1">
                    {tile.outlet}
                  </p>
                </a>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-8">
          <CarouselPrevious
            className="static translate-y-0 h-10 w-10 bg-transparent border-foreground/30 text-foreground hover:bg-transparent hover:border-foreground"
            variant="outline"
          />
          <CarouselNext
            className="static translate-y-0 h-10 w-10 bg-transparent border-foreground/30 text-foreground hover:bg-transparent hover:border-foreground"
            variant="outline"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default PressCarousel;
