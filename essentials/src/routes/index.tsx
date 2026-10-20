import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import htdhLogo from "@/assets/htdh-stacked-logo.webp";
import lakshmiPhoto from "@/assets/lakshmi-green-dress.jpg";
import kickoffPhoto from "@/assets/lakshmi-kickoff-event.jpg";
import genXVideo from "@/assets/X_logo_intro.mp4";
import genXVideoPoster from "@/assets/X_logo_intro_poster.jpg";
import matchLogo from "@/assets/logos/match.svg";
import { NytMark, WeWorkMark } from "@/components/brand-marks";
import giantsLogo from "@/assets/logos/dating-games.webp";
import vanityFairLogo from "@/assets/logos/vanity-fair.svg";
import pivotLogo from "@/assets/logos/pivot.png";
import laterDaterLogo from "@/assets/logos/later-dater-today.jpg";
import iftfLogo from "@/assets/logos/iftf-official.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Gen X Dating Essentials — ${EVENT_DATE}, 7–9pm CT` },
      { name: "description", content: "The mechanics changed the advice stayed the same: Dating insights for who you are now and what it takes to connect today. $85, capped at 25 seats." },
      { property: "og:title", content: "Gen X Dating Essentials" },
      { property: "og:description", content: "The mechanics changed the advice stayed the same: Dating insights for who you are now and what it takes to connect today. $85, capped at 25 seats." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://howtodatehumans.com/essentials" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://howtodatehumans.com/essentials" }],
  }),
  component: WebinarPage,
});

// Change the date here — it's used everywhere on the page.
const EVENT_DATE = "Wednesday, October 28";
const EVENT_DATE_SHORT = "Oct 28";
const SEAT_LINK = "https://calendly.com/lakshmi-howtodatehumans/dating-essentials-for-gen-x-clone";

const stages = [
  { title: "standard", sub: "20s / 30s", mid: false },
  { title: "Gen X", sub: "45–62", mid: true },
  { title: "golden", sub: "65+", mid: false },
];

const rightForYou = [
  "you're between 45-62 single and dating or thinking about it",
  "mass market/generic dating advice doesn't resonate with you",
  "you would like to prioritize love and connection",
  "you're not trying to get into a committed relationship in three months or less",
  "you are willing to understand dating vs. simply getting tips and tricks",
];

const isList = [
  "Layered context — the culture of modern dating, and how to understand and thrive on your terms as a Gen Xer today",
];

const isNotList = [
  "Simple cheers to “get back out there” or “give people a chance”",
  "Generic dating advice with a midlife twist",
  "A rundown of dating dos and don'ts",
];


type Credential = {
  name: string;
  src?: string;
  mark?: typeof NytMark;
  cover: boolean;
  href: string;
  imgClass?: string;
};

const credentials: Credential[] = [
  { name: "Match", src: matchLogo, cover: false, href: "https://howtodatehumans.com/" },
  { name: "WeWork", mark: WeWorkMark, cover: false, href: "https://www.youtube.com/watch?v=fXdqNRIq3JI" },
  { name: "Land of the Giants — Dating Games", src: giantsLogo, cover: true, href: "https://podcasts.apple.com/us/podcast/dating-games/id1465767420?i=1000592320726" },
  { name: "Vanity Fair", src: vanityFairLogo, cover: false, href: "https://www.vanityfair.com/style/2021/08/08/meet-the-former-matchcom-director-turned-old-school-setup-evangelist" },
  { name: "Pivot", src: pivotLogo, cover: true, href: "https://podcasts.apple.com/us/podcast/best-friends-of-pivot/id1073226719?i=1000639439067" },
  { name: "The Later Dater Today", src: laterDaterLogo, cover: true, href: "https://podcasts.apple.com/us/podcast/the-later-dater-today/id1531591660" },
  { name: "The New York Times", mark: NytMark, cover: false, href: "https://www.nytimes.com/2025/01/03/style/dating-predictions.html" },
  { name: "IFTF", src: iftfLogo, cover: false, href: "https://www.iftf.org/insights/who-is-controlling-our-romantic-futures-and-what-your-heart-can-do-about-it-the-perils-and-promise-of-ai-in-modern-dating/", imgClass: "h-full w-auto" },
];

