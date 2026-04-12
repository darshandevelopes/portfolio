import React from 'react';
import { HiOutlineLightBulb, HiOutlineBadgeCheck, HiOutlineUserGroup } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="section bg-bg-surface/30">
      <div className="container">
        <h2 className="section-title">About & Philosophy</h2>
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-text-primary">
              I am a dedicated and skilled Software Developer with hands-on experience in 
              <span className="text-accent font-semibold"> API development</span>, 
              <span className="text-accent font-semibold"> cloud technologies</span>, and 
              <span className="text-accent font-semibold"> workflow automation</span>.
            </p>
            
            <p className="text-text-muted leading-relaxed">
              Currently working at <span className="text-text-primary font-medium">TATA Consultancy Services (TCS)</span> as an 
              <span className="text-text-primary font-medium"> Assistant Systems Engineer</span>, 
              I specialize in transforming complex business requirements into high-performance technical solutions. 
              Previously, I served as a Backend AI Intern at Anervea.ai, deep-diving into FastAPI and MongoDB.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-2 bg-accent-muted/10 rounded-r-lg">
              <p className="text-xl font-medium italic text-text-primary">
                "Show, don't just tell. Prove you can ship clean, functional code through the very structure and performance of your work."
              </p>
              <footer className="text-sm mt-2 text-text-muted font-mono">— Engineering Philosophy</footer>
            </blockquote>

            <div className="pt-4 flex flex-col gap-4">
              <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest">Interests Beyond Code</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge">Robotics (1st Prize @ SGBAU)</span>
                <span className="badge">Open Source</span>
                <span className="badge">Green Technology</span>
                <span className="badge">Automation Research</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="card border-accent/20 bg-accent-muted/5">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <HiOutlineBadgeCheck className="text-accent text-2xl" />
                Freelance Track Record
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div>
                    <div className="font-bold text-text-primary">Clients Worldwide</div>
                    <div className="text-xs text-text-muted">Global collaboration & delivery</div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-3xl font-bold text-accent">5 ★</div>
                  <div>
                    <div className="font-bold text-text-primary">Consistent Rating</div>
                    <div className="text-xs text-text-muted">On Fiverr (ashawin01)</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="p-3 rounded-lg bg-bg-surface border border-border">
                     <HiOutlineUserGroup className="text-2xl text-accent" />
                   </div>
                   <div className="self-center">
                     <div className="text-sm font-medium">Leadership: Led Green-Tech Hackathon</div>
                   </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://www.fiverr.com/ashawin01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full justify-center text-sm"
                >
                  View Freelance Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
