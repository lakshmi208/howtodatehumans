import { useEffect } from "react";
import logoHorizontal from "@/assets/logo-horizontal.png";

// 1:1 coaching for Gen X women who didn't marry — story-scroll page.
// Route: /coaching/women. Designed on the HTDH design canvas (Nov 2026).
// The original pilot page lives on, unchanged, at /pilot (src/pages/Pilot.tsx).

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap";

// Client testimonials. The "In their words" section stays hidden until at least
// one quote is added here. Use real quotes, with the client's permission.
// Example: { quote: "…", name: "M.", detail: "52 · Denver" },
const TESTIMONIALS: { quote: string; name: string; detail?: string }[] = [
  { quote: "Lakshmi's approach is not to 'get you into a relationship.' That would be toxic. What she does is prepare you for the moments when you might meet someone. She guides you on how to shift gears and build a connection in a way that is truly you.", name: "LH", detail: "54" },
  { quote: "I never considered the strength and desirability of being a “didn't marry” woman. Lakshmi's course completely transformed my internal story from one of lack to one where I see the integrity of my choices and what choices I want to make for the future.", name: "KY", detail: "52" },
  { quote: "I always thought that I was single because I was meant to be single. Lakshmi helped me see that I'm actually someone who doesn't just want to be in a relationship for relationship's sake. And this is actually an asset and a point of attraction in midlife.", name: "CH", detail: "46" },
  { quote: "Lakshmi's approach to coaching is the complete inversion of everything I'd heard from dating coaches and advice. She really knows her stuff and I realize the high value of date coaching and how I was listening to the wrong people.", name: "RT", detail: "49" },
  { quote: "Nobody understands the experience and the possibilities of the “didn't marry” woman like Lakshmi. I had never felt more seen, inspired or vindicated.", name: "WR", detail: "45" },
  { quote: "I once gave $20k to a dating coach. I wish I'd handed it to Lakshmi, because she teaches you actual skills that you'll have for the rest of your life.", name: "AM", detail: "49" },
  { quote: "Even deleting the phrase “never married” from my vocabulary permanently changed something in me.", name: "AT", detail: "51" },
];

