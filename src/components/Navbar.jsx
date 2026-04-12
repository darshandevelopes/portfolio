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
          setScrolled(window.scrollY > 50);
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
    <nav className={`fixed z-50 w-full py-4 ${scrolled ? 'glass-effect' : 'bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="hero" smooth={true} href="#hero" className="cursor-pointer" aria-label="Go to Hero section">
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold text-accent">DR</span>
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-70}
              href={`#${link.to}`}
              className="text-sm font-medium hover:text-accent cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-border bg-bg-surface p-2 transition-[border-color,background-color] duration-200 hover:border-accent"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-3" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-2xl" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-card border-b border-border py-4 px-6 slide-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-70}
                href={`#${link.to}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-accent cursor-pointer"
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
