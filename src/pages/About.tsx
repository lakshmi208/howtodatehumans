import SiteNav from '@/components/SiteNav';
import InsightCard from '@/components/InsightCard';
import EventSummaryCard from '@/components/EventSummaryCard';
import PressCarousel from '@/components/PressCarousel';

import canary from '@/assets/insights/canary.jpg';
import phone from '@/assets/insights/phone.jpg';
import genz from '@/assets/insights/genz.jpg';
import chicago from '@/assets/insights/chicago.jpg';

import lakshmiPortrait from '@/assets/lakshmi-portrait.jpg';
import workingFromHoxton from '@/assets/working-from-hoxton.jpeg';
import event1 from '@/assets/event-1.jpeg';
import event3 from '@/assets/event-3.jpeg';

const insights = [
  {
    image: canary,
    imageAlt: 'A canary — a warning signal',
    title: 'Dating culture is the canary in the coal mine.',
    body: "It's where shifts in trust, patience, and risk tolerance show up first — before they leak into workplaces, friendships, and civic life.",
  },
  {
    image: phone,
    imageAlt: 'A hand on a phone in a dark room',
    title: 'Apps stopped being the doorway and became the room.',
    body: 'The behaviors people developed on them — quick judgment, disposability, infinite optionality — leaked out and colonized how we treat each other off the apps too.',
  },
  {
    image: genz,
    imageAlt: 'A Gen Z person on a phone',
    title: '90% of Gen Z reports frustration with dating apps.',
    body: 'Even Hinge launched a $1 million fund for in-person events. That\'s corporate for "we broke something algorithms can\'t fix."',
  },
  {
    image: chicago,
    imageAlt: 'A Chicago neighborhood',
    title: 'One question. One city. One year to prove it still matters.',
    body: 'Chicago — a city of 77 neighborhoods where people still know their bartender — is where we\'re testing whether dating culture can be repaired in plain sight.',
  },
];

const eventsSoFar = [
  {
    image: workingFromHoxton,
    date: 'Feb 19, 2026',
    title: 'The Kickoff: How to Date Humans',
    tagline: 'The talk that started the year.',
  },
  {
    image: event3,
    date: 'Mar 24, 2026',
    title: 'Dating Detox',
    tagline: 'A brief history of modern dating — and what happened to us.',
  },
  {
    image: event1,
    date: 'Apr 22, 2026',
    title: 'Dating in Collapse',
    tagline: "The point of dating when it feels like there's no point.",
  },
];