const CoachingWomen = () => {
  useEffect(() => {
    if (document.querySelector(`link[href="${FONTS_HREF}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS_HREF;
    document.head.appendChild(link);
  }, []);

  return (
<div style={{width: '100%', background: '#FAFAF9', color: '#44403C', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '18px', lineHeight: '30px'}}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "32px 24px 0", display: "flex", justifyContent: "center" }}>
        <a href="/" aria-label="How to Date Humans — back to homepage" style={{ display: "inline-block", opacity: 0.5 }}>
          <img src={logoHorizontal} alt="How to Date Humans" style={{ height: 48, width: "auto", filter: "grayscale(100%)" }} />
        </a>
      </div>


  {/* 1 · HERO */}
  <header style={{maxWidth: '1040px', margin: '0 auto', padding: '96px 24px 112px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px'}}>
    <p style={{margin: '0', fontSize: '16px', lineHeight: '24px', fontStyle: 'italic', color: '#6B645F'}}>1:1 coaching for Gen X women who didn't marry</p>
    <h1 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(44px, 5.4vw, 76px)', lineHeight: '1.04', color: '#1C1917', maxWidth: '980px'}}>Ok, you're a Gen X woman who didn't marry. Guess what? <i>Now might actually be the best time for you to date.</i></h1>
    <p style={{margin: '0', maxWidth: '620px', fontSize: '20px', lineHeight: '32px'}}>Read on for why I believe this might be the ideal time, and why I might be your ideal coach.</p>
    <svg aria-hidden="true" width="260" height="48" viewBox="0 0 260 48" style={{display: 'block'}}><path d="M2 24 C 50 4, 84 44, 130 24 S 214 4, 258 24" fill="none" stroke="#9A4A3A" strokeWidth="1.5" strokeLinecap="round" /><circle cx="130" cy="24" r="7" fill="#FAFAF9" stroke="#1C1917" strokeWidth="2" /></svg>
    <a href="#consult" style={{textDecoration: 'none', border: '1px solid #1C1917', color: '#1C1917', borderRadius: '999px', padding: '14px 32px', minHeight: '48px', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', fontSize: '15px', letterSpacing: '0.04em'}}>Book a $75 consultation</a>
  </header>

  {/* 2 · THE SCRIPT YOU'RE NOT IN */}
  <section style={{background: '#F5F5F4'}}>
    <div style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexDirection: 'column', gap: '48px'}}>
      <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
        <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917', maxWidth: '760px'}}>Midlife dating has a script. You're not in it.</h2>
        <div style={{maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <p style={{margin: '0'}}>Most midlife dating content assumes one path: married, divorced, kids. That's the unspoken baseline — what the books are written for, what the coaches calibrate against, what the podcasts assume.</p>
          <p style={{margin: '0'}}>If you didn't marry, you've been getting advice built for someone else's life. Co-parenting frameworks you don't need. <i>"Getting back out there"</i> arcs that don't apply. Identity rebuilds for an identity you never built around a husband.</p>
          <p style={{margin: '0', color: '#1C1917'}}>The whole field has been quietly excluding you by assuming your story didn't exist.</p>
        </div>
      </div>
      <div role="img" aria-label="Two panels. Left, in grey: topics midlife dating advice usually covers, such as co-parenting and dating after divorce. Right, in warm color: topics it leaves out, such as answering why you never married." style={{display: 'flex', flexWrap: 'wrap', gap: '24px'}}>
        <div style={{flex: '1 1 420px', minWidth: '0', background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '20px', padding: '36px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <p style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '28px', color: '#6B645F'}}>What gets covered</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            <span style={{background: '#EDEBE9', color: '#57534E', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>Co-parenting schedules</span>
            <span style={{background: '#EDEBE9', color: '#57534E', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>Dating after divorce</span>
            <span style={{background: '#EDEBE9', color: '#57534E', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>Introducing the kids</span>
            <span style={{background: '#EDEBE9', color: '#57534E', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>Handling the ex</span>
            <span style={{background: '#EDEBE9', color: '#57534E', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>Blended families</span>
            <span style={{background: '#EDEBE9', color: '#57534E', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>Rebuilding who you are</span>
            <span style={{background: '#EDEBE9', color: '#57534E', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>"Getting back out there"</span>
          </div>
        </div>
        <div style={{flex: '1 1 420px', minWidth: '0', background: '#F3E3DA', borderRadius: '20px', padding: '36px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <p style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '28px', color: '#7A3A2D'}}>What nobody covers</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            <span style={{background: '#FAFAF9', color: '#1C1917', border: '1px solid #9A4A3A', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>"So why didn't you ever marry?"</span>
            <span style={{background: '#FAFAF9', color: '#1C1917', border: '1px solid #9A4A3A', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>High standards as integrity</span>
            <span style={{background: '#FAFAF9', color: '#1C1917', border: '1px solid #9A4A3A', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>What's going on for men right now</span>
            <span style={{background: '#FAFAF9', color: '#1C1917', border: '1px solid #9A4A3A', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>The real speed of getting to know someone</span>
            <span style={{background: '#FAFAF9', color: '#1C1917', border: '1px solid #9A4A3A', borderRadius: '999px', padding: '8px 16px', fontSize: '15px', lineHeight: '22px'}}>Rolling alongside, not casting a role</span>
          </div>
        </div>
      </div>
      
    </div>
  </section>

  {/* 3 · TIMELINE */}
  <section style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexDirection: 'column', gap: '40px'}}>
    <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
      <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917', maxWidth: '820px'}}>Just as everyone else is opting in, you're opting out.</h2>
    </div>
    <div style={{background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '20px', padding: '32px', boxSizing: 'border-box'}}>
      <svg role="img" aria-label="Illustrative timeline from age 40 to 60. A grey line, people re-entering dating after divorce or separation, rises steeply through the mid-forties into the fifties. A warm line, women who didn't marry still actively dating, falls through the same years. The two cross in a shaded window from 45 to 55." viewBox="0 0 1000 420" style={{display: 'block', width: '100%', height: 'auto'}}>
        <rect x="270" y="30" width="400" height="320" fill="#F3E3DA" opacity="0.6" />
        <text x="470" y="58" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="24" fontStyle="italic" fill="#7A3A2D">the window</text>
        <line x1="70" y1="350" x2="960" y2="350" stroke="#A8A29E" strokeWidth="1" />
        <text x="70" y="384" fontSize="15" fill="#6B645F" fontFamily="Source Serif 4, Georgia, serif">40</text>
        <text x="262" y="384" fontSize="15" fill="#6B645F" fontFamily="Source Serif 4, Georgia, serif">45</text>
        <text x="462" y="384" fontSize="15" fill="#6B645F" fontFamily="Source Serif 4, Georgia, serif">50</text>
        <text x="662" y="384" fontSize="15" fill="#6B645F" fontFamily="Source Serif 4, Georgia, serif">55</text>
        <text x="935" y="384" fontSize="15" fill="#6B645F" fontFamily="Source Serif 4, Georgia, serif">60</text>
        <path d="M70 320 C 200 315, 260 260, 360 170 S 560 70, 960 80" fill="none" stroke="#78716C" strokeWidth="3" strokeDasharray="2 0" />
        <path d="M70 110 C 200 115, 280 150, 380 210 S 600 310, 960 320" fill="none" stroke="#9A4A3A" strokeWidth="3" />
        <circle cx="372" cy="190" r="7" fill="#FAFAF9" stroke="#1C1917" strokeWidth="2" />
        <text x="720" y="68" fontSize="16" fill="#57534E" fontFamily="Source Serif 4, Georgia, serif">Re-entering dating</text>
        <text x="720" y="90" fontSize="14" fill="#6B645F" fontFamily="Source Serif 4, Georgia, serif">after divorce, separation, loss</text>
        <text x="700" y="296" fontSize="16" fill="#7A3A2D" fontFamily="Source Serif 4, Georgia, serif">Women who didn't marry,</text>
        <text x="700" y="318" fontSize="16" fill="#7A3A2D" fontFamily="Source Serif 4, Georgia, serif">still actively dating</text>
      </svg>
      <p style={{margin: '16px 0 0', textAlign: 'center', fontSize: '14px', lineHeight: '20px', color: '#6B645F'}}>Illustrative shape, not data.</p>
    </div>
  </section>

  {/* 4 · INTEGRITY OVERLOOKED */}
  <section style={{background: '#F5F5F4'}}>
    <div style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center'}}>
      <div style={{flex: '1 1 400px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917'}}>The world sees a label. Look underneath it.</h2>
      </div>
      <div role="img" aria-label="A grey tag reading 'Never married' sits peeled back at an angle over a warm card that reads: you held love above a checkbox, you said no to the wrong yes, you built a full life on your own terms." style={{flex: '1 1 440px', minWidth: '0', position: 'relative', height: '420px'}}>
        <div style={{position: 'absolute', left: '6%', top: '60px', right: '0', bottom: '0', background: '#F3E3DA', borderRadius: '20px', padding: '120px 40px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '30px', lineHeight: '36px', color: '#1C1917'}}>
          <span>You held love above a checkbox.</span>
          <span><i>You said no to the wrong yes.</i></span>
          <span>You built a full life on your own terms.</span>
        </div>
        <div style={{position: 'absolute', left: '0', top: '0', width: '300px', height: '120px', background: '#D6D3D1', borderRadius: '12px', transform: 'rotate(-7deg)', boxShadow: '0 12px 24px rgba(28,25,23,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '15px', letterSpacing: '0.3em', color: '#44403C'}}>NEVER MARRIED</div>
      </div>
    </div>
  </section>

  {/* 5 · MARRIAGE ≠ LOVE */}
  <section style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexDirection: 'column', gap: '48px'}}>
    <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
      <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917', maxWidth: '820px'}}>The pursuit of marriage is not <i>the pursuit of love.</i></h2>
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch'}}>
      <div role="img" aria-label="The pursuit of marriage, drawn as a checklist: by a certain age, ring, house, box checked." style={{flex: '1 1 380px', minWidth: '0', background: '#F5F5F4', borderRadius: '20px', padding: '40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px'}}>
        <p style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '28px', color: '#6B645F'}}>Marriage, as a goal</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px', fontSize: '20px', color: '#57534E'}}><svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26"><rect x="1" y="1" width="24" height="24" rx="4" fill="none" stroke="#78716C" strokeWidth="2" /><path d="M6 13 L11 18 L20 8" fill="none" stroke="#78716C" strokeWidth="2.5" /></svg>By a certain age</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px', fontSize: '20px', color: '#57534E'}}><svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26"><rect x="1" y="1" width="24" height="24" rx="4" fill="none" stroke="#78716C" strokeWidth="2" /><path d="M6 13 L11 18 L20 8" fill="none" stroke="#78716C" strokeWidth="2.5" /></svg>Ring</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px', fontSize: '20px', color: '#57534E'}}><svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26"><rect x="1" y="1" width="24" height="24" rx="4" fill="none" stroke="#78716C" strokeWidth="2" /><path d="M6 13 L11 18 L20 8" fill="none" stroke="#78716C" strokeWidth="2.5" /></svg>House, plus-one, photo</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px', fontSize: '20px', color: '#57534E'}}><svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26"><rect x="1" y="1" width="24" height="24" rx="4" fill="none" stroke="#78716C" strokeWidth="2" /><path d="M6 13 L11 18 L20 8" fill="none" stroke="#78716C" strokeWidth="2.5" /></svg>Box checked</div>
      </div>
      <div aria-hidden="true" style={{flex: '0 0 auto', alignSelf: 'center', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '96px', lineHeight: '1', color: '#9A4A3A', padding: '0 8px'}}>≠</div>
      <div role="img" aria-label="The pursuit of love, drawn as a winding path through curiosity, revelation and being known, with no finish line." style={{flex: '1 1 380px', minWidth: '0', background: '#F3E3DA', borderRadius: '20px', padding: '40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <p style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '28px', color: '#7A3A2D'}}>Love, as an experience</p>
        <svg viewBox="0 0 400 220" style={{display: 'block', width: '100%', height: 'auto'}} aria-hidden="true">
          <path d="M10 190 C 80 190, 60 110, 140 120 S 220 200, 270 120 S 330 30, 390 40" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="58" cy="176" r="8" fill="#FAFAF9" stroke="#1C1917" strokeWidth="2" />
          <circle cx="140" cy="120" r="7" fill="#9A4A3A" />
          <circle cx="270" cy="120" r="7" fill="#9A4A3A" />
          <circle cx="390" cy="40" r="7" fill="#9A4A3A" />
          <text x="120" y="100" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fontStyle="italic" fill="#1C1917">curiosity</text>
          <text x="240" y="160" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fontStyle="italic" fill="#1C1917">revelation</text>
          <text x="275" y="28" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fontStyle="italic" fill="#1C1917">being known</text>
        </svg>
        <p style={{margin: '0', fontSize: '15px', lineHeight: '22px', color: '#44403C'}}>No finish line. Just the real speed of attraction and revelation.</p>
      </div>
    </div>
  </section>

  {/* 1b · WHY GEN X */}
  <section style={{borderTop: '1px solid #E7E5E4'}}>
    <div style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexDirection: 'column', gap: '48px'}}>
      <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
        <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917', maxWidth: '820px'}}>Grew up analog. Beta-tested digital.</h2>
        <p style={{margin: '0', maxWidth: '640px'}}>The midlife window belongs to the one generation that truly lived both: mixtapes and letters, then profiles and swipes.</p>
      </div>
      <svg role="img" aria-label="Line drawings: a cassette, a letter and a film camera on the left, labelled grew up analog. A smartphone, a chat bubble and a wifi signal on the right, labelled beta-tested digital. The small rolling circle sits on a line between them." viewBox="0 0 1000 170" style={{display: 'block', width: '100%', maxWidth: '960px', height: 'auto', margin: '0 auto'}}>
<g transform="translate(40 30)"><rect x="0" y="10" width="80" height="52" rx="6" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="24" cy="32" r="8" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="56" cy="32" r="8" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 62 L24 50 L56 50 L62 62" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
<g transform="translate(170 30)"><rect x="0" y="12" width="76" height="50" rx="3" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M0 14 L38 42 L76 14" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
<g transform="translate(296 26)"><rect x="0" y="16" width="80" height="50" rx="6" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="40" cy="41" r="14" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16 L18 6 L36 6 L42 16" fill="none" stroke="#44403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
<path d="M410 66 L590 66" stroke="#D6D3D1" strokeWidth="2" />
<circle cx="500" cy="66" r="10" fill="#FAFAF9" stroke="#1C1917" strokeWidth="2.5" />
<g transform="translate(630 20)"><rect x="0" y="0" width="46" height="84" rx="9" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 72 L29 72" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
<g transform="translate(730 30)"><path d="M0 8 Q0 0 8 0 L72 0 Q80 0 80 8 L80 44 Q80 52 72 52 L28 52 L12 66 L14 52 L8 52 Q0 52 0 44 Z" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 26 L58 26" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
<g transform="translate(870 34)"><path d="M0 22 Q45 -14 90 22" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 38 Q45 14 74 38" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M32 54 Q45 44 58 54" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="45" cy="66" r="3" fill="#9A4A3A" /></g>
<text x="210" y="150" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="24" fontStyle="italic" fill="#6B645F">grew up analog</text>
<text x="790" y="150" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="24" fontStyle="italic" fill="#7A3A2D">beta-tested digital</text>
      </svg>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px'}}>
        <div style={{border: '1px solid #E7E5E4', background: '#FFFFFF', borderRadius: '16px', padding: '28px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', lineHeight: '32px', color: '#1C1917'}}>Knows how to meet <i>in person</i></div>
        <div style={{border: '1px solid #E7E5E4', background: '#FFFFFF', borderRadius: '16px', padding: '28px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', lineHeight: '32px', color: '#1C1917'}}>Rejects <i>AI companionship</i></div>
        <div style={{border: '1px solid #E7E5E4', background: '#FFFFFF', borderRadius: '16px', padding: '28px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', lineHeight: '32px', color: '#1C1917'}}>Won't <i>settle</i></div>
      </div>
      <div role="img" aria-label="Then and now. Then: married for achievement and social belonging. Now: dating for love." style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px'}}>
        <div style={{flex: '1 1 360px', minWidth: '0', background: '#F5F5F4', borderRadius: '20px', padding: '32px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <span style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '28px', color: '#6B645F'}}>Then</span>
          <span style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '32px', lineHeight: '38px', color: '#57534E'}}>Married for achievement and belonging</span>
        </div>
        <svg aria-hidden="true" width="56" height="24" viewBox="0 0 56 24" style={{flex: '0 0 auto'}}><path d="M2 12 L50 12 M40 3 L52 12 L40 21" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <div style={{flex: '1 1 360px', minWidth: '0', background: '#F3E3DA', borderRadius: '20px', padding: '32px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <span style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '28px', color: '#7A3A2D'}}>Now</span>
          <span style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '32px', lineHeight: '38px', color: '#1C1917'}}><i>Dating for love</i></span>
        </div>
      </div>
      
    </div>
  </section>

  {/* 5 · SELECTION vs NEW SKILLS */}
  <section style={{background: '#F5F5F4'}}>
    <div style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexDirection: 'column', gap: '48px'}}>
      <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
        <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917', maxWidth: '820px'}}>Be pickier. Know your worth. Filter harder. It sounds right. It's outdated.</h2>
        <p style={{margin: '0', maxWidth: '680px'}}>It's what almost every dating coach teaches, because selection is the only tool most of them have. It was built for a market that no longer exists. Follow it today and a bad experience is all but guaranteed, and that advice has quietly polluted the midlife dating pool for everyone in it.</p>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '24px'}}>
        <div role="img" aria-label="The old playbook: a grid of identical grey profile cards with one ticked. Sort, filter, pick." style={{flex: '1 1 420px', minWidth: '0', background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '20px', padding: '36px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <p style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '28px', color: '#6B645F'}}>The old playbook</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: '8px'}}>
            <span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span>
            <span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#A8A29E', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20"><path d="M4 10 L8 14 L16 5" fill="none" stroke="#FAFAF9" strokeWidth="2.5" /></svg></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span><span style={{aspectRatio: '3 / 4', borderRadius: '6px', background: '#E7E5E4'}}></span>
          </div>
          <p style={{margin: '0', fontSize: '15px', lineHeight: '22px', color: '#6B645F', paddingTop: '4px'}}>Where it leads: a pool full of people filtering each other out, and everyone wondering why it feels so bad.</p>
        </div>
        <div role="img" aria-label="What dating takes now: two paths winding toward each other, a small rolling circle on one of them. Read, adjust, build." style={{flex: '1 1 420px', minWidth: '0', background: '#F3E3DA', borderRadius: '20px', padding: '36px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <p style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '28px', color: '#7A3A2D'}}>What dating takes now</p>
          <svg aria-hidden="true" viewBox="0 0 400 150" style={{display: 'block', width: '100%', height: 'auto'}}>
            <path d="M10 30 C 120 30, 150 90, 230 80 S 330 70, 390 75" fill="none" stroke="#9A4A3A" strokeWidth="2" />
            <path d="M10 130 C 120 130, 160 70, 240 82 S 340 80, 390 75" fill="none" stroke="#78716C" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="150" cy="56" r="8" fill="#FAFAF9" stroke="#1C1917" strokeWidth="2" />
          </svg>
          <p style={{margin: '0', fontSize: '15px', lineHeight: '22px', color: '#44403C', paddingTop: '4px'}}>The dynamics have changed and the numbers aren't the same. It takes a deeper bench of skills.</p>
        </div>
      </div>
    </div>
  </section>

  {/* 6 · NO DURESS → HER MOMENT */}
  <section style={{background: '#1C1917', color: '#E7E5E4'}}>
    <div style={{maxWidth: '1120px', margin: '0 auto', padding: '120px 24px', display: 'flex', flexDirection: 'column', gap: '56px'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center'}}>
        <div style={{flex: '1 1 440px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#FAFAF9'}}>You never let pressure make the choice for you. <i style={{color: '#E8B9A6'}}>That's why this is your moment.</i></h2>
        </div>
        <div role="img" aria-label="Three pressures fading out: a deadline, other people's expectations, settle already. Below them, in bright type: your own terms." style={{flex: '1 1 360px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px', fontFamily: "'Cormorant Garamond', Georgia, serif"}}>
          <span style={{fontSize: '30px', lineHeight: '36px', color: '#78716C', textDecoration: 'line-through'}}>A deadline</span>
          <span style={{fontSize: '30px', lineHeight: '36px', color: '#78716C', textDecoration: 'line-through'}}>Other people's expectations</span>
          <span style={{fontSize: '30px', lineHeight: '36px', color: '#78716C', textDecoration: 'line-through'}}>"Settle already"</span>
          <span style={{fontSize: '44px', lineHeight: '50px', color: '#FAFAF9', fontStyle: 'italic'}}>Your own terms.</span>
        </div>
      </div>
      <div style={{borderTop: '1px solid #44403C', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <p style={{margin: '0', fontSize: '20px', lineHeight: '32px', color: '#E7E5E4', maxWidth: '720px'}}>Dating now isn't about checking a box. It's about a true experience of the heart, and you were built for that. But you have to move differently:</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px'}}>
          <div style={{border: '1px solid #57534E', borderRadius: '16px', padding: '28px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', lineHeight: '32px', color: '#FAFAF9'}}>Answer "why didn't you marry?" with <i>magnetism</i></div>
          <div style={{border: '1px solid #57534E', borderRadius: '16px', padding: '28px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', lineHeight: '32px', color: '#FAFAF9'}}>Understand what's <i>actually</i> going on for midlife men</div>
          <div style={{border: '1px solid #57534E', borderRadius: '16px', padding: '28px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', lineHeight: '32px', color: '#FAFAF9'}}>Stand out as the <i>different</i> story in the room</div>
        </div>
      </div>
    </div>
  </section>

  {/* 7 · THE JOURNEY (12 sessions) */}
  <section style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexDirection: 'column', gap: '40px'}}>
    <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
      <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917'}}>Twelve sessions, one arc, shaped around you.</h2>
    </div>
    <div role="img" aria-label="Twelve sessions shown as numbered dots in three phases: Understanding, Building and Refining. A small circle rolls along a line above them, starting your journey." style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <svg aria-hidden="true" viewBox="0 0 1000 24" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '24px'}}><path d="M8 12 L 992 12" stroke="#D6D3D1" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></svg>
      <div style={{position: 'relative', height: '0'}}><span style={{position: 'absolute', left: '4%', top: '-40px', width: '16px', height: '16px', boxSizing: 'border-box', borderRadius: '999px', background: '#FAFAF9', border: '2px solid #1C1917'}}></span></div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '6px', alignItems: 'center'}}>
        <span style={{height: '44px', borderRadius: '999px', background: '#F3E3DA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#1C1917'}}>1</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#F3E3DA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#1C1917'}}>2</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#F3E3DA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#1C1917'}}>3</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#F3E3DA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#1C1917'}}>4</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#E8B9A6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#1C1917'}}>5</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#E8B9A6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#1C1917'}}>6</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#E8B9A6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#1C1917'}}>7</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#E8B9A6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#1C1917'}}>8</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#9A4A3A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#FAFAF9'}}>9</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#9A4A3A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#FAFAF9'}}>10</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#9A4A3A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#FAFAF9'}}>11</span>
        <span style={{height: '44px', borderRadius: '999px', background: '#9A4A3A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#FAFAF9'}}>12</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '28px', lineHeight: '32px', color: '#1C1917'}}>Understanding</span><span style={{fontSize: '15px', lineHeight: '22px', color: '#6B645F'}}>Men, society and other women</span></div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '28px', lineHeight: '32px', color: '#1C1917'}}>Building</span><span style={{fontSize: '15px', lineHeight: '22px', color: '#6B645F'}}>Your own plan, not just for meeting people but for connecting with them</span></div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}><span style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '28px', lineHeight: '32px', color: '#1C1917'}}>Refining</span><span style={{fontSize: '15px', lineHeight: '22px', color: '#6B645F'}}>An extended cadence that builds many streams of possibility</span></div>
      </div>
      <p style={{margin: '0', textAlign: 'center', fontSize: '15px', lineHeight: '22px', color: '#6B645F'}}>About one session a week for three months, with support in between. Your consultation goes into the details.</p>
    </div>
  </section>

  {/* 7b · IF THIS IS YOU */}
  <section style={{borderTop: '1px solid #E7E5E4'}}>
    <div style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexDirection: 'column', gap: '40px'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917'}}>If this is you</h2>
        <p style={{margin: '0', fontSize: '20px', lineHeight: '32px', color: '#6B645F'}}>A woman somewhere in the Gen X window — roughly 45 to 60.</p>
      </div>
      <ul style={{margin: '0', padding: '0', listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px'}}>
        <li style={{background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', lineHeight: '28px', color: '#1C1917'}}><span aria-hidden="true" style={{width: '16px', height: '16px', boxSizing: 'border-box', borderRadius: '999px', border: '2px solid #1C1917', background: '#FAFAF9'}}></span><span>You're not racing to the altar — and you're definitely not looking for a shuffleboard partner either. You want connection, above all.</span></li>
        <li style={{background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', lineHeight: '28px', color: '#1C1917'}}><span aria-hidden="true" style={{width: '16px', height: '16px', boxSizing: 'border-box', borderRadius: '999px', border: '2px solid #1C1917', background: '#FAFAF9'}}></span><span>You're independent: looking for someone to swap notes with and care deeply for — not someone to complete you.</span></li>
        <li style={{background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', lineHeight: '28px', color: '#1C1917'}}><span aria-hidden="true" style={{width: '16px', height: '16px', boxSizing: 'border-box', borderRadius: '999px', border: '2px solid #1C1917', background: '#FAFAF9'}}></span><span>Your bar is high — not out of difficulty, but out of respect for what love actually is.</span></li>
        <li style={{background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', lineHeight: '28px', color: '#1C1917'}}><span aria-hidden="true" style={{width: '16px', height: '16px', boxSizing: 'border-box', borderRadius: '999px', border: '2px solid #1C1917', background: '#FAFAF9'}}></span><span>You might feel confused about being single at times — but never bitter. What you really feel is frustration that there are so few real ways to actually <i>get to know</i> someone.</span></li>
        <li style={{background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', lineHeight: '28px', color: '#1C1917'}}><span aria-hidden="true" style={{width: '16px', height: '16px', boxSizing: 'border-box', borderRadius: '999px', border: '2px solid #1C1917', background: '#FAFAF9'}}></span><span>You don't need to be a plus-one. You want to have loved someone well, and to have helped them feel their own heart.</span></li>
        <li style={{background: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', lineHeight: '28px', color: '#1C1917'}}><span aria-hidden="true" style={{width: '16px', height: '16px', boxSizing: 'border-box', borderRadius: '999px', border: '2px solid #1C1917', background: '#FAFAF9'}}></span><span>You want someone who rolls alongside you — not someone who subsumes you, and not someone you're auditioning for a role.</span></li>
      </ul>
    </div>
  </section>

  {TESTIMONIALS.length > 0 && (
  <section aria-label="What clients say" style={{borderTop: "1px solid #E7E5E4"}}>
    <div style={{maxWidth: "1120px", margin: "0 auto", padding: "112px 24px 48px"}}>
      <h2 style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: "400", fontSize: "clamp(48px, 6.2vw, 92px)", lineHeight: "1", letterSpacing: "-0.01em", color: "#1C1917", margin: "0"}}>In their words</h2>
    </div>
    <div style={{maxWidth: "1120px", margin: "0 auto", padding: "0 24px 112px"}}>
      <div style={{display: "flex", gap: "20px", overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: "16px"}}>
        {TESTIMONIALS.map((t, i) => (
          <figure key={i} style={{flex: "0 0 min(380px, 85vw)", scrollSnapAlign: "start", margin: "0", background: "#FFFFFF", border: "1px solid #E7E5E4", borderRadius: "20px", padding: "32px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "20px"}}>
            <span aria-hidden="true" style={{width: "16px", height: "16px", boxSizing: "border-box", borderRadius: "999px", border: "2px solid #1C1917", background: "#FAFAF9"}}></span>
            <blockquote style={{margin: "0", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", lineHeight: "34px", color: "#1C1917"}}>{t.quote}</blockquote>
            <figcaption style={{marginTop: "auto", fontSize: "15px", lineHeight: "22px", color: "#6B645F"}}>{t.name}{t.detail ? ` · ${t.detail}` : ""}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)}

  {/* 8 · CONSULTATION */}
  <section id="consult" style={{background: '#F5F5F4'}}>
    <div style={{maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      <div style={{flex: '999 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <h2 style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: '400', fontSize: 'clamp(48px, 6.2vw, 92px)', lineHeight: '1', letterSpacing: '-0.01em', color: '#1C1917'}}>$75 consultation</h2>
        <p style={{margin: '0', fontSize: '20px', lineHeight: '32px', color: '#44403C'}}>Credited in full toward your coaching if you enroll.</p>
      </div>
      <div style={{flex: '1 1 260px', minWidth: '0'}}>
        <a href="https://calendly.com/lakshmi-howtodatehumans/midlife-date-coaching-discovery-call" style={{textDecoration: 'none', background: '#1C1917', color: '#FAFAF9', borderRadius: '999px', padding: '16px 32px', minHeight: '52px', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', fontSize: '15px', letterSpacing: '0.04em'}}>Book your consultation</a>
      </div>
    </div>
  </section>

  {/* 9 · NOTE FROM LAKSHMI */}
  <section style={{maxWidth: '1040px', margin: '0 auto', padding: '120px 24px', display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'flex-start'}}>
    
    <div style={{flex: '1 1 480px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <p style={{margin: '0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '28px', lineHeight: '32px', color: '#6B645F'}}>A note from me</p>
      <p style={{margin: '0'}}>For more than three years I've been in long conversations — with women, and with men — about midlife and love. Among the women who hadn't married, one quality stood out again and again: impeccable integrity. They held love itself above all else.</p>
      <p style={{margin: '0'}}>In a culture that quietly treats marriage as the finish line, that integrity can feel like a disadvantage. I've come to believe it's the opposite — it may be your greatest strength, and your moment.</p>
      <p style={{margin: '0'}}>You may have arrived at a quiet conclusion: <i>maybe I'm meant to be single.</i> I believe the opposite could be true. This may be your window — precisely because there is no rush, no deadline, nothing to race.</p>
      <p style={{margin: '0'}}>What stayed with me from those interviews: men are re-entering midlife dating in a steady stream — and yet the very women who mirror what so many of them are actually looking for were quietly throwing in the towel. I mean, I get it. But that math disturbed me.</p>
      <p style={{margin: '0'}}>So I made a choice. I've coached women across the midlife dating landscape for years — divorced, separated, complicated. Now I'm focusing on the women who didn't marry. These are my people. This work was built for you.</p>
      <p style={{margin: '8px 0 0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '32px', lineHeight: '40px', color: '#1C1917'}}>"I built this because I am you. I understand it from the inside."</p>
      <p style={{margin: '0', fontSize: '16px', lineHeight: '24px', color: '#6B645F'}}>— Lakshmi · host of The Later Dater Today · creator of How to Date Humans</p>
    </div>
  </section>

  {/* 10 · CLOSING IMAGE: HER IN THE FIELD */}
  <section style={{background: '#FAFAF9', borderTop: '1px solid #E7E5E4'}}>
    <svg role="img" aria-label="The small open circle that has rolled through the page arrives in a wide field of darker, solid circles, the men, scattered among small green seeds, some sprouting. A dotted trail shows the path she rolled in on." viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" style={{display: 'block', width: '100%', height: '520px'}}><path d="M0 300 C 200 310, 380 260, 581 270" fill="none" stroke="#9A4A3A" strokeWidth="2" strokeDasharray="4 8" strokeLinecap="round" opacity="0.7" /><circle cx="1365" cy="205" r="13" fill="#5B6670" opacity="0.55" /><circle cx="839" cy="473" r="13" fill="#5B6670" opacity="0.55" /><circle cx="54" cy="225" r="11" fill="#44403C" opacity="0.85" /><circle cx="1191" cy="64" r="9" fill="#2F3A44" opacity="0.85" /><circle cx="908" cy="303" r="11" fill="#3F4A55" opacity="0.7" /><circle cx="831" cy="206" r="9" fill="#3F4A55" opacity="1" /><circle cx="67" cy="446" r="11" fill="#44403C" opacity="1" /><circle cx="444" cy="424" r="18" fill="#2F3A44" opacity="1" /><circle cx="813" cy="322" r="9" fill="#4E5A66" opacity="0.55" /><circle cx="980" cy="222" r="15" fill="#5B6670" opacity="0.7" /><circle cx="670" cy="480" r="13" fill="#2F3A44" opacity="0.7" /><circle cx="1123" cy="43" r="21" fill="#4E5A66" opacity="0.85" /><circle cx="756" cy="455" r="13" fill="#4E5A66" opacity="0.7" /><circle cx="170" cy="217" r="9" fill="#2F3A44" opacity="1" /><circle cx="219" cy="254" r="13" fill="#2F3A44" opacity="1" /><circle cx="1385" cy="40" r="9" fill="#4E5A66" opacity="0.55" /><circle cx="490" cy="182" r="13" fill="#3F4A55" opacity="1" /><circle cx="1360" cy="247" r="9" fill="#4E5A66" opacity="0.85" /><circle cx="94" cy="380" r="21" fill="#44403C" opacity="1" /><circle cx="410" cy="201" r="15" fill="#44403C" opacity="0.55" /><circle cx="242" cy="61" r="13" fill="#5B6670" opacity="0.7" /><circle cx="314" cy="149" r="9" fill="#4E5A66" opacity="0.55" /><circle cx="357" cy="203" r="21" fill="#44403C" opacity="0.55" /><circle cx="116" cy="234" r="15" fill="#4E5A66" opacity="1" /><circle cx="400" cy="71" r="18" fill="#2F3A44" opacity="1" /><circle cx="1244" cy="145" r="15" fill="#4E5A66" opacity="1" /><circle cx="1379" cy="78" r="15" fill="#3F4A55" opacity="0.7" /><circle cx="218" cy="342" r="11" fill="#2F3A44" opacity="0.55" /><circle cx="698" cy="306" r="9" fill="#3F4A55" opacity="0.85" /><circle cx="994" cy="268" r="11" fill="#4E5A66" opacity="0.7" /><circle cx="943" cy="385" r="18" fill="#5B6670" opacity="0.85" /><circle cx="1295" cy="406" r="15" fill="#2F3A44" opacity="0.85" /><circle cx="1149" cy="204" r="21" fill="#3F4A55" opacity="1" /><circle cx="90" cy="35" r="15" fill="#44403C" opacity="1" /><circle cx="635" cy="57" r="11" fill="#2F3A44" opacity="0.7" /><circle cx="773" cy="493" r="11" fill="#2F3A44" opacity="1" /><circle cx="542" cy="330" r="18" fill="#44403C" opacity="1" /><circle cx="867" cy="247" r="13" fill="#4E5A66" opacity="0.7" /><circle cx="692" cy="162" r="15" fill="#44403C" opacity="0.85" /><circle cx="147" cy="178" r="11" fill="#44403C" opacity="0.85" /><circle cx="689" cy="360" r="13" fill="#2F3A44" opacity="0.85" /><circle cx="1092" cy="155" r="9" fill="#2F3A44" opacity="0.85" /><circle cx="1243" cy="362" r="21" fill="#4E5A66" opacity="1" /><circle cx="1112" cy="277" r="13" fill="#2F3A44" opacity="0.7" /><circle cx="475" cy="116" r="18" fill="#2F3A44" opacity="0.85" /><circle cx="1161" cy="426" r="11" fill="#4E5A66" opacity="0.85" /><circle cx="1157" cy="104" r="21" fill="#2F3A44" opacity="1" /><circle cx="1138" cy="246" r="9" fill="#44403C" opacity="0.55" /><circle cx="997" cy="497" r="11" fill="#4E5A66" opacity="1" /><circle cx="1164" cy="376" r="15" fill="#4E5A66" opacity="0.55" /><circle cx="294" cy="325" r="13" fill="#4E5A66" opacity="0.55" /><circle cx="1210" cy="249" r="18" fill="#2F3A44" opacity="0.85" /><circle cx="1044" cy="88" r="9" fill="#3F4A55" opacity="0.7" /><circle cx="1412" cy="342" r="18" fill="#4E5A66" opacity="1" /><circle cx="148" cy="390" r="21" fill="#5B6670" opacity="0.85" /><circle cx="625" cy="453" r="11" fill="#3F4A55" opacity="0.85" /><circle cx="40" cy="111" r="11" fill="#44403C" opacity="0.55" /><circle cx="1310" cy="184" r="9" fill="#44403C" opacity="0.7" /><circle cx="188" cy="79" r="18" fill="#2F3A44" opacity="0.55" /><circle cx="876" cy="404" r="11" fill="#44403C" opacity="1" /><circle cx="173" cy="32" r="21" fill="#5B6670" opacity="0.7" /><circle cx="746" cy="289" r="21" fill="#4E5A66" opacity="1" /><circle cx="1272" cy="30" r="9" fill="#2F3A44" opacity="0.7" /><circle cx="399" cy="402" r="11" fill="#3F4A55" opacity="1" /><circle cx="873" cy="104" r="18" fill="#44403C" opacity="0.85" /><circle cx="731" cy="129" r="15" fill="#4E5A66" opacity="0.85" /><circle cx="1262" cy="490" r="18" fill="#4E5A66" opacity="0.85" /><circle cx="1329" cy="464" r="13" fill="#44403C" opacity="0.7" /><circle cx="565" cy="164" r="9" fill="#4E5A66" opacity="1" /><circle cx="347" cy="38" r="21" fill="#5B6670" opacity="1" /><g transform="translate(964 408) rotate(-38)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#93B07C" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#93B07C" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1292 80) rotate(-29)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(1031 343) rotate(-5)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(206 459) rotate(-5)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(1393 114) rotate(-26)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(459 376) rotate(-41)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(477 324) rotate(31)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(738 33) rotate(25)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1419 410) rotate(25)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(382 21) rotate(-16)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(1122 141) rotate(7)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1324 297) rotate(0)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /></g><g transform="translate(1009 47) rotate(35)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(612 38) rotate(-25)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(1351 330) rotate(-7)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(1233 35) rotate(37)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1242 236) rotate(-7)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(1334 139) rotate(-1)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(232 26) rotate(43)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /></g><g transform="translate(291 162) rotate(47)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(256 180) rotate(-28)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(26 130) rotate(18)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /></g><g transform="translate(22 381) rotate(35)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(794 99) rotate(28)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(153 426) rotate(-27)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(1202 204) rotate(-20)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(730 358) rotate(3)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(1415 178) rotate(-39)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1198 367) rotate(44)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(916 210) rotate(-28)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#93B07C" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#93B07C" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(500 28) rotate(4)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1067 133) rotate(-18)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /></g><g transform="translate(1211 453) rotate(-27)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(966 147) rotate(-9)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#93B07C" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#93B07C" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(349 152) rotate(-48)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(662 82) rotate(15)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(642 137) rotate(17)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(788 127) rotate(-47)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(1391 161) rotate(-14)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(380 47) rotate(30)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /></g><g transform="translate(575 22) rotate(-43)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(32 158) rotate(-19)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(762 390) rotate(-28)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1266 203) rotate(12)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#93B07C" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#93B07C" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(215 377) rotate(-28)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(926 23) rotate(-44)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#93B07C" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#93B07C" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(903 382) rotate(-11)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1170 72) rotate(10)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1202 418) rotate(-44)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1190 304) rotate(21)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /></g><g transform="translate(1286 355) rotate(50)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(998 120) rotate(-31)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /></g><g transform="translate(45 69) rotate(-47)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#93B07C" /></g><g transform="translate(519 55) rotate(34)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#7A9A64" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#7A9A64" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#7A9A64" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(1078 262) rotate(-39)"><ellipse cx="0" cy="0" rx="4" ry="7" fill="#5E7F4E" /><path d="M0 -7 C 0 -13, 3 -16, 7 -17" fill="none" stroke="#5E7F4E" strokeWidth="1.6" strokeLinecap="round" /><path d="M1 -12 C -3 -15, -6 -15, -8 -13" fill="none" stroke="#5E7F4E" strokeWidth="1.4" strokeLinecap="round" /></g><circle cx="600" cy="270" r="25" fill="#F3E3DA" opacity="0.8" /><circle cx="600" cy="270" r="15" fill="#FAFAF9" stroke="#1C1917" strokeWidth="2.5" /></svg>
    <p style={{margin: '0', padding: '28px 24px 56px', textAlign: 'center', fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '30px', lineHeight: '36px', color: '#1C1917'}}>Many streams of possibility.</p>
  </section>

  <footer style={{borderTop: '1px solid #E7E5E4', textAlign: 'center', padding: '40px 24px', fontSize: '13px', lineHeight: '20px', color: '#6B645F'}}>How to Date Humans · Lakshmi Rengarajan</footer>
</div>
  );
};

export default CoachingWomen;
