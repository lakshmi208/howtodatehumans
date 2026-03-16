import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoHorizontal from '@/assets/logo-horizontal.png';

const SQUARESPACE = 'https://fennel-oleander-7fr2.squarespace.com';

const navItems = [
  { label: 'Events', to: '/', type: 'internal' as const },
  { label: 'About', to: '/about', type: 'internal' as const },
  { label: 'Press', to: `${SQUARESPACE}/press`, type: 'external' as const },
  { label: 'Newsletter', to: `${SQUARESPACE}/newsletter`, type: 'external' as const },
];

const SiteNav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (path: string, type: string) =>
    `text-sm font-medium tracking-wide uppercase transition-colors ${
      type === 'internal' && location.pathname === path
        ? 'text-foreground'
        : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src={logoHorizontal} alt="How to Date Humans" className="h-14 md:h-16 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.type === 'internal' ? (
              <Link key={item.label} to={item.to} className={linkClass(item.to, item.type)}>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass(item.to, item.type)}
              >
                {item.label}
              </a>
            )
          )}
          <Link
            to="/work-with-me"
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navItems.map((item) =>
            item.type === 'internal' ? (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`block ${linkClass(item.to, item.type)}`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${linkClass(item.to, item.type)}`}
              >
                {item.label}
              </a>
            )
          )}
          <Link
            to="/work-with-me"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default SiteNav;
