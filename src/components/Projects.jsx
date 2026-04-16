import React, { useState, useEffect, useCallback } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const ProjectModal = React.lazy(() => import('./ProjectModal'));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedProject]);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
      
      <div className="container">
        <h2 className="section-title mb-16 px-4">
          Handcrafted <span className="gradient-text">Experiences</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="card group cursor-pointer border-white/5 flex flex-col h-full slide-in"
              style={{ animationDelay: `${0.1 * idx}s` }}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} case study`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(project);
                }
              }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                  {project.metric}
                </div>
                <div className="flex gap-4 text-text-muted transition-transform group-hover:scale-110">
                  <FiGithub className="pointer-events-none hover:text-accent" aria-hidden />
                  <HiOutlineExternalLink className="pointer-events-none hover:text-accent" aria-hidden />
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-text-primary transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-text-muted">
                  {project.shortDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.slice(0, 3).map((item) => (
                  <span key={item} className="badge bg-transparent border-border/50 text-[10px] uppercase tracking-tighter">
                    {item}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="self-center text-[10px] text-text-muted font-bold ml-1 opacity-50">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between text-accent font-bold text-xs uppercase tracking-widest opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span>View Case Study</span>
                <HiOutlineExternalLink className="text-lg" aria-hidden />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <React.Suspense
          fallback={<div className="fixed inset-0 z-50 bg-bg-primary/80 backdrop-blur-sm" aria-hidden />}
        >
          <ProjectModal project={selectedProject} onClose={closeModal} />
        </React.Suspense>
      )}
    </section>
  );
};

export default Projects;
