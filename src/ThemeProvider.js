import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes'; 

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => 
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    document.body.className = theme === lightTheme ? 'light-mode' : 'dark-mode';
    const header = document.querySelector('.header');
    const footer = document.querySelector('footer');
    if (header) header.className = `header ${theme === lightTheme ? 'light-mode' : 'dark-mode'}`;
    if (footer) footer.className = `footer ${theme === lightTheme ? 'light-mode' : 'dark-mode'}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
