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

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-4">
            Why This. Why Now. Why Chicago.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Dating is the art of getting to know others. And we're losing it.
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
            Not just on apps. In workplaces, neighborhoods, friendships. An entire system changed around us and nobody handed out a guide.
          </p>
        </motion.div>
      </section>

      {/* The Story */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">The story</h2>

          <p className="text-base md:text-lg leading-relaxed">
            I've been saying since 2011 that dating is not just something single people do. And when I say that in a room, I watch people's posture change. Because everyone knows that art is disappearing, whether they're single or not.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            In 2009, I started tracking what was shifting in how people meet, and I haven't stopped since. Across 15 years of research, reimagining singles events, a{' '}
            <span className="font-semibold">Vox Media podcast</span>, unpacking the lives of modern midlife daters, and work inside companies like{' '}
            <span className="font-semibold">Match.com</span> and{' '}
            <span className="font-semibold">WeWork</span>, I've been committed to the same thing: keeping the humanity in dating, even as everything around it was pulling in the other direction.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Dating culture is a cultural canary. It's where shifts in trust, risk tolerance, and human patience show up first, before they migrate into workplaces, friendships, and civic life. The loneliness epidemic, the disengagement crisis at work, the collapse of third places, the rise of AI companionship: these aren't separate problems. They share a root system, and dating is where the symptoms surfaced earliest.
          </p>
        </motion.div>
      </section>

      {/* The Turning Point */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">The turning point</h2>

          <p className="text-base md:text-lg leading-relaxed">
            There's a moment in the How to Date Humans presentation where I focus on 2010: that liminal space when smartphones were in our pockets but dating apps hadn't entered the fray yet. You can feel the room shift when people realize how recently everything changed — and how much has been lost in a short window.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            The same patterns that made dating feel transactional — filtering people like products, confining relationships to rigid containers, replacing intuition with optimization — migrated into how we work, befriend, and connect. Most people feel it but can't articulate it: we've lost a set of skills that used to come naturally, and we lost them faster than anyone realizes.
          </p>
        </motion.div>
      </section>

      {/* The Project */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">The project</h2>

          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-[hsl(var(--primary))]">How to Date Humans</span> is a year-long project (Feb 2026–2027) asking a simple question:{' '}
            <em>what happened to dating, and what would it take to bring it back?</em>
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            The project unfolds in phases — starting with research and recalibration through salons, talks, and workshops that help people understand what shifted. Later phases introduce reimagined singles events — but the idea is that by then, participants have already started resetting how they think about connection.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            It's a multi-dimensional approach that tackles the problem from different angles: cultural, personal, structural. This is research, community, and live experimentation — connecting the dots for people on <em>how</em> we got here and building real tools and moments to find our way back.
          </p>
        </motion.div>
      </section>

       {/* Why This Moment */}
       <section className="max-w-3xl mx-auto px-6 pb-16">
         <motion.div {...fadeUp} className="space-y-6">
           <h2 className="text-2xl md:text-3xl font-bold">Why this moment</h2>

            <p className="text-base md:text-lg leading-relaxed">
              This is not a dating tips seminar. Not a speed dating event. Not an eye-gazing workshop or a guide to reading whether someone likes you. Those approaches treat dating as a series of techniques you can optimize. But the real problem is deeper: we've lost the ability to get a clear read on who someone actually is before we have to decide whether we're interested. That used to happen naturally. Now it doesn't.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              The work How to Date Humans tackles is multi-dimensional. It's not one problem — it's cultural (how we've been taught to think about dating), technical (how platforms have reshaped our choices), structural (the places where we used to meet no longer exist). Some of these factors are in our control. Some aren't. But if we don't understand the full picture, we end up blaming each other — or ourselves — instead of asking: what actually shifted?
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              We're at a critical point. More people are turning to AI for their relational and emotional needs. And that matters because romantic love — real human connection — is one of the core features of being human. It's not about putting relationships on a pedestal. It's about holding onto a world where we believe we <em>will</em> run into people and get to know them well enough that connection actually means something. Where the decision to pursue someone is based on who they are, not a 3-second swipe.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              This project is about making sure that world doesn't disappear.
            </p>
         </motion.div>
       </section>

       {/* Who Is This For */}
       <section className="max-w-3xl mx-auto px-6 pb-16">
         <motion.div {...fadeUp} className="space-y-6">
           <h2 className="text-2xl md:text-3xl font-bold">Who is this for</h2>

           <p className="text-base md:text-lg leading-relaxed">
             This is for the person who knows this feeling — or at least believes it matters: a world where you go from <em>looking at</em> someone to actually <em>seeing</em> them. Where your opinion of someone shifts not because you're being generous or lowering your standards, but because you've actually observed something real about who they are. That used to happen at work, at summer camp, in any environment where people could unfold over time. We are losing those containers.
           </p>

           <p className="text-base md:text-lg leading-relaxed">
             How else you might know this is for you: you suspect the dating apps didn't just play a role — they've ruined more than they've created. And you're right. But not in the way most people think.
           </p>
         </motion.div>
       </section>

       {/* What The Apps Actually Did */}
       <section className="max-w-3xl mx-auto px-6 pb-16">
         <motion.div {...fadeUp} className="space-y-6">
           <h2 className="text-2xl md:text-3xl font-bold">What the apps actually did</h2>

           <p className="text-base md:text-lg leading-relaxed">
             The common critique — "paradox of choice," "numbers game" — is v1 thinking. What actually happened is deeper: the apps changed people's internal wiring. Early on, they were just a doorway — you matched, you met, and normal human dynamics took over. Then the apps <span className="font-semibold">stopped being the doorway and became the room</span>. Quick judgment, disposability, infinite optionality — those behaviors leaked out and colonized dating culture itself. That's not app behavior anymore. That's how people act on a Tuesday night at a bar.
           </p>

           <p className="text-base md:text-lg leading-relaxed">
             Now <span className="font-semibold">90% of Gen Z report frustration</span> with dating apps. People are deleting them in record numbers. But here's the trap: you can delete Tinder, but you can't delete what Tinder did to the norms around how people treat each other. The apps made evaluating and discarding people on thin information frictionless and normalized — and that reshaped the culture for <em>everyone</em>, including people who never downloaded them. Even Hinge knows it: they launched a <span className="font-semibold">$1 million fund</span> for in-person events — tacitly admitting they broke something algorithms can't fix.
           </p>
         </motion.div>
       </section>

       {/* The Kickoff */}
       <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="border-l-4 border-[hsl(var(--event-kickoff))] pl-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--event-kickoff))]">
            February 19, 2026 · Chapter One
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            The room at The Hoxton's Working From_ told the story even before I started talking. Long-time marriages, couples who met on apps, singles, plenty of divorcees, people on what they called a "dating sabbatical," young people determined to never use a dating app — all in the same room. And that mix is exactly the point.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            It wasn't a singles event. It was a room full of people interested, concerned, and willing to help shift dating culture together instead of just pointing at the wreckage.
          </p>
        </motion.div>
      </section>

      {/* Why Chicago */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Why Chicago</h2>

          <p className="text-base md:text-lg leading-relaxed">
            Dating executives used to joke that the apps "turned every city into New York" — the pace, the paradox of choice, the disposability. And they weren't wrong. The swiping culture that was built for Manhattan's density got exported everywhere, flattening the way people meet in cities that never operated that way.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Chicago resisted longer than most. This is a city of 77 neighborhoods where people still know their bartender, have a regular spot, and actually <em>live</em> where they live. Chicago's{' '}
            <span className="font-semibold">neighborhood bar culture is one-of-a-kind</span> — from Polish taverns to South Side shot-and-a-beer joints, the third places that make organic connection possible haven't been erased here the way they have on the coasts.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            But the cracks are showing. In 2024, Chicago was{' '}
            <span className="font-semibold">voted one of the worst cities in the U.S. for dating</span>. The Chicago Sun-Times, WBEZ, and Northwestern's Medill school have all reported on the wave of swiping fatigue hitting the city — and the grassroots IRL meetups springing up in response. Chicagoans aren't just tired of apps. They're already looking for what comes next.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            That's what makes Chicago the right place. New York and LA <em>defined</em> modern dating culture. Chicago is where we can <em>redefine</em> it — because the neighborhood fabric, the community identity, and the stubborn Midwestern insistence on showing up for each other still exist here.
          </p>

          <p className="text-base md:text-lg leading-relaxed font-semibold text-[hsl(var(--primary))]">
            One city, done well, as a model for what could travel.
          </p>
        </motion.div>
      </section>

      {/* About Lakshmi */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">About Lakshmi</h2>

          <p className="text-base md:text-lg leading-relaxed">
            I've spent 15 years embedded in dating culture — researching, designing singles events, and tracking how human connection erodes. I co-hosted{' '}
            <span className="font-semibold">Land of the Giants: Dating Games</span> for Vox Media, have been quoted multiple times in the{' '}
            <span className="font-semibold">New York Times</span>, and was profiled in{' '}
            <span className="font-semibold">Vanity Fair</span>. I've appeared on The Pivot Podcast, Offline with Jon Favreau, and The Prof G Pod with Scott Galloway.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I'm a former Match.com director and WeWork's first-ever Director of Workplace Connection. I also authored a paper for the{' '}
            <span className="font-semibold">Institute for the Future</span> examining how technology is reshaping our romantic futures.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Whether people feel they can date is a barometer for something much bigger. That's what drives this work.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div
          {...fadeUp}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">More to come. This is chapter one.</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Explore the full year of events, workshops, talks, and experiments we're building in Chicago.
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

export default About;
