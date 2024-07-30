import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useTheme } from './theme';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TopSection from './components/TopSection'; // Import TopSection

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <TopSection toggleTheme={toggleTheme} theme={theme} /> 
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
