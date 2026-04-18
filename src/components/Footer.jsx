import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 mt-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="container flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-text-primary">Darshan Rahate</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">
            © {new Date().getFullYear()} • Built with Precision and Passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
