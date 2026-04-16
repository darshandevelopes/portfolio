import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 mt-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="container flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-text-primary">Darshan Rahate</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">
            © {new Date().getFullYear()} • Built with Precision and Passion
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <a
            href="https://pagespeed.web.dev/analysis/https-darshan-rahate-pages-dev/5bhxsjfh1e?form_factor=desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-border bg-bg-card/50 px-5 py-2 transition-all hover:border-accent hover:bg-accent/5"
          >
            <HiLightningBolt className="shrink-0 text-accent group-hover:scale-125 transition-transform" aria-hidden /> 
            <span className="text-[10px] font-black uppercase tracking-widest text-text-primary">Performance: 100/100</span>
          </a>
          
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
            <span className="opacity-40">System Status: Optimal</span>
            <div className="h-3 w-[1px] bg-border" />
            <span className="opacity-40">v2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
