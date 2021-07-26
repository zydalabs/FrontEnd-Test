import styled from 'styled-components';
import { mobileView, tabletView } from '../../constants/stylingVariables';

export const SearchAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;

  @media (max-width: ${tabletView}) {
    margin: 20px 0;
    flex-direction: column;
  }

  @media (max-width: ${mobileView}) {
    margin: 20px 0;
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 50px;
  padding: 0 30px;
  margin-right: 10px;
  box-shadow: 0px 0px 5px -2px ${props => props.theme.shadow};
  border-radius: 5px;
  background-color: ${props => props.theme.elementsBG};
  display: flex;
  flex-direction: row;
  align-items: center;

  &:focus-within {
    box-shadow: 0px 0px 16px 0px ${props => props.theme.shadow};
  }

  @media (max-width: ${tabletView}) {
    padding: 0 4%;
    width: 92%;
    margin-bottom: 40px;
  }

  @media (max-width: ${mobileView}) {
    padding: 0 4%;
    width: 92%;
    margin-bottom: 40px;
  }

  #search-icon {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  line-height: 3.5;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  background-color: transparent;

  color: ${props => props.theme.input};

  ::placeholder {
    color: ${props => props.theme.input};
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const DropDownContainer = styled.div`
  width: 180px;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: ${props => props.theme.elementsBG};
  box-shadow: 0px 0px 5px -2px ${props => props.theme.shadow};
  cursor: pointer;

  .ddm-control {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 14px 0;

    &:hover {
      // box-shadow: none;
      // background-color: red;
    }
  }

  .ddm-placeholder {
    font-size: 16px;
    color: ${props => props.theme.input};
    font-weight: 600;
  }

  .ddm-menu {
    width: 220px;
    max-height: 50vh;
    padding: 10px;
    transform: translate(-20px, 5px);
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.input};
    background-color: ${props => props.theme.elementsBG};
    box-shadow: 0px 0px 5px 2px ${props => props.theme.shadow};
  }

  .ddm-arrow {
    top: 20px;
  }

  @media (max-width: ${mobileView}) {
    width: 70%;
  }
`;
