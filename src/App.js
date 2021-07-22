import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/themes';
import { GlobalAppWrapper } from './styles/globalStyles';
import Header from './components/header/Header';

const THEMES = {
  light: lightTheme,
  dark: darkTheme
};

function App() {
  const [theme, updateTheme] = useState('light');
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <GlobalAppWrapper>
        <Header theme={theme} updateTheme={updateTheme} />
      </GlobalAppWrapper>
    </ThemeProvider>
  );
}

export default App;
