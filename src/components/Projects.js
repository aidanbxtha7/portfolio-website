import React from 'react';
import './Projects.css'; // Import CSS for styling

const projects = [
  {
    title: 'Snake',
    description: 'Clone of the popular mobile snake game. ',
    technologies: ['JAVA'],
    link: 'https://github.com/yourusername/project-one',
    image: 'https://www3.ntu.edu.sg/home/ehchua/programming/java/images/GameSnakeV1_Captured.png' 
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing various projects.',
    technologies: ['React', 'CSS', 'JavaScript'],
    link: 'https://github.com/aidanbxtha7/portfolio-website',
    image: 'https://imagekit.io/blog/content/images/2024/03/image-30.png' 
  },
  {
    title: 'UPCOMMING',
    description: 'In progress.',
    technologies: ['tbd'],
    link: 'https://github.com/yourusername/project-three',
    image: 'https://as2.ftcdn.net/v2/jpg/05/79/68/85/1000_F_579688567_hmuT3hnFxTeDBXsyUUsmvB6Kvt0UF8Bd.jpg' 
  }
];

const Projects = () => {
  return (
    <section id="projects" className="project">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
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
