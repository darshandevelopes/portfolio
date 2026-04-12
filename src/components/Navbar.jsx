import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="hero" smooth={true} href="#hero" className="cursor-pointer group" aria-label="Go to Hero section">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-mono text-accent">DR</span>
            <div className="h-2 w-2 rounded-full bg-accent group-hover:animate-ping"></div>
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
            className="p-2 rounded-lg bg-bg-surface border border-border hover:border-accent transition-all"
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
