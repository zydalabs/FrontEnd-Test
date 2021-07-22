import React from 'react';
import styled from 'styled-components';
import { mobileView, tabletView } from '../constants/stylingVariables';
import ThemeToggleButton from './ThemeToggleButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: ${tabletView}) {
    width: 90%;
  }
  @media (max-width: ${mobileView}) {
    width: 100%;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 800;
  padding: 20px;
  box-shadow: 0 -6px 10px #171918;

  @media (max-width: ${tabletView}) {
    font-size: 18px;
  }

  @media (max-width: ${mobileView}) {
    font-size: 16px;
  }
`;

const Header = ({ theme, updateTheme }) => {
  return (
    <HeaderWrapper>
      <Container>
        Where in the World?
        <ThemeToggleButton theme={theme} updateTheme={updateTheme} />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
