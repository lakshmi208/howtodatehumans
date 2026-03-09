import { Link, useLocation } from 'react-router-dom';

const SiteNav = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          How to Date Humans
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Timeline
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            About
          </Link>
          <Link
            to="/lakshmi"
            className={`text-sm font-medium transition-colors ${location.pathname === '/lakshmi' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Lakshmi
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
