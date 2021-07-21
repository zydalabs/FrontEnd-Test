import styled, { createGlobalStyle } from 'styled-components';

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
    background-color:${props => props.theme.background}
}`;

const GlobalAppWrapper = styled.div`
  * {
    font-family: 'Nunito Sans', sans-serif;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 800;
    padding: 20px;
    box-shadow: 0 -6px 10px #171918;
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.fontColor};
  }

  .element {
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.fontColor};
  }

  .input {
    color: ${props => props.theme.input};
  }
`;

export { lightTheme, darkTheme, GlobalStyles, GlobalAppWrapper };
