import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <h2 className="section-title mb-16">The <span className="gradient-text">Story Behind</span></h2>

        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          <div className="mb-10 text-xl md:text-2xl leading-relaxed text-text-primary font-medium tracking-tight">
            I'm a Software Engineer at <span className="text-accent">TCS</span>, 
            where I focus on developing efficient backend systems and 
            automating complex engineering workflows.
          </div>

          <p className="max-w-2xl leading-relaxed text-text-muted text-lg mb-8">
            My journey into engineering started with a fascination for how systems talk to each other. 
            From my early days as an AI intern at <span className="text-text-primary">Anervea.ai</span> to 
            developing cloud-backed services today, I've always been driven by the elegance of 
            well-structured code and robust automation.
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-text-muted opacity-80 mb-16 italic">
            When I'm not deep in a terminal, you might find me exploring robotics, 
            contributing to open source projects, or researching green technology solutions.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="card p-8 text-center flex flex-col items-center group">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-text-muted opacity-50 group-hover:text-accent transition-colors">Experience</div>
            <div className="text-4xl font-bold tracking-tighter text-text-primary mb-2">50+</div>
            <div className="text-sm font-bold text-text-muted">Global Clients</div>
          </div>
          
          <div className="card p-8 text-center flex flex-col items-center group">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-text-muted opacity-50 group-hover:text-accent transition-colors">Excellence</div>
            <div className="text-4xl font-bold tracking-tighter text-accent mb-2">5.0</div>
            <div className="text-sm font-bold text-text-muted">Fiverr Rating</div>
          </div>

          <div className="card p-8 text-center flex flex-col items-center group">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-text-muted opacity-50 group-hover:text-accent transition-colors">Leadership</div>
            <div className="text-4xl font-bold tracking-tighter text-text-primary mb-2">1st</div>
            <div className="text-sm font-bold text-text-muted">SGBAU Robotics</div>
          </div>
        </div>

        <p className="mx-auto mt-12 text-center">
          <a
            href="https://www.fiverr.com/ashawin01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-xs uppercase tracking-widest"
          >
            Fiverr Profile
            <HiOutlineExternalLink className="text-lg" aria-hidden />
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
