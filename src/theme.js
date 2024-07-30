import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { useState, createContext, useContext } from 'react';

const lightTheme = {
  body: '#FFF',
  text: '#000',
};

const darkTheme = {
  body: '#000',
  text: '#FFF',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.25s linear;
  }
`;

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProviderComponent = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default to 'light' theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
