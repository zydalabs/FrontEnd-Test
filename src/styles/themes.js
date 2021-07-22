import { createGlobalStyle } from 'styled-components';
import { transitionDelay } from '../constants/stylingVariables';

const lightTheme = {
  background: '#fafafa',
  elements: '#ffffff',
  input: '#858585',
  fontColor: '#000'
};

const darkTheme = {
  background: '#202c37',
  elements: '#2b3945',
  input: '##fafafa',
  fontColor: '#ffffff'
};

const GlobalStyles = createGlobalStyle`
body {
    background-color:${props => props.theme.background};
    transition: background-color ${transitionDelay};
}`;

export { lightTheme, darkTheme, GlobalStyles };
