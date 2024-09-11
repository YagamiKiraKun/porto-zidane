import React from 'react';
import { useTheme } from '../ThemeProvider'; 
import { lightTheme } from '../themes/lightTheme'; 
import { darkTheme } from '../themes/darkTheme'; 

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const icon = theme === lightTheme ? '🌙' : '💡';

  return (
    <button onClick={toggleTheme} className="theme-switch-button">
      {icon}
    </button>
  );
};

export default ThemeSwitch;
