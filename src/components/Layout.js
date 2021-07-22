import React from 'react';
import Header from './Header';
import { GlobalAppWrapper } from '../styles/globalStyles';

const Layout = ({ updateTheme, children }) => {
  return (
    <>
      <GlobalAppWrapper id='layout'>
        <Header updateTheme={updateTheme} />
        {children}
      </GlobalAppWrapper>
    </>
  );
};

export default Layout;
