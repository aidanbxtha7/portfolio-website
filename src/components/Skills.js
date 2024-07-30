import React from 'react';
import './Skills.css'; 

const skillsData = [
  { id: 1, title: 'JavaScript', level: '40%', description: 'Proficient in ES6+, modern frameworks, and libraries.', image: 'https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000' },
  { id: 2, title: 'React', level: '55%', description: 'Experienced with hooks, context API, and state management.', image: 'https://img.icons8.com/color/48/000000/react-native.png' },
  { id: 3, title: 'CSS', level: '50%', description: 'Skilled in responsive design, Flexbox, and CSS Grid.', image: 'https://img.icons8.com/?size=100&id=5cVdiiKKi0vX&format=png&color=000000' },
  { id: 4, title: 'Node.js', level: '30%', description: 'Familiar with backend development and Express.js.', image: 'https://img.icons8.com/?size=100&id=ouWtcsgDBiwO&format=png&color=000000' },
  { id: 5, title: 'Git', level: '40%', description: 'Experienced with version control, branching, and merging.', image: 'https://img.icons8.com/ios/50/000000/git.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-container">
        {skillsData.map(skill => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon">
              <img src={skill.image} alt={skill.title} className="skill-image" />
            </div>
            <h2 className="skill-title">{skill.title}</h2>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: skill.level }}></div>
            </div>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
