import React from 'react';
import { HiX, HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        className="relative bg-bg-card border border-border w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto slide-in"
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-accent font-mono text-sm block mb-1">{project.role}</span>
              <h2 id="modal-title" className="text-3xl font-bold">{project.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-bg-surface rounded-full transition-colors"
              aria-label="Close modal"
            >
              <HiX className="text-2xl" />
            </button>
          </div>
          
          {/* Main Info */}
          <div className="space-y-8">
            <section>
              <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-2">Problem Statement</h3>
              <p className="text-text-primary leading-relaxed">
                {project.fullDesc}
              </p>
            </section>
            
            <section>
              <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(item => (
                  <span key={item} className="badge bg-accent-muted text-accent border-accent/20">
                    {item}
                  </span>
                ))}
              </div>
            </section>
            
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <div className="bg-bg-surface p-4 rounded-xl border border-border">
                   <h3 className="text-sm font-mono text-accent mb-2">Key Challenge</h3>
                   <p className="text-sm leading-relaxed text-text-muted">
                     {project.challenge}
                   </p>
                </div>
              </section>
              <section>
                <div className="bg-bg-surface p-4 rounded-xl border border-border">
                   <h3 className="text-sm font-mono text-green-500 mb-2">The Solution</h3>
                   <p className="text-sm leading-relaxed text-text-muted">
                     {project.solution}
                   </p>
                </div>
              </section>
            </div>
            
            <section className="bg-accent-muted/20 p-6 rounded-xl border border-accent/10">
               <h3 className="text-sm font-mono text-accent mb-2">Measurable Outcome</h3>
               <p className="text-xl font-bold text-text-primary">
                 {project.metric}
               </p>
            </section>
            
            {/* CTAs */}
            <div className="flex gap-4 pt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-1 justify-center">
                <FiGithub className="mr-2" /> View Code
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex-1 justify-center">
                <HiOutlineExternalLink className="mr-2" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