// Career timeline — folded from /lakshmi
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
      "Became WeWork's first-ever Director of Workplace Connection. The same skills that make dating work — reading a room, building trust, creating belonging — turned out to be the ones workplaces were quietly losing too.",
  },
  {
    year: '2021',
    project: 'Paired by the People',
    question: 'What makes a good setup?',
    description:
      'A podcast exploring the lost art of the setup. Not matchmaking (that industry is a whole other beast). This was about empowering regular people to set each other up, finding the best setup stories, and figuring out what actually made them work. Featured in Vanity Fair. Because the best dating app might just be your best friend.',
  },
  {
    year: '2022',
    project: 'Land of the Giants',
    question: 'How did dating culture form?',
    description:
      "Co-hosted Vox Media's Land of the Giants: Dating Games podcast, tracing how the platforms we built to find love ended up reshaping how we treat each other. Along the way, landed a conversation with Kara Swisher and Scott Galloway on Pivot (and yes, got in a shared jab at Scott with Kara). The episode was selected as one of their \"Best Friends of Pivot\" favorites alongside Esther Perel and Mehdi Hasan.",
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
      'The current project. A love letter to Chicago and to the question that started it all. A year-long experiment to change dating culture in one city, done well, as a model for what could travel.',
    isCurrent: true,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Top: anchor buttons */}
      <section className="max-w-4xl mx-auto px-6 pt-20 md:pt-24 pb-8">
        <p className="eyebrow mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
          About
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#project" className="btn-pill">About the Project</a>
          <a href="#lakshmi" className="btn-pill-outline">About Lakshmi</a>
        </div>
      </section>

      {/* About the Project */}
      <section id="project" className="max-w-4xl mx-auto px-6 pt-16 pb-12 scroll-mt-20">
        <p className="eyebrow mb-3">About the Project</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.04] mb-8">
          Connection is human fuel. Dating is where things started to break.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-6">
          The state of dating is really about what we think our hearts will experience —
          who we might cross paths with, and who will actually get to know us. These
          questions quietly pulse in everyone.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl mb-12">
          How to Date Humans is a year-long project (Feb 2026 → Feb 2027) — Chicago
          salons, listening sessions, talks, and research. To look into what happened
          to modern connection through the lens of dating, and see if we can turn things
          around.
        </p>

        {/* Insights */}
        <div className="mt-4">
          {insights.map((i) => (
            <InsightCard key={i.title} {...i} />
          ))}
        </div>
      </section>

      {/* Events so far */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        <p className="eyebrow mb-3">Events So Far</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-3 max-w-3xl">
          The project, on the record.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mb-10">
          Three events done. Full case studies coming as we write them up: the where,
          the why, what we heard, and what we learned.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {eventsSoFar.map((e) => (
            <EventSummaryCard key={e.title} {...e} />
          ))}
        </div>
      </section>

      {/* About Lakshmi */}
      <section id="lakshmi" className="bg-foreground/[0.03] border-t border-border scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="eyebrow mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Meet Lakshmi <span className="normal-case tracking-normal italic">(luck-shmee)</span>
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.04] mb-8">
                The human <em>behind</em> How to Date Humans.
              </h2>

              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p>Hi, I'm Lakshmi.</p>
                <p>
                  I've spent the past 15 years in the weeds of dating culture, being
                  "productively obsessed" with building solutions that help people{' '}
                  <em>actually</em> connect. Now, I'm trying to save us some romantic
                  hope altogether.
                </p>
                <p>
                  I built <em>How to Date Humans</em> as a living reminder of the
                  small, medium &amp; large things that keep us human &amp; make up a
                  romantic life — even if it's as simple as being{' '}
                  <em>the neighbor with the nice blender</em>.
                </p>
                <p>
                  Sometimes this work feels like an uphill battle. Sometimes I wish I
                  just stayed the course &amp; climbed the corporate ladder (maybe I'd
                  be a CMO by now). But in my gut, I knew that this work couldn't wait.
                </p>
                <p>So, we have 2 options:</p>
                <ol className="space-y-2 pl-6 list-decimal marker:text-[hsl(var(--coral))] marker:font-display marker:text-xl">
                  <li>We can stay the course &amp; continue handing our humanity over to technology.</li>
                  <li>
                    Or we can be willing to resurrect things that died for the sake of
                    convenience. We can choose to make our connections mean something
                    — anything. We can choose to believe in love &amp; romance before
                    we lose them <em>for good</em>.
                  </li>
                </ol>
                <p>You know which one I'll be rooting for.</p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:lakshmi@howtodatehumans.com"
                  className="btn-pill"
                >
                  Email Lakshmi
                </a>
                <a href="#career" className="btn-pill-outline">
                  Career timeline
                </a>
                <a href="#press" className="btn-pill-outline">
                  Press
                </a>
              </div>
            </div>

            <div className="md:sticky md:top-24">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={lakshmiPortrait}
                  alt="Lakshmi Rengarajan"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Press lives here — about Lakshmi, not the project (yet) */}
        <div id="press" className="border-t border-border scroll-mt-28">
          <PressCarousel />
        </div>

        {/* Career timeline — folded from /lakshmi */}
        <div id="career" className="border-t border-border scroll-mt-28">
          <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
            <p className="eyebrow mb-3" style={{ color: 'hsl(var(--coral))' }}>
              15 years. One question.
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.06] mb-6">
              How do we get to <em>know</em> each other?
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-16 max-w-2xl">
              Every project I&rsquo;ve built, every role I&rsquo;ve taken, every stage
              I&rsquo;ve stood on has been in service of the same question. The venues
              changed. The question never did.
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-px bg-foreground/20" />

              <div className="space-y-12">
                {milestones.map((m) => (
                  <div key={m.year} className="relative pl-10">
                    {/* Dot */}
                    <div
                      className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                        m.isCurrent
                          ? 'border-transparent'
                          : 'border-foreground/40 bg-background'
                      }`}
                      style={
                        m.isCurrent
                          ? { backgroundColor: 'hsl(var(--coral))' }
                          : undefined
                      }
                    />

                    <p
                      className="eyebrow mb-1"
                      style={{ color: 'hsl(var(--coral))' }}
                    >
                      {m.year}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl leading-snug mb-1">
                      {m.project}
                    </h3>
                    <p className="text-sm md:text-base italic text-muted-foreground mb-2">
                      &ldquo;{m.question}&rdquo;
                    </p>
                    <p className="text-base leading-relaxed text-foreground/85">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
