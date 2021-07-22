import React from 'react';
import Header from './Header';
import { GlobalAppWrapper } from '../styles/globalStyles';

const Layout = ({ theme, updateTheme, children }) => {
  return (
    <>
      <GlobalAppWrapper>
        <Header theme={theme} updateTheme={updateTheme} />
        {children}
      </GlobalAppWrapper>
    </>
  );
};

export default Layout;
