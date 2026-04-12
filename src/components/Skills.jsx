import React from 'react';
import { 
  SiPython, 
  SiDjango, 
  SiFastapi, 
  SiAmazonaws, 
  SiDocker, 
  SiLinux, 
  SiJavascript, 
  SiMysql, 
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiGithub
} from 'react-icons/si';

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
        { name: "AWS", icon: <SiAmazonaws className="text-orange-500" /> },
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
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Toolkit</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-bg-surface p-6 rounded-2xl border border-border">
              <h3 className="text-lg font-bold mb-6 text-accent font-mono uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3">
                    <div className="text-xl text-text-muted">
                      {skill.icon || <div className="w-5 h-5 rounded-sm bg-accent/20" />}
                    </div>
                    <span className="font-medium">{skill.name}</span>
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
