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
    <section id="projects" className="section bg-bg-surface/30">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group cursor-pointer"
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
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded border border-accent/30 px-2 py-0.5 font-mono text-xs text-accent">
                  {project.metric}
                </div>
                <div className="flex gap-3 text-text-muted">
                  <FiGithub className="pointer-events-none" aria-hidden />
                  <HiOutlineExternalLink className="pointer-events-none" aria-hidden />
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-accent">
                {project.title}
              </h3>

              <p className="mb-6 line-clamp-3 text-sm text-text-muted">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="self-center text-xs text-text-muted">
                    +{project.stack.length - 3} more
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs font-medium text-accent">View case study</span>
                <HiOutlineExternalLink className="text-accent" aria-hidden />
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
