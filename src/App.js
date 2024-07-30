import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useTheme } from './theme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <AboutMe />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
