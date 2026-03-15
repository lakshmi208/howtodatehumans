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
            Dating is the art of getting to know others. And we're hilariously bad at it now.
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
            Not just on apps. At work, in our neighborhoods, even among friends. The whole system changed around us and nobody so much as sent a memo.
          </p>
        </motion.div>
      </section>

      {/* The Story */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">The story</h2>

          <p className="text-base md:text-lg leading-relaxed">
            I've been saying since 2011 that dating is not just something single people do. And when I say that in a room, I watch people's posture change. Married, partnered, "it's complicated": everybody feels it. The art of getting to know people is vanishing, and it's not just a singles problem.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            In 2009, I started tracking what was shifting in how people meet, and I haven't stopped since. Fifteen years of research, reimagining singles events, a{' '}
            <span className="font-semibold">Vox Media podcast</span>, unpacking the lives of modern midlife daters, and stints inside{' '}
            <span className="font-semibold">Match.com</span> and{' '}
            <span className="font-semibold">WeWork</span>. One throughline: keeping the humanity in dating while everything around it tried really hard to remove it.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Dating culture is the canary in the coal mine. It's where shifts in trust, patience, and risk tolerance show up first, before they leak into workplaces, friendships, and civic life. The loneliness epidemic, the crisis at work, the collapse of third places, AI girlfriends: these aren't separate problems. They share a root system. Dating is just where the cracks showed up first.
          </p>
        </motion.div>
      </section>

      {/* The Turning Point */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">The turning point</h2>

          <p className="text-base md:text-lg leading-relaxed">
            There's a moment in the How to Date Humans presentation where I focus on 2010: that liminal space when smartphones were in our pockets but dating apps hadn't crashed the party yet. You can feel the room shift when people realize how recently everything changed. Like, we're talking a blink ago.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            The same patterns that made dating feel like online shopping (filtering people like products, replacing intuition with optimization, treating humans like inventory) migrated into how we work, befriend, and connect. Most people feel it but can't quite name it: we've lost a set of skills that used to come naturally. And we lost them way faster than anyone realizes.
          </p>
        </motion.div>
      </section>

      {/* The Project */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">The project</h2>

          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-[hsl(var(--primary))]">How to Date Humans</span> is a year-long project (Feb 2026–2027) asking a deceptively simple question:{' '}
            <em>what happened to dating, and what would it take to bring it back?</em>
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            It unfolds in phases. First: research and recalibration through salons, talks, and workshops that help people understand what actually shifted. Later: reimagined singles events. But here's the trick: by the time we get there, participants have already started resetting how they think about connection. Sneaky? Maybe. Effective? Very.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            It's a multi-dimensional approach: cultural, personal, structural. Research, community, and live experimentation. We connect the dots on <em>how</em> we got here and build real tools and moments to find our way back.
          </p>
        </motion.div>
      </section>

       {/* Why This Moment */}
       <section className="max-w-3xl mx-auto px-6 pb-16">
         <motion.div {...fadeUp} className="space-y-6">
           <h2 className="text-2xl md:text-3xl font-bold">Why this moment</h2>

            <p className="text-base md:text-lg leading-relaxed">
              Let's get this out of the way: this is not a dating tips seminar. Not a speed dating event. Not an eye-gazing workshop or a guide to decoding whether someone likes you. (Spoiler: if you have to decode it, they probably don't.) Those approaches treat dating as a series of techniques you can optimize. The real problem is deeper: we've lost the ability to get a clear read on who someone actually is before we have to decide whether we're interested. That used to happen naturally. Now? Not so much.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              It's not one problem. It's cultural (how we've been taught to think about dating), technical (how platforms reshaped our choices), and structural (the places where we used to meet? gone). Some of these are in our control. Some aren't. But if we don't see the full picture, we end up blaming each other, or ourselves, instead of asking the right question: what actually shifted?
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Here's what's at stake: more people are turning to AI for their relational and emotional needs. And that matters because romantic love, real human connection, is one of the core features of being human. It's not about putting relationships on a pedestal. It's about holding onto a world where we believe we <em>will</em> run into people and get to know them well enough that connection actually means something. Where the decision to pursue someone is based on who they are, not a 3-second swipe.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              This project is about making sure that world doesn't disappear. No pressure.
            </p>
         </motion.div>
       </section>

       {/* Who Is This For */}
       <section className="max-w-3xl mx-auto px-6 pb-16">
         <motion.div {...fadeUp} className="space-y-6">
           <h2 className="text-2xl md:text-3xl font-bold">Who is this for</h2>

           <p className="text-base md:text-lg leading-relaxed">
              You. If you know this feeling, or at least believe it matters: a world where you go from <em>looking at</em> someone to actually <em>seeing</em> them. Where your opinion of someone shifts not because you're being generous or lowering your standards, but because you've observed something real about who they are. That used to happen at work, at summer camp, at the coffee shop where the barista knew your order. We are losing those containers.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Another sign this is for you: you suspect the dating apps didn't just play a role. They've ruined more than they've created. And you're right. But probably not in the way you think.
            </p>
         </motion.div>
       </section>

       {/* What The Apps Actually Did */}
       <section className="max-w-3xl mx-auto px-6 pb-16">
         <motion.div {...fadeUp} className="space-y-6">
           <h2 className="text-2xl md:text-3xl font-bold">What the apps actually did</h2>

            <p className="text-base md:text-lg leading-relaxed">
              The common critique ("paradox of choice," "numbers game") is v1 thinking. Cute, but incomplete. What actually happened is deeper: the apps changed people's internal wiring. Early on, they were just a doorway. You matched, you met, normal human dynamics took over. Then the apps <span className="font-semibold">stopped being the doorway and became the room</span>. Quick judgment, disposability, infinite optionality: those behaviors leaked out and colonized dating culture itself. That's not app behavior anymore. That's how people act on a Tuesday night at a bar. Congrats, we all have app brain now.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Now <span className="font-semibold">90% of Gen Z report frustration</span> with dating apps. People are deleting them in record numbers. But here's the trap: you can delete Tinder, but you can't delete what Tinder did to how people treat each other. The apps made evaluating and discarding people on thin information frictionless and normal. That reshaped the culture for <em>everyone</em>, including people who never downloaded them. Even Hinge knows it: they launched a <span className="font-semibold">$1 million fund</span> for in-person events. Which is corporate for "we broke something algorithms can't fix."
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
             The room at The Hoxton's Working From_ told the story before I even opened my mouth. Long-time marriages, couples who met on apps, singles, plenty of divorcees, people on what they called a "dating sabbatical," and young people who'd rather fight a bear than download Hinge. All in the same room. That mix? That's the whole point.
           </p>
           <p className="text-base md:text-lg leading-relaxed">
             It wasn't a singles event. It was a room full of people who were done pointing at the wreckage and ready to actually do something about it.
           </p>
        </motion.div>
      </section>

      {/* Why Chicago */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Why Chicago</h2>

           <p className="text-base md:text-lg leading-relaxed">
             We rate cities on everything: transit, jobs, weather, food, art, museums, nightlife. But what about the best city to <em>date</em>? What would that even look like? Because the cities with the best restaurants and the most interesting culture aren't always the best cities to meet someone. Density of people ≠ proximity to connection.
           </p>

           <p className="text-base md:text-lg leading-relaxed">
             Chicago is a city of 77 neighborhoods where people still know their bartender, have a regular spot, and actually <em>live</em> where they live. Its{' '}
             <span className="font-semibold">neighborhood bar culture is one-of-a-kind</span>. From Polish taverns to South Side shot-and-a-beer joints, the third places that make organic connection possible haven't been bulldozed here the way they have on the coasts. The raw ingredients for a great dating city? Already here.
           </p>

           <p className="text-base md:text-lg leading-relaxed">
             But the cracks are showing. In 2024, Chicago was{' '}
             <span className="font-semibold">voted one of the worst cities in the U.S. for dating</span>. Ouch. The same app-driven behaviors (disposability, over-optimization, snap judgments on thin information) have colonized how people treat each other here too. The infrastructure for connection exists. The culture around it is what broke.
           </p>

           <p className="text-base md:text-lg leading-relaxed">
             So what would make Chicago a great city for dating? Maybe start by getting a whole bunch of people, single and non-single alike, on the same page about what happened. Not a singles event. A city-wide recalibration.
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
            I've spent 15 years embedded in dating culture: researching, designing singles events, and tracking how human connection erodes. I co-hosted{' '}
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

      {/* How We'll Know */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">How will we know we've succeeded?</h2>

           <p className="text-base md:text-lg leading-relaxed">
             Great question, terrible framing. "How do you know it works? How will it scale?" If those are your first questions, you missed the point. That default thinking is literally what got us here.
           </p>

           <p className="text-base md:text-lg leading-relaxed">
             Success won't be black and white. It might look more like this:
           </p>

           <ul className="space-y-3 text-base md:text-lg leading-relaxed pl-1">
             <li className="flex gap-3"><span className="text-[hsl(var(--primary))] mt-1.5 shrink-0">·</span><span>A couple showing up because they don't know how to set up their single friend beyond "they're amazing, you'd love them." Now they have an actual framework for when the right moment presents itself.</span></li>
             <li className="flex gap-3"><span className="text-[hsl(var(--primary))] mt-1.5 shrink-0">·</span><span>A firefighter turning their shift into a story someone actually wants to hear over dinner.</span></li>
             <li className="flex gap-3"><span className="text-[hsl(var(--primary))] mt-1.5 shrink-0">·</span><span>A Gen Zer picking up analog habits from Gen Xers who dated before the internet decided who was available.</span></li>
             <li className="flex gap-3"><span className="text-[hsl(var(--primary))] mt-1.5 shrink-0">·</span><span>People choosing a restaurant for connection potential over Yelp ratings.</span></li>
             <li className="flex gap-3"><span className="text-[hsl(var(--primary))] mt-1.5 shrink-0">·</span><span>A midlife dater realizing they can't just copy/paste dating advice meant for 25-year-olds.</span></li>
             <li className="flex gap-3"><span className="text-[hsl(var(--primary))] mt-1.5 shrink-0">·</span><span>People opening their dating app like a door into possibility rather than an exercise in thumb cardio.</span></li>
             <li className="flex gap-3"><span className="text-[hsl(var(--primary))] mt-1.5 shrink-0">·</span><span>People developing crushes again. (Remember those?)</span></li>
           </ul>

           <p className="text-base md:text-lg leading-relaxed">
             Like anything related to culture: slow, and then sudden.
           </p>

           <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
             But yea, we'll take a survey too. And a headline like "Chicago became the best city to date in — here's why and here's how they did it" would be pretty awesome.
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
