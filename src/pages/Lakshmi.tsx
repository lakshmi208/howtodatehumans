import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SiteNav from '@/components/SiteNav';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const milestones = [
  {
    year: '2011',
    project: 'ME so far',
    question: 'Can we reimagine singles events?',
    description:
      'Started tracking what was shifting in how people meet. Built and ran reimagined singles events that rejected speed dating and forced icebreakers in favor of environments where people could actually unfold.',
  },
  {
    year: '2014',
    project: 'Match.com',
    question: 'Can I work inside the system?',
    description:
      'Went inside the machine as a Director at Match.com to understand how the platform shaped behavior from the inside out. Learned what the data said about people and what it missed entirely.',
  },
  {
    year: '2018',
    project: 'WeWork',
    question: 'Can we apply dating to work?',
    description:
      'Became WeWork\'s first-ever Director of Workplace Connection. The same skills that make dating work — reading a room, building trust, creating belonging — turned out to be the ones workplaces were quietly losing too.',
  },
  {
    year: '2021',
    project: 'Paired by the People',
    question: 'What makes a good setup?',
    description:
      'Built a matchmaking experience that put the power back in the hands of friends and community. Because the best dating app might be your best friend.',
  },
  {
    year: '2022',
    project: 'Land of the Giants',
    question: 'How did dating culture form?',
    description:
      'Co-hosted Vox Media\'s Land of the Giants: Dating Games podcast, tracing how the platforms we built to find love ended up reshaping how we treat each other.',
  },
  {
    year: '2023',
    project: 'The Later Dater Today',
    question: 'How is midlife dating different today?',
    description:
      'Unpacked the lives of modern midlife daters. Authored a paper for the Institute for the Future examining how technology is reshaping our romantic futures.',
  },
  {
    year: '2026',
    project: 'How to Date Humans',
    question: 'Why date humans?',
    description:
      'The last project. A love letter to Chicago and to the question that started it all. A year-long experiment to change dating culture in one city, done well, as a model for what could travel.',
    isCurrent: true,
  },
];

const Lakshmi = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-4">
            15 years. One question.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            How do we get to{' '}
            <span className="text-[hsl(var(--primary))]">know</span> each other?
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
            Every project I've built, every role I've taken, every stage I've stood on has been in service of the same question. The venues changed. The question never did.
          </p>
        </motion.div>
      </section>

      {/* Timeline Arc */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-[hsl(var(--timeline-line))]" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div
                  className={`absolute left-3.5 top-1.5 w-5 h-5 rounded-full border-[3px] ${
                    m.isCurrent
                      ? 'bg-[hsl(var(--primary))] border-[hsl(var(--primary))]'
                      : 'bg-background border-[hsl(var(--timeline-line))]'
                  }`}
                />

                {/* Year */}
                <p className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--primary))] mb-1">
                  {m.year}
                </p>

                {/* Project name */}
                <h3
                  className={`text-xl md:text-2xl font-bold mb-1 ${
                    m.isCurrent ? 'text-[hsl(var(--primary))]' : ''
                  }`}
                >
                  {m.project}
                </h3>

                {/* Question */}
                <p className="text-base md:text-lg italic text-muted-foreground mb-2">
                  "{m.question}"
                </p>

                {/* Description */}
                <p className="text-base leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Thread */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">The thread</h2>

          <p className="text-base md:text-lg leading-relaxed">
            Whether people feel they can date is a barometer for something much bigger. Every project on that timeline was a different angle on the same problem: we are losing the art of getting to know each other. Not just romantically. At work. In friendships. In neighborhoods.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I've been quoted in the <span className="font-semibold">New York Times</span>, profiled in <span className="font-semibold">Vanity Fair</span>, and appeared on The Pivot Podcast, Offline with Jon Favreau, and The Prof G Pod with Scott Galloway. But the credential that matters most is this: I've been paying attention to this problem longer than almost anyone, and I haven't stopped.
          </p>
        </motion.div>
      </section>

      {/* Love Letter */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div
          {...fadeUp}
          className="border-l-4 border-[hsl(var(--primary))] pl-6 space-y-4"
        >
          <p className="text-base md:text-lg leading-relaxed">
            How to Date Humans is the last project. Not because I'm done caring, but because it's the version that says everything I've been trying to say. A love letter to Chicago and to the belief that we will run into people and get to know them well enough that connection actually means something.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-semibold text-[hsl(var(--primary))]">
            One question. One city. One year to prove it still matters.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div
          {...fadeUp}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">See what we're building</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            A full year of events, workshops, and experiments in Chicago.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2">
              See the Timeline
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Lakshmi;
