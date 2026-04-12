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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close dialog"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="slide-in relative max-h-[min(90vh,720px)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-bg-card shadow-2xl"
      >
        <div className="p-6 md:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <span className="mb-1 block font-mono text-sm text-accent">{project.role}</span>
              <h2 id="modal-title" className="text-3xl font-bold">
                {project.title}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full p-2 transition-colors hover:bg-bg-surface"
              aria-label="Close modal"
            >
              <HiX className="text-2xl" aria-hidden />
            </button>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="mb-2 font-mono text-sm uppercase tracking-wider text-text-muted">
                Problem statement
              </h3>
              <p className="leading-relaxed text-text-primary">{project.fullDesc}</p>
            </section>

            <section>
              <h3 className="mb-2 font-mono text-sm uppercase tracking-wider text-text-muted">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="badge border-accent/20 bg-accent-muted text-accent">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <div className="grid gap-8 md:grid-cols-2">
              <section>
                <div className="rounded-xl border border-border bg-bg-surface p-4">
                  <h3 className="mb-2 font-mono text-sm text-accent">Key challenge</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{project.challenge}</p>
                </div>
              </section>
              <section>
                <div className="rounded-xl border border-border bg-bg-surface p-4">
                  <h3 className="mb-2 font-mono text-sm text-emerald-500">The solution</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{project.solution}</p>
                </div>
              </section>
            </div>

            <section className="rounded-xl border border-accent/10 bg-accent-muted/20 p-6">
              <h3 className="mb-2 font-mono text-sm text-accent">Measurable outcome</h3>
              <p className="text-xl font-bold text-text-primary">{project.metric}</p>
            </section>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1"
              >
                <FiGithub className="shrink-0" aria-hidden /> View code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex-1"
              >
                <HiOutlineExternalLink className="shrink-0" aria-hidden /> Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
