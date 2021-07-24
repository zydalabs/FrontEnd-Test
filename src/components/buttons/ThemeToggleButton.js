import React from 'react';
import { setThemeInLocalStorage } from '../../constants/localStorage';
import useTheme from '../../hooks/themeContext';
import { sun, moon } from '../../svgs';
import { Button } from './StyledComponents';

const ThemeToggleButton = ({ updateTheme }) => {
  const isLightTheme = useTheme();

  const themeToggle = () => {
    if (isLightTheme) {
      updateTheme('dark');
      setThemeInLocalStorage('dark');
    } else {
      updateTheme('light');
      setThemeInLocalStorage('light');
    }
  };

  const themeIcon = (
    <img
      id='theme-icon'
      alt='light-dark-mode-icon'
      src={isLightTheme ? moon : sun}
    />
  );

  const themeName = isLightTheme ? 'Dark Mode' : 'Light Mode';

  return (
    <Button className='element' onClick={themeToggle} id='theme-toggle-button'>
      {themeIcon}
      {themeName}
    </Button>
  );
};

export default ThemeToggleButton;
