import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'py-4' : 'py-8'
        }`}
    >
      <div className={`mx-auto max-w-5xl px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'glass-effect rounded-full shadow-lg' : ''
        }`}>
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            href="#hero"
            className="cursor-pointer group flex items-center gap-2"
            aria-label="Go to Hero section"
          >
            <div className="relative flex items-center justify-center h-8 w-8 rounded-lg bg-accent overflow-hidden shadow-lg shadow-accent/20 transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-sm">D</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
            </div>
            <span className="font-bold tracking-tight text-text-primary">Darshan</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                href={`#${link.to}`}
                className="text-xs uppercase tracking-widest font-semibold text-text-muted hover:text-accent cursor-pointer transition-all hover:tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 flex items-center justify-center h-9 w-9 rounded-full bg-bg-surface border border-border text-text-primary hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden gap-1">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center h-9 w-9 rounded-full text-text-primary"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center h-9 w-9 rounded-lg text-text-primary text-2xl"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-bg-card border border-border rounded-2xl p-6 shadow-2xl slide-in">
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                href={`#${link.to}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest hover:text-accent cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
