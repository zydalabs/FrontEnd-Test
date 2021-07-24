import styled from 'styled-components';
import { mobileView, tabletView } from '../../constants/stylingVariables';

export const MainContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: ${tabletView}) {
    width: 90%;
  }
  @media (max-width: ${mobileView}) {
    width: 100%;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 800;
  padding: 20px;
  box-shadow: 0 0px 18px -3px ${props => props.theme.shadow};
  background-color: ${props => props.theme.elementsBG};

  @media (max-width: ${tabletView}) {
    font-size: 18px;
  }

  @media (max-width: ${mobileView}) {
    font-size: 16px;
  }
`;
