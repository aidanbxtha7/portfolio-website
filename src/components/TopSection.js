import React from 'react';
import './TopSection.css';

const TopSection = ({ toggleTheme, theme }) => {
  return (
    <section className="top-section">
      <div className="top-section-content">
        <h1 className="hero-title">Hi, I'm Aidan </h1>
        <p className="hero-subtitle">I'm a future software developer, passionate about innovating technology</p>
        <div className="cta-buttons">
          <a href="#about" className="cta-button">About Me</a>
          <a href="#contact" className="cta-button">Contact Me</a>
        </div>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </section>
  );
};

export default TopSection;
