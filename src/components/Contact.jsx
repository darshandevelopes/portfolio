import React from 'react';
import { HiOutlineMail, HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/darshandevelopes',
      label: 'darshandevelopes'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/darshan-rahate/',
      label: 'darshan-rahate'
    },
    {
      name: 'Fiverr',
      icon: <SiFiverr />,
      url: 'https://www.fiverr.com/ashawin01',
      label: 'ashawin01'
    }
  ];

  return (
    <section id="contact" className="section bg-bg-surface/50">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title mb-8">Let's <span className="gradient-text">Connect</span></h2>
          <p className="mb-16 text-lg text-text-muted max-w-xl leading-relaxed">
            I'm always open to discussing new projects, backend architecture, 
            or interesting opportunities in the automation space.
          </p>
          
          <a 
            href="mailto:darshan.rahate.engr@gmail.com" 
            className="btn btn-primary px-16 py-6 text-lg tracking-widest uppercase transition-all hover:px-20 mb-24 group"
          >
            <HiOutlineMail className="text-2xl group-hover:scale-110 transition-transform" /> 
            <span>Send an Email</span>
          </a>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.name} profile`}
                className="card border-transparent bg-bg-card/40 backdrop-blur-md p-8 hover:bg-white/5 group transition-all"
              >
                <div className="text-3xl text-text-muted group-hover:text-accent transition-all transform group-hover:-translate-y-1 mb-6 flex justify-center">
                  {link.icon}
                </div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-text-primary mb-2">{link.name}</div>
                <div className="text-[10px] text-text-muted font-bold flex items-center justify-center opacity-60">
                  {link.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
