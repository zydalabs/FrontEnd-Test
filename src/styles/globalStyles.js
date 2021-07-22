import styled from 'styled-components';
import { transitionDelay } from '../constants/stylingVariables';

const GlobalAppWrapper = styled.div`
  * {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.fontColor};
    transition: background-color ${transitionDelay}, color ${transitionDelay};
  }
`;

export { GlobalAppWrapper };
