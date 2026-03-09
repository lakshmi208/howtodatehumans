import { Link, useLocation } from 'react-router-dom';

const SiteNav = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `text-sm font-medium tracking-wide uppercase transition-colors ${
      location.pathname === path
        ? 'text-foreground'
        : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark matching Squarespace site */}
        <Link to="/" className="flex items-baseline gap-0 tracking-tight text-base">
          <span className="font-semibold uppercase text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            HOW
          </span>
          <span className="font-normal lowercase italic mx-[2px] text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            to
          </span>
          <span className="font-semibold uppercase text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            DATE
          </span>
          <span className="font-semibold uppercase italic text-[hsl(var(--primary))] ml-[3px] text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            HUMANS
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={linkClass('/')}>
            Events
          </Link>
          <Link to="/about" className={linkClass('/about')}>
            About
          </Link>
          <Link to="/lakshmi" className={linkClass('/lakshmi')}>
            Lakshmi
          </Link>
          <a
            href="https://fennel-oleander-7fr2.squarespace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Newsletter
          </a>
          <Link
            to="/work-with-me"
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
