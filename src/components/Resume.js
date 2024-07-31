import React from 'react';
import './Resume.css';

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
              <h4>Full Time Student</h4>
              <p>NWU | 2020 - 2024</p>
              <ul>
                <li>Furthered my knowledge and expertise in the field of Information Technology</li>
                <li>Learned various programming skills as well as soft skills.</li>
              </ul>
            </div>
            <div className="resume-card">
              <h4>Software Developer & Engineer</h4>
              <p>Picksmart | 2025 - Present</p>
              <ul>
                <li>Starting my first job as a software developer and engineer at Picksmart.</li>
                <li>I will be building innovative solutions using Java and various other technologies.</li>
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
                <li>Focused on software development, databases, and algorithms.</li>
                <li>Developed my soft skills.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3>Hobbies and Interests</h3>
          <div className="skills-list">
            <span className="skill"><i className="fas fa-code"></i>Coding</span>
            <span className="skill"><i className="fas fa-basketball-ball"></i>Padel</span>
            <span className="skill"><i className="fas fa-dumbbell"></i>Gym</span>
            <span className="skill"><i className="fas fa-music"></i>Music</span>
            <span className="skill"><i className="fas fa-coffee"></i>Coffee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
