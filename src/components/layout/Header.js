import React from 'react';
import { ThemeToggleButton } from '../buttons';
import { HeaderContainer, HeaderWrapper } from './StyledComponents';

const Header = ({ updateTheme }) => {
  return (
    <HeaderWrapper id='header'>
      <HeaderContainer id='header-content-container'>
        Where in the World?
        <ThemeToggleButton updateTheme={updateTheme} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
