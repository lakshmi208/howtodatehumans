import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';

const SiteNav = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          How to Date Humans
        </Link>
        <div className="flex items-center gap-6">
          <NavLink to="/" active={location.pathname === '/'}>
            Timeline
          </NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
