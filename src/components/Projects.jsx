import React, { useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const ProjectModal = React.lazy(() => import('./ProjectModal'));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section bg-bg-surface/30">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card group cursor-pointer" 
              onClick={() => openModal(project)}
              role="button"
              tabIndex="0"
              aria-label={`View ${project.title} case study`}
              onKeyDown={(e) => e.key === 'Enter' && openModal(project)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded">
                  {project.metric}
                </div>
                <div className="flex gap-3 text-text-muted">
                  <FiGithub className="hover:text-accent transition-colors" />
                  <HiOutlineExternalLink className="hover:text-accent transition-colors" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-text-muted text-sm mb-6 line-clamp-3">
                {project.shortDesc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="text-xs text-text-muted self-center">
                    +{project.stack.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-accent">View Case Study</span>
                <HiOutlineExternalLink className="text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <React.Suspense fallback={<div className="fixed inset-0 z-50 bg-bg-primary/80 backdrop-blur-sm" />}>
          <ProjectModal project={selectedProject} onClose={closeModal} />
        </React.Suspense>
      )}
    </section>
  );
};

export default Projects;
