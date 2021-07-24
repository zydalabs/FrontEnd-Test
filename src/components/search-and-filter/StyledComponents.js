import styled from 'styled-components';
import { mobileView } from '../../constants/stylingVariables';

export const SearchAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;

  @media (max-width: ${mobileView}) {
    margin: 20px 0;
    flex-direction: column;
  }
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 50px;
  padding: 0 30px;
  box-shadow: 0px 0px 5px -2px ${props => props.theme.shadow};
  border-radius: 5px;
  background-color: ${props => props.theme.elementsBG};

  &:focus-within {
    box-shadow: 0px 0px 16px 0px ${props => props.theme.shadow};
  }

  @media (max-width: ${mobileView}) {
    padding: 0 4%;
    width: 92%;
    margin-bottom: 40px;
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

  &:focus-within {
    box-shadow: 0px 0px 16px 0px ${props => props.theme.shadow};
    background-color: red;
  }

  .ddm-control {
    color: ${props => props.theme.input};
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 14px 0;

    &:hover {
      box-shadow: none;
    }
  }

  .ddm-placeholder {
    font-size: 16px;
  }

  .ddm-menu {
    width: 220px;
    transform: translate(-20px, 5px);
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.input};
    background-color: ${props => props.theme.elementsBG};
    box-shadow: 0px 0px 5px -2px ${props => props.theme.shadow};
  }

  .ddm-arrow {
    top: 20px;
  }
`;
