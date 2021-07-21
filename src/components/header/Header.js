import React from 'react';
import styled from 'styled-components';
import { sun, moon } from '../../svgs';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const ThemeToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const Header = ({ theme, updateTheme }) => {
  const isLightTheme = theme === 'light';

  const themeToggle = () => {
    isLightTheme ? updateTheme('dark') : updateTheme('light');
  };

  const themeIcon = (
    <img alt='light-dark-mode-icon' src={isLightTheme ? moon : sun} />
  );

  const themeName = isLightTheme ? 'Dark Mode' : 'Light Mode';

  return (
    <header>
      <Container>
        Where in the World?
        <ThemeToggleButton className='element' onClick={themeToggle}>
          {themeIcon}
          {themeName}
        </ThemeToggleButton>
      </Container>
    </header>
  );
};

export default Header;
