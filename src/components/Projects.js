import React from 'react';
import './Projects.css'; // Import CSS for styling

const projects = [
  {
    title: 'Project One',
    description: 'An innovative web application built with React and Node.js.',
    technologies: ['React', 'Node.js', 'CSS'],
    link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'Project Two',
    description: 'A responsive portfolio website showcasing various projects.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/yourusername/project-two'
  },
  {
    title: 'Project Three',
    description: 'A mobile app developed using React Native for cross-platform support.',
    technologies: ['React Native', 'Firebase'],
    link: 'https://github.com/yourusername/project-three'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="technology">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
