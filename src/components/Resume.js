import React from 'react';
import './Resume.css'; // Import CSS for styling

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-content">
        <div className="resume-summary">
          <h2>Resume</h2>
          <p>
            I am a dedicated and results-driven professional with a solid background in software development and information technology. My experiences include working on various projects that enhance my skills and expertise.
          </p>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          <div className="resume-cards">
            <div className="resume-card">
              <h4>Software Developer Intern</h4>
              <p>Picksmart | 2024 - Present</p>
              <ul>
                <li>Developed and maintained web applications using modern technologies.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              </ul>
            </div>
            <div className="resume-card">
              <h4>Junior Developer</h4>
              <p>Tech Innovations | 2022 - 2024</p>
              <ul>
                <li>Contributed to front-end development projects using React and Angular.</li>
                <li>Implemented new features and fixed bugs in existing applications.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3>Education</h3>
          <div className="resume-cards">
            <div className="resume-card">
              <h4>Bachelor of Information Technology</h4>
              <p>North-West University | 2020 - 2024</p>
              <ul>
                <li>Focused on software development, databases, and web technologies.</li>
                <li>Participated in various coding competitions and hackathons.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3>Skills</h3>
          <div className="skills-list">
            <span className="skill">JavaScript</span>
            <span className="skill">CSS</span>
            <span className="skill">Node.js</span>
            <span className="skill">React</span>
            <span className="skill">Angular</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
