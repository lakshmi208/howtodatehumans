import { Button } from "@/components/ui/button";

// The Pilot — direct-link only landing page for the inaugural midlife coaching cohort.
// Route: /pilot. Intentionally NOT in main nav or homepage — share via direct link.
// Voice/visual register is deliberately distinct from the broader HTDH brand —
// soulful, contemplative, stone palette. Keep it that way.

const CTA_HREF = "https://calendly.com/lakshmi-howtodatehumans/30min";

const ctaClass =
  "rounded-full border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 px-8 text-sm tracking-wide";

const Pilot = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-serif">
      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-8">
          The Inaugural Pilot · A founding 1:1 round within How to Date Humans
        </p>
        <h1 className="text-4xl md:text-5xl leading-tight text-stone-900 mb-6">
          You didn&apos;t marry so far.
          <br />
          Not because you couldn&apos;t.
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Because you wouldn&apos;t do it the way the world wanted you to — bullied into it,
          checking a box, performing toward an image of love instead of the experience of it.
          This is a space built for exactly that kind of woman.
        </p>
        <Button asChild variant="outline" size="lg" className={ctaClass}>
          <a href={CTA_HREF}>Start a conversation</a>
        </Button>
      </header>

      {/* What two years taught me */}
      <section className="bg-stone-100">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <h2 className="text-2xl text-stone-900 mb-8 text-center">
            What two years of listening taught me
          </h2>
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p>
              I spent more than two years in long conversations — with women, and with men —
              about midlife and love. Among the women who hadn&apos;t married, one quality
              stood out again and again: impeccable integrity. They held love itself above
              all else.
            </p>
            <p>
              In a culture that quietly treats marriage as the finish line, that integrity
              can feel like a disadvantage. I&apos;ve come to believe it&apos;s the opposite —
              it may be your greatest strength, and your moment.
            </p>
            <p>
              You may have arrived at a quiet conclusion:{" "}
              <em>maybe I&apos;m meant to be single.</em> I believe the opposite could be
              true. This may be your window — precisely because there is no rush, no
              deadline, nothing to race.
            </p>
            <p>
              What stayed with me from those interviews: men are re-entering midlife dating
              in a steady stream — and yet the very women who mirrored what so many of them
              are actually looking for were quietly hanging up the towel. I mean, I get it.
              But that math disturbed me.
            </p>
            <p>
              So I made a choice. I&apos;ve coached women across the midlife dating
              landscape for years — divorced, separated, complicated. This next year, I&apos;m
              focusing on the women who didn&apos;t marry. These are my people. This work
              was built for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why nothing out there has fit you */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-stone-200">
        <h2 className="text-2xl text-stone-900 mb-8 text-center">
          Why nothing out there has fit you
        </h2>
        <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
          <p>
            Most midlife dating content assumes one path: married, divorced, kids.
            That&apos;s the unspoken baseline — what the books are written for, what the
            coaches calibrate against, what the podcasts assume.
          </p>
          <p>
            If you didn&apos;t marry, you&apos;ve been getting advice built for someone
            else&apos;s life. Co-parenting frameworks you don&apos;t need.{" "}
            <em>&ldquo;Getting back out there&rdquo;</em> arcs that don&apos;t apply.
            Identity rebuilds for an identity you never built around a husband.
          </p>
          <p>
            The whole field has been quietly excluding you by assuming your story
            didn&apos;t exist.
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-stone-200">
        <h2 className="text-2xl text-stone-900 mb-3 text-center">If this is you</h2>
        <p className="text-center text-stone-500 mb-10">
          A woman somewhere in the Gen X window — roughly 45 to 60.
        </p>
        <ul className="space-y-5 text-lg text-stone-700 leading-relaxed">
          <li>
            You&apos;re not racing to the altar — and you&apos;re definitely not looking for
            a shuffleboard partner either. You want connection, above all.
          </li>
          <li>
            You&apos;re independent: looking for someone to swap notes with and care deeply
            for — not someone to complete you.
          </li>
          <li>
            Your bar is high — not out of difficulty, but out of respect for what love
            actually is.
          </li>
          <li>
            You might feel confused about being single at times — but never bitter. What you
            really feel is frustration that there are so few real ways to actually{" "}
            <em>get to know</em> someone.
          </li>
          <li>
            You don&apos;t need to be a plus-one. You want to have loved someone well, and to
            have helped them feel their own heart.
          </li>
          <li>
            You want someone who rolls alongside you — not someone who subsumes you, and not
            someone you&apos;re auditioning for a role.
          </li>
        </ul>
      </section>

      {/* What this is / isn't */}
      <section className="bg-stone-100">
        <div className="max-w-3xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-4">
              This is not
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed">
              How to get chosen. Find a husband in 90 days. A funnel that races you from
              match to second date to a verdict. There is no manipulation here, and no one
              to lock down.
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-4">
              This is
            </h3>
            <p className="text-lg text-stone-900 leading-relaxed">
              The work of moving at the real speed of attraction and revelation — and
              understanding how to date for <em>this</em> specific window of life. Not
              your 20s. Not your 30s. Not retirement. The nuances of midlife dating
              today are real, and almost nobody else is teaching them well.
            </p>
          </div>
        </div>
      </section>

      {/* The shift */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl text-stone-900 mb-3 text-center">
          What shifts over our time together
        </h2>
        <p className="text-center text-stone-500 mb-10">
          A glimpse of the work — a few of the lessons and skills we cover, not the whole map.
        </p>
        <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
          <p>
            You learn to answer the inevitable &ldquo;so why didn&apos;t you ever marry?&rdquo;
            with <em>magnetism</em> — turning what&apos;s usually a neutral or quietly
            negative question mark into a moment of intrigue and warmth.
          </p>
          <p>
            You come to understand — and build — real emotional connection with men in the
            midlife dating window: what&apos;s actually going on for them, and how to meet
            it.
          </p>
          <p>
            You come to hold your high standards as a quiet form of integrity — and let them
            lead, fully, without second-guessing.
          </p>
          <p>
            You learn to slow dating to the actual speed of getting to know someone —
            instead of forcing an early verdict.
          </p>
          <p>
            You feel, in real time, the difference between <em>casting a man for a role</em>{" "}
            and <em>rolling alongside him</em> — and you choose the second.
          </p>
          <p>
            You learn the actual skill of dating in <em>this</em> window — what 45–60
            looks like now, why it doesn&apos;t resemble dating in any other decade of
            life, and how to navigate it on its own terms.
          </p>
        </div>
        <p className="text-center text-stone-500 mt-10 italic">
          …and this is only a part of what we cover together.
        </p>
      </section>

      {/* What's included */}
      <section className="bg-stone-100">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <h2 className="text-2xl text-stone-900 mb-8 text-center">The container</h2>
          <ul className="space-y-4 text-lg text-stone-700 leading-relaxed">
            <li>
              <span className="text-stone-900">Twelve 1:1 sessions</span>, about one a week
              over three months.
            </li>
            <li>
              A method built over years and shaped by conversations with hundreds of women
              in exactly your position.
            </li>
            <li>Support between sessions, so the work doesn&apos;t go cold.</li>
            <li>
              A clear arc: where you are now → the skills → living them out in your actual
              dating life.
            </li>
          </ul>
        </div>
      </section>

      {/* Founding round */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center border-t border-stone-200">
        <p className="uppercase tracking-[0.25em] text-xs text-stone-400 mb-6">Why now</p>
        <p className="text-lg text-stone-700 leading-relaxed max-w-xl mx-auto">
          This is the first time I&apos;m opening this work to the world. After years of
          building the method and hundreds of long conversations with women like you,
          I&apos;m taking a founding circle through it — a handful of women, no more. You&apos;d be
          among the first, and your experience will shape what this becomes.
        </p>
      </section>

      {/* Investment */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl text-stone-900 mb-6">Pilot Investment</h2>
        <p className="text-4xl text-stone-900 mb-3">$3,000</p>
        <p className="text-stone-600 mb-2">in full, or three monthly payments of $1,000</p>
        <p className="text-sm text-stone-500 italic mb-10">
          Founding rate — held for the inaugural cohort only. Future rounds will be priced higher.
        </p>
        <p className="text-stone-600 leading-relaxed max-w-xl mx-auto mb-10">
          I take only a small number of women into this founding round, so that each one
          gets the depth it asks for. If any part of this felt like it was describing you,
          I&apos;d love to talk — no pitch, just a real conversation about where you are and
          whether this is the right fit.
        </p>
        <Button asChild variant="outline" size="lg" className={ctaClass}>
          <a href={CTA_HREF}>Start a conversation</a>
        </Button>
      </section>

      {/* A note from Lakshmi */}
      <section className="bg-stone-100">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <p className="uppercase tracking-[0.25em] text-xs text-stone-400 mb-8 text-center">
            A note from me
          </p>
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p>
              When you haven&apos;t married before, you do have to navigate things a little
              differently. You can&apos;t simply say &ldquo;I just never met anyone along the
              way&rdquo; — even when it&apos;s true. Part of our work together is exactly
              this.
            </p>
            <p>
              I built this curriculum because I am you. I understand it from the inside. And
              I believe — whether you can see it yet or not — that you are the group most
              poised to shine in the modern midlife dating landscape.
            </p>
            <p>
              The first small cohort is 1:1. Soon after, I&apos;ll open a group cohort —
              drawing women from different cities on purpose, so you can truly support one
              another without ever competing.
            </p>
            <p>
              First up: 1:1. Let&apos;s begin with a short discovery call and see where it
              goes.
            </p>
            <p className="text-stone-900 italic">
              Rooting for you in ways you can&apos;t imagine.
            </p>
          </div>
          <div className="mt-8">
            <p className="text-stone-900">— Lakshmi</p>
            <p className="text-sm text-stone-500">host of The Later Dater Today</p>
            <p className="text-sm text-stone-500">creator of How to Date Humans</p>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className={ctaClass}>
              <a href={CTA_HREF}>Start a conversation</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-stone-400 py-12 border-t border-stone-200">
        How to Date Humans · Lakshmi Rengarajan
      </footer>
    </div>
  );
};

export default Pilot;
