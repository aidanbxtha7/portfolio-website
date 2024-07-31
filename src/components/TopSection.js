import React from 'react';
import './TopSection.css';

const TopSection = ({ toggleTheme, theme }) => {
  return (
    <section className={`top-section ${theme}`}>
      <div className="top-section-content">
        <h1 className="hero-title">Hi, I'm Aidan</h1>
        <p className="hero-subtitle">I'm a software engineer and developer, passionate about innovating technology.</p>
        <div className="cta-buttons">
          <a href="#resume" className="cta-button">Resume</a>
          <a href="#contact" className="cta-button">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