const format = [
  { time: "75 min", label: "content" },
  { time: "45 min", label: "Q&A" },
  { time: "30 min", label: "optional — learn about Lakshmi's offerings" },
];

const offerings = [
  { title: "Jumpstart for Men", label: "a six-session reset for recently divorced men" },
  { title: "Didn't Marry Gen X Women", label: "a customized coaching program for women who didn't marry" },
  { title: "1:1 Coaching", label: "for Gen Xers of all relationship histories" },
];

const faq = [
  ["Will I be on camera?", "Cameras will be off with the option of being pulled up during the Q&A."],
  ["Will I have to talk or share anything?", "No. Attend in silence. Chat questions can be anonymous."],
  ["What if I can't make it live?", "You must attend live to get a copy of the recording."],
  ["Recording terms", "Your seat includes a personal recording of the session. It stays personal — please don't share, post, or redistribute it, or any session materials."],
  ["Is this for men or for women?", "Both, deliberately."],
];

function SeatButton({ className = "", small = false }: { className?: string; small?: boolean }) {
  return (
    <Button asChild size={small ? "sm" : "lg"} className={`h-auto rounded-full ${small ? "px-5 py-2 text-[11px]" : "px-8 py-3.5 text-[13px]"} font-semibold uppercase tracking-[0.09em] soft-shadow transition-transform hover:-translate-y-0.5 ${className}`}>
      <a href={SEAT_LINK} target="_blank" rel="noreferrer">
        GRAB YOUR SEAT
      </a>
    </Button>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
      <span aria-hidden="true" className="h-px w-6 bg-border-strong" />
      {children}
    </p>
  );
}

function GenXConvergenceVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 4.9;
      } else {
        void video.play().catch(() => undefined);
      }
    };

    updatePlayback();
    reducedMotion.addEventListener("change", updatePlayback);
    return () => reducedMotion.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      src={genXVideo}
      poster={genXVideoPoster}
      className="mx-auto mb-8 aspect-[4/5] w-full max-w-[360px] bg-background object-contain sm:max-w-[420px]"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label="Different Gen X paths converging at the same point"
    />
  );
}

