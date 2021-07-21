import styled, { createGlobalStyle } from 'styled-components';

const lightTheme = {
  body: '#fff',
  fontColor: '#000'
};

const darkTheme = {
  body: '#000',
  fontColor: '#fff'
};

const GlobalStyles = createGlobalStyle`
body {
    background-color:${props => props.theme.body}
}`;

const GlobalAppWrapper = styled.div`
  * {
    font-family: 'Nunito Sans', sans-serif;
  }
  .div {
    color: ${props => props.theme.fontColor};
  }
`;

export { lightTheme, darkTheme, GlobalStyles, GlobalAppWrapper };
