import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Header = ({ theme, updateTheme }) => {
  const themeToggle = () => {
    theme === 'light' && updateTheme('dark');
    theme === 'dark' && updateTheme('light');
  };

  return (
    <header>
      <Container>
        hi
        <button onClick={themeToggle}>theme change</button>
      </Container>
    </header>
  );
};

export default Header;
