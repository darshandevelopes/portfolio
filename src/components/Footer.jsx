import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-20">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Darshan Rahate. All rights reserved.</p>
          <p className="mt-1">Built with React · Hosted on Cloudflare Pages</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="https://pagespeed.web.dev/analysis?url=https://darshan-rahate.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-bg-card px-3 py-1.5 font-mono text-xs font-bold text-text-primary transition-[border-color,background-color] duration-200 hover:border-emerald-500/60 hover:bg-bg-surface"
          >
            <HiLightningBolt className="shrink-0 text-emerald-400" aria-hidden /> PageSpeed Insights
          </a>
          
          <div className="h-4 w-[1px] bg-border hidden md:block"></div>
          
          <div className="text-xs font-mono text-text-muted">
            v1.0.0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
