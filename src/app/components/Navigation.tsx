import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/profile', label: 'Profile' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.4)] backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-white text-2xl md:text-3xl hover:opacity-80 transition-opacity"
        >
          Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`
                  font-['Suisse_Int\'l:Regular',sans-serif] text-lg 
                  transition-all duration-300 relative
                  ${location.pathname === item.path
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                  }
                `}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <ul className="flex flex-col px-8 py-6 gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    font-['Suisse_Int\'l:Regular',sans-serif] text-lg 
                    transition-colors block py-2
                    ${location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}