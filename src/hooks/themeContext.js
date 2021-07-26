import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const useTheme = () => {
  const theme = useContext(ThemeContext);
  const isLightTheme = theme.name === 'light';
  return { isLightTheme };
};

export default useTheme;
