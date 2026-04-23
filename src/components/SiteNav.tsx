import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoHorizontal from '@/assets/logo-horizontal.png';

const navItems = [
  { label: 'Events', href: '/', activePath: '/' },
  { label: 'About', href: '/about', activePath: '/about' },
  { label: 'Press', href: '/press', activePath: '/press' },
  { label: 'Newsletter', href: '/#newsletter' },
];

const ctaItem = { label: 'Get in Touch', href: '/work-with-me', activePath: '/work-with-me' };

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
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="shrink-0" aria-label="Go to How to Date Humans homepage">
          <img src={logoHorizontal} alt="How to Date Humans" className="h-14 md:h-16 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={linkClass(item.activePath)}>
              {item.label}
            </a>
          ))}
          <a
            href={ctaItem.href}
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            {ctaItem.label}
          </a>
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
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block ${linkClass(item.activePath)}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaItem.href}
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            {ctaItem.label}
          </a>
        </div>
      )}
    </nav>
  );
};

export default SiteNav;
