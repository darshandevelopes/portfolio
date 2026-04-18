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
      </div>
    </section>
  );
};

export default Hero;