function WebinarPage() {
  return (
    <div className="min-h-screen font-sans text-[16px] leading-relaxed text-foreground antialiased">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[880px] items-center justify-between gap-4 px-6 py-3.5">
          <span className="flex items-center gap-2.5">
            <a href="https://howtodatehumans.com/" aria-label="How to Date Humans home">
              <img src={htdhLogo} alt="How to Date Humans" className="h-9 w-auto" />
            </a>
            <span aria-hidden="true" className="hidden text-[17px] font-light text-muted-foreground/70 sm:inline">/</span>
            <span className="hidden font-display text-[15px] font-semibold text-primary sm:inline">Gen X Dating Essentials</span>
          </span>
          <div className="flex items-center gap-4">
            <span className="hidden text-[12px] font-bold uppercase tracking-[0.1em] text-foreground sm:inline">
              {EVENT_DATE_SHORT} · 7–9pm CT
            </span>
            <SeatButton small />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[880px] px-6 pb-20">
        <main>
          <section className="reveal py-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-primary">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              Live webinar
            </span>
            <h1 className="mt-6 font-display text-[46px] font-bold leading-[1.05] tracking-[-0.01em] text-primary sm:text-[60px]">
              Gen X Dating Essentials
            </h1>
            <p className="mt-5 max-w-[34ch] font-sans text-[20px] leading-snug text-foreground/85 sm:text-[24px]">
              The mechanics changed the advice stayed the same: Dating insights for who you are now and what it takes to connect today...
            </p>

            <div className="mt-9 glass-card rounded-xl p-6 sm:p-7">
              <p className="text-[15px]"><strong className="block font-display text-[22px] font-semibold leading-snug text-foreground sm:inline sm:text-[24px]"><span className="whitespace-nowrap">{EVENT_DATE}</span> · <span className="whitespace-nowrap">7–9pm CT</span></strong><span className="mt-1 block sm:mt-0 sm:inline"><span className="hidden sm:inline"> · </span>live on Zoom · a virtual session</span></p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
                <span className="font-display text-[34px] font-bold leading-none text-primary">$85</span>
                <span className="text-[14px] text-muted-foreground">capped at 25 seats</span>
                <SeatButton className="ml-auto" />
              </div>
            </div>

            <ul className="mt-12 grid grid-cols-3 gap-3">
              {stages.map((stage) => (
                <li
                  key={stage.title}
                  className={
                    stage.mid
                      ? "gen-x-stage rounded-xl bg-primary px-2 py-6 text-center soft-shadow sm:-mt-3 sm:py-8"
                      : "rounded-xl border border-border bg-card/70 px-2 py-5 text-center"
                  }
                >
                  <span className={`block font-display text-[15px] font-semibold sm:text-[17px] ${stage.mid ? "text-cream-text" : ""}`}>
                    {stage.title}
                  </span>
                  <span className={`mt-1 block text-[12px] ${stage.mid ? "text-cream-text/80" : "text-muted-foreground"}`}>
                    {stage.sub}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center font-display text-[18px] font-semibold italic text-foreground sm:text-[20px]">
              Old enough to remember, young enough to shape what's next
            </p>
          </section>

          <figure className="m-0 border-y border-border py-14 text-center">
            <blockquote className="mx-auto max-w-[40ch] font-display text-[22px] italic leading-snug text-primary sm:text-[26px]">
              “There's magic to love… These circuits are deeply embedded in the human brain. They're going to survive as long as our species survive on what Shakespeare called, this ‘mortal coil.’”
            </blockquote>
            <figcaption className="mt-5 text-[13px] uppercase tracking-[0.1em] text-muted-foreground">
              — Dr. Helen Fisher, biological anthropologist
            </figcaption>
          </figure>

          <section className="py-16">
            <p className="mb-12 max-w-[56ch] text-[19px] leading-relaxed">
              Most of the people I talk to have already heard the advice. A lot of it they even agree with. What's off is how dating actually feels for them right now, and they've gotten pretty good at spotting advice that wasn't written with their life in mind.
            </p>
            <div className="grid items-start gap-10 sm:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="font-display text-[28px] font-semibold leading-tight text-primary">
                  This session is likely right for you if:
                </h2>
                <ul className="mt-7 space-y-4">
                  {rightForYou.map((line) => (
                    <li key={line} className="flex items-start gap-3 border-b border-border/70 pb-4 last:border-b-0">
                      <span aria-hidden="true" className="mt-0.5 text-primary">←</span>
                      <span className="text-[17px]">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="m-0 glass-card rounded-xl p-6">
                <img src={lakshmiPhoto} alt="Lakshmi speaking onstage in a green dress" className="h-64 w-full rounded-lg object-cover object-[center_32%]" />
                <blockquote className="mt-6 font-display text-[19px] italic leading-snug">
                  “People are shocked when I don't talk to them about spotting flags, headshots, or how awful the opposite gender is. We talk about what actually happened to dating — and how to become the human antidote to it.”
                </blockquote>
                <figcaption className="mt-4 text-[13px] uppercase tracking-[0.1em] text-muted-foreground">— Lakshmi</figcaption>
              </figure>
            </div>
          </section>

          <hr className="border-t border-border" />

          <section className="py-16">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card/70 p-6">
                <h2 className="font-display text-[22px] font-semibold text-primary">What this is</h2>
                <ul className="mt-5 space-y-3">
                  {isList.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card/40 p-6">
                <h2 className="font-display text-[22px] font-semibold text-primary">What this is not</h2>
                <ul className="mt-5 space-y-3">
                  {isNotList.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span aria-hidden="true" className="mt-0.5 shrink-0">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="pb-16">
            <div className="rounded-xl border border-border bg-card/60 p-7 text-center">
              <h2 className="font-display text-[26px] font-semibold text-primary">One more time: who is this for?</h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-[17px]">
                Gen Xers who want to escape generic dating advice so they can date for who they are now and what it takes to connect today. This session sets the foundation that many skip.
              </p>
            </div>
          </section>

          <section className="-mx-6 rounded-none bg-primary px-6 py-14 text-cream-text soft-shadow sm:mx-0 sm:rounded-2xl sm:px-10">
            <Eyebrow>More on Lakshmi</Eyebrow>
            <div className="mt-2 grid gap-10 sm:grid-cols-2">
              <div>
                <div className="h-64 w-full overflow-hidden rounded-lg sm:h-52">
                  <img src={kickoffPhoto} alt="Lakshmi on the mic at a How to Date Humans event, the audience laughing" className="h-full w-full origin-[62%_52%] scale-[1.7] object-cover object-[62%_52%]" />
                </div>
                <p className="mt-4 font-display text-[22px] font-semibold">Lakshmi</p>
                <p className="text-[13px] text-cream-text/80">Dating culture researcher and coach for Gen X</p>
              </div>
              <div>
                <h2 className="font-display text-[20px] font-semibold">Who am I?</h2>
                <p className="mt-4">
                  I've spent 15 years across multiple eras to help keep dating human… now I'm trying to save romantic hope altogether, with a focus on Gen X.
                </p>
                <p className="mt-4">
                  A thought leader in the past, present and future of dating.
                </p>
                <p className="mt-4">
                  Midlife dating, singles event design, the setup, a stint in the industry — I pull from many dimensions.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <h2 className="sr-only">Credentials</h2>
            <Eyebrow>seen and worked with</Eyebrow>
            <ul className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {credentials.map((brand) => (
                <li key={brand.name} className="h-24">
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${brand.name}`}
                    className={`flex h-full items-center justify-center overflow-hidden rounded-lg border border-border bg-card/70 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${brand.imgClass ? "p-2" : "p-4"}`}
                  >
                    {brand.mark ? (
                      <brand.mark className="h-10 w-full text-foreground" />
                    ) : (
                      <img
                        src={brand.src}
                        alt={`${brand.name} logo`}
                        className={`${brand.imgClass ?? (brand.cover ? "h-16 w-16 rounded-sm" : "h-10 w-full")} object-contain`}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-t border-border" />

          <section className="py-16">
            <Eyebrow>two hours together</Eyebrow>
            <h2 className="font-display text-[28px] font-semibold text-primary">Session format</h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-3">
              {format.map((item) => (
                <li key={item.label} className="glass-card rounded-xl p-5 text-center">
                  <span className="block font-display text-[28px] font-semibold text-primary">{item.time}</span>
                  <span className="mt-1 block text-[13px] text-muted-foreground">{item.label}</span>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-[17px]">
              Stay on for the last 30 minutes and learn more about two niche offerings, plus general coaching:
            </p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {offerings.map((item) => (
                <li key={item.title} className="glass-card rounded-xl p-5 text-center">
                  <span className="block font-display text-[20px] font-semibold leading-tight text-primary">{item.title}</span>
                  <span className="mt-2 block text-[13px] text-muted-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-t border-border" />

          <section className="py-16">
            <h2 className="font-display text-[28px] font-semibold text-primary">FAQ</h2>
            <dl className="mt-6 overflow-hidden rounded-xl border border-border bg-card/60">
              {faq.map(([question, answer]) => (
                <div key={question} className="border-b border-border px-6 py-5">
                  <dt className="font-display text-[17px] font-semibold">{question}</dt>
                  <dd className="mt-1.5 text-[15px] text-muted-foreground">{answer}</dd>
                </div>
              ))}
              <div className="px-6 py-5">
                <dt className="font-display text-[17px] font-semibold">Refunds?</dt>
                <dd className="mt-1.5 text-[15px] text-muted-foreground">
                  There are no refunds.
                </dd>
              </div>
            </dl>
          </section>

          <figure className="m-0 pb-16 text-center">
            <blockquote className="mx-auto max-w-[44ch] font-display text-[22px] italic leading-snug sm:text-[24px]">
              “Interesting, insightful and validating. I am actually equipped to date in these times as a Gen Xer.”
            </blockquote>
            <figcaption className="mt-4 text-[13px] uppercase tracking-[0.1em] text-muted-foreground">
              — Leah, 56 · September session
            </figcaption>
          </figure>

          <section
            id="seat"
            className="scroll-mt-24 rounded-2xl border border-border-strong bg-card/80 px-6 py-14 text-center soft-shadow"
          >
            <GenXConvergenceVideo />
            <h2 className="font-display text-[34px] font-bold leading-tight text-primary sm:text-[40px]">
              Gen X Dating Essentials
            </h2>
            <p className="mt-4 text-[16px]">{EVENT_DATE} · 7–9pm CT · $85 · capped at 25</p>
            <div className="mt-7">
              <SeatButton />
            </div>
            <p className="mt-5 text-[13px] text-muted-foreground">
              Your seat includes a personal recording — for you, not for sharing.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
