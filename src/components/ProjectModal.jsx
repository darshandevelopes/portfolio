import React, { useEffect, useRef } from 'react';
import { HiX, HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;
    const focusable = node.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e) => {
      if (e.key !== 'Tab' || focusable.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    node.addEventListener('keydown', trap);
    return () => node.removeEventListener('keydown', trap);
  }, [project]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <button
        type="button"
        className="absolute inset-0 bg-bg-primary/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-label="Close dialog"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="slide-in relative max-h-full w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-bg-card shadow-[0_0_100px_rgba(0,0,0,0.8)]"
      >
        <div className="relative overflow-hidden p-8 md:p-12">
          {/* Header background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] -z-10 rounded-full" />
          
          <div className="mb-12 flex items-start justify-between gap-8">
            <div className="flex-grow">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Case Study • {project.role}</span>
              </div>
              <h2 id="modal-title" className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-[1.1]">
                {project.title}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 flex items-center justify-center h-12 w-12 rounded-full border border-border bg-bg-surface text-text-muted hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Close modal"
            >
              <HiX className="text-2xl" aria-hidden />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h3 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-text-muted opacity-50">
                  The Mission
                </h3>
                <p className="text-xl leading-relaxed text-text-primary font-medium tracking-tight">
                  {project.fullDesc}
                </p>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <section className="card bg-white/[0.02] border-white/5 p-6">
                  <h3 className="mb-4 text-[10px] font-black uppercase tracking-widest text-accent">Key Challenge</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{project.challenge}</p>
                </section>
                <section className="card bg-white/[0.02] border-white/5 p-6">
                  <h3 className="mb-4 text-[10px] font-black uppercase tracking-widest text-green-400">The Solution</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{project.solution}</p>
                </section>
              </div>
            </div>

            <div className="space-y-12">
              <section className="p-8 rounded-3xl bg-accent/5 border border-accent/10 text-center">
                <h3 className="mb-4 text-[10px] font-black uppercase tracking-widest text-accent/60">Outcome</h3>
                <p className="text-3xl font-black text-text-primary tracking-tighter">{project.metric}</p>
              </section>

              <section>
                <h3 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-text-muted opacity-50">
                  Tooling
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="badge px-4 py-2 border-transparent bg-white/5 text-[10px] uppercase font-bold tracking-widest text-text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <div className="flex flex-col gap-4 pt-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full py-4 text-xs tracking-widest uppercase font-black"
                >
                  <FiGithub className="text-xl" aria-hidden /> <span>View Codebase</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full py-4 text-xs tracking-widest uppercase font-black"
                >
                  <HiOutlineExternalLink className="text-xl" aria-hidden /> <span>See Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
