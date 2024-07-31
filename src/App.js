import React, { useState, useEffect } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useTheme } from './theme';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TopSection from './components/TopSection'; 
import LoadingSpinner from './components/LoadingSpinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Footer from './components/Footer';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`App ${theme}`}>
      <TopSection toggleTheme={toggleTheme} theme={theme} /> 
      <main>
      <TransitionGroup>
          <CSSTransition
            timeout={300} 
            classNames="fade" 
          >
            <div>
        <AboutMe />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
        </div>
        </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </div>
  );
};

export default App;
