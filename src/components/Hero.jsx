import React from 'react';
import { HiDownload, HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-accent">Darshan Rahate</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-text-muted mb-8 font-medium">
            Backend Engineer & Automation Specialist
          </h2>

          <p className="text-lg text-text-muted mb-10 max-w-lg">
            I build scalable APIs, robust cloud infrastructure, and intelligent automation systems
            that transform complex workflows into efficient code. Currently at TCS.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="projects" smooth={true} offset={-70} href="#projects" className="btn btn-primary cursor-pointer">
              View Work <HiArrowNarrowRight className="ml-2" />
            </Link>
            <a
              href="mailto:darshan.rahate.engr@gmail.com?subject=Resume%20request"
              className="btn btn-outline"
            >
              Request resume <HiDownload className="ml-2" aria-hidden />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/darshandevelopes" target="_blank" rel="noopener noreferrer" className="p-2 text-2xl text-text-muted hover:text-accent transition-colors" aria-label="Visit my GitHub profile">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/darshan-rahate/" target="_blank" rel="noopener noreferrer" className="p-2 text-2xl text-text-muted hover:text-accent transition-colors" aria-label="Visit my LinkedIn profile">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
          <div className="relative border border-border bg-bg-card p-4 rounded-xl shadow-2xl overflow-hidden">
            <div className="flex gap-2 mb-4 border-b border-border pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="text-[10px] font-mono text-text-muted ml-2">darshan.sh</span>
            </div>
            <div className="font-mono text-sm leading-relaxed">
              <div className="flex gap-2">
                <span className="text-accent">$</span>
                <span>whoami</span>
              </div>
              <div className="mb-2 text-text-muted">Darshan Rahate</div>

              <div className="flex gap-2">
                <span className="text-accent">$</span>
                <span>cat skills.json</span>
              </div>
              <div className="mb-2">
                <span className="text-blue-400">{"{"}</span> <br />
                <span className="pl-4 text-purple-400">"focus"</span>: <span className="text-green-400">"Backend"</span>, <br />
                <span className="pl-4 text-purple-400">"tech"</span>: <span className="text-yellow-400">["Python", "AWS", "API"]</span> <br />
                <span className="text-blue-400">{"}"}</span>
              </div>

              <div className="flex gap-2">
                <span className="text-accent">$</span>
                <span className="terminal-cursor underline decoration-accent">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
