import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
  GlobalAppWrapper
} from './themes';

function App() {
  const [theme, updateTheme] = useState(darkTheme);
  const themeToggle = () => {
    theme === lightTheme && updateTheme(darkTheme);
    theme === darkTheme && updateTheme(lightTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalAppWrapper>
        <div className='div'>Hi</div>
      </GlobalAppWrapper>
    </ThemeProvider>
  );
}

export default App;
