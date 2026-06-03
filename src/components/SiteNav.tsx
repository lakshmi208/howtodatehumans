import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoHorizontal from '@/assets/logo-horizontal.png';

const navItems = [
  { label: 'Home', href: '/', activePath: '/' },
  { label: 'Coaching', href: '/coaching', activePath: '/coaching' },
  { label: 'Events', href: '/events', activePath: '/events' },
  { label: 'About', href: '/about', activePath: '/about' },
];

const ctaItem = {
  label: 'Work with me',
  href: '/coaching',
};

const SiteNav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (activePath?: string) =>
    `text-sm font-medium tracking-wide uppercase transition-colors ${
      activePath && location.pathname === activePath
        ? 'text-foreground'
        : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-24 md:h-28 flex items-center justify-between">
        <Link to="/" className="shrink-0 flex flex-col" aria-label="Lakshmi Rengarajan — Gen X Dating Coach">
          <img src={logoHorizontal} alt="How to Date Humans" className="h-16 md:h-20 w-auto" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
            Gen X Dating Coach · Chicago
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className={linkClass(item.activePath)}>
              {item.label}
            </Link>
          ))}
          <Link
            to={ctaItem.href}
            className="bg-[hsl(var(--coral))] text-[hsl(var(--ink-foreground))] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            {ctaItem.label}
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block ${linkClass(item.activePath)}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={ctaItem.href}
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-[hsl(var(--coral))] text-[hsl(var(--ink-foreground))] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            {ctaItem.label}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default SiteNav;
