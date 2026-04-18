import React from 'react';
import { 
  SiPython, 
  SiDjango, 
  SiFastapi, 
  SiDocker, 
  SiLinux, 
  SiJavascript, 
  SiMysql, 
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiGithub
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ]
    },
    {
      title: "Back-End",
      skills: [
        { name: "Django", icon: <SiDjango className="text-green-600" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
        { name: "REST APIs", icon: null },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
        { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Git/GitHub", icon: <SiGithub /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "NoSQL", icon: <SiMongodb className="text-green-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-bg-surface/50">
      <div className="container">
        <div className="flex flex-col items-center mb-16 px-4">
          <h2 className="section-title mb-4">The <span className="gradient-text">Technological Foundation</span></h2>
          <p className="text-text-muted text-center max-w-xl">
            A specialized toolkit for building pragmatic, high-performance backend systems that address real-world constraints.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <div 
              key={cat.title} 
              className="card border-transparent bg-bg-card/40 backdrop-blur-md p-8 hover:bg-bg-card transition-all slide-in"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="h-1 w-12 bg-accent/30 rounded-full mb-6" />
              <h3 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-accent">
                {cat.title}
              </h3>
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 group">
                    <div className="text-xl text-text-muted transition-colors group-hover:text-accent">
                      {skill.icon || <div className="w-5 h-5 rounded-full border border-accent/30" />}
                    </div>
                    <span className="text-sm font-semibold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
