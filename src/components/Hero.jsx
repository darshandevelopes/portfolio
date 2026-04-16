import React from 'react';
import { HiDownload, HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent-muted border border-accent/20">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-accent">Software Engineer • Backend Specialist</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight slide-in">
          Building Better <br />
          <span className="gradient-text">Backend Systems</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl leading-relaxed slide-in" style={{ animationDelay: '0.1s' }}>
          I'm a Software Engineer at TCS specializing in building scalable APIs, 
          robust cloud services, and intelligent automation that solve real-world engineering challenges.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-20 slide-in" style={{ animationDelay: '0.2s' }}>
          <Link to="projects" smooth={true} offset={-70} href="#projects" className="btn btn-primary px-10 py-4 text-base">
            Explore My Work <HiArrowNarrowRight className="ml-2" />
          </Link>
          <a
            href="mailto:darshan.rahate.engr@gmail.com?subject=Resume%20request"
            className="btn btn-outline px-10 py-4 text-base"
          >
            Request Resume <HiDownload className="ml-2" aria-hidden />
          </a>
        </div>

        {/* Terminal Effect - refined */}
        <div className="w-full max-w-2xl slide-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
          <div className="relative border border-border bg-bg-card/50 backdrop-blur-xl p-6 rounded-2xl overflow-hidden text-left">
            <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="mx-auto text-[10px] font-mono text-text-muted uppercase tracking-widest">darshan.terminal</div>
            </div>
            
            <div className="font-mono text-sm leading-relaxed space-y-4">
              <div className="flex gap-3">
                <span className="text-accent">~</span>
                <span className="text-text-primary">whoami</span>
              </div>
              <div className="pl-6 text-text-muted">
                <span className="text-accent-hover font-bold">Darshan Rahate /</span> Backend Engineer at TCS
              </div>

              <div className="flex gap-3">
                <span className="text-accent">~</span>
                <span className="text-text-primary">cat tech_stack.json</span>
              </div>
              <div className="pl-6 bg-white/5 p-4 rounded-lg border border-white/5">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-purple-400">"languages"</span>: <span className="text-green-400">["Python", "Go", "JS"]</span>,
                  </div>
                  <div>
                    <span className="text-purple-400">"cloud"</span>: <span className="text-yellow-400">["AWS", "Docker"]</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-accent">~</span>
                <span className="terminal-cursor">█</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 slide-in" style={{ animationDelay: '0.4s' }}>
          <a href="https://github.com/darshandevelopes" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-muted hover:text-accent transition-all" aria-label="Visit my GitHub profile">
            <FaGithub className="text-xl" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/darshan-rahate/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-muted hover:text-accent transition-all" aria-label="Visit my LinkedIn profile">
            <FaLinkedin className="text-xl" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
