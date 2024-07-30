import React from 'react';
import './Footer.css'; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/aidanbxtha7" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/aidanbotha777" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://instagram.com/aidanbxtha" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:aidanbotha30@gmail.com.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
