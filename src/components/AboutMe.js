import React from 'react';
import './AboutMe.css'; // Import CSS for styling

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-me-content">
        <div className="profile-card">
          <div className="profile-pic-wrapper">
            <img src="https://img.freepik.com/premium-photo/man-with-glasses-laptop-with-cloud-background_553012-97845.jpg?w=740" alt="Profile" className="profile-pic" />
          </div>
        </div>

        <div className="timeline">
          <h3>My Journey</h3>
          <div className="timeline-item">
            <span className="year">2019</span>
            <div className="timeline-content">
              <h4>Finished High School</h4>
              <p>Completed high school education with a focus on programming and physics.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="year">2020</span>
            <div className="timeline-content">
              <h4>Started Studying at North-West University</h4>
              <p>Embarked on a journey in Information Technology at North-West University.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="year">2024</span>
            <div className="timeline-content">
              <h4>Completing Degree</h4>
              <p>Expected to complete a degree in Information Technology.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="year">2025</span>
            <div className="timeline-content">
              <h4>Starting as a Software Developer at Picksmart</h4>
              <p>Excited to begin a new role as a Software Developer at Picksmart.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
