import styled from 'styled-components';
import { transitionDelay } from '../constants/stylingVariables';

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
    transition: background-color ${transitionDelay}, color ${transitionDelay};
  }

  .element {
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.fontColor};
    transition: background-color ${transitionDelay}, color ${transitionDelay};
  }

  .input {
    color: ${props => props.theme.input};
    transition: color ${transitionDelay};
  }
`;

export { GlobalAppWrapper };
