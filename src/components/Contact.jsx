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
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="mb-10 text-xl text-text-muted">
            Have a project in mind or just want to chat? My inbox is always open.
          </p>
          
          <a 
            href="mailto:darshan.rahate.engr@gmail.com" 
            className="btn btn-primary text-xl px-10 py-5 rounded-2xl shadow-xl shadow-accent/20 mb-16 inline-flex"
          >
            <HiOutlineMail className="mr-3" /> Say Hello
          </a>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.name} profile`}
                className="group rounded-2xl border border-border bg-bg-surface p-6 transition-[border-color,background-color] duration-200 hover:border-accent hover:bg-accent-muted/5"
              >
                <div className="text-3xl text-text-muted group-hover:text-accent transition-colors flex justify-center mb-3">
                  {link.icon}
                </div>
                <div className="text-sm font-bold text-text-primary capitalize mb-1">{link.name}</div>
                <div className="text-xs text-text-muted flex items-center justify-center">
                  {link.label} <HiOutlineExternalLink className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
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
