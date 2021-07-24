import React from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Container = styled.div`
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

const FilterDropDownMenu = () => {
  return (
    <Container>
      <Dropdown
        controlClassName='ddm-control'
        placeholderClassName='ddm-placeholder'
        menuClassName='ddm-menu'
        arrowClassName='ddm-arrow'
        options={options}
        onChange={e => console.log(e)}
        placeholder='Filter by Region'
      />
    </Container>
  );
};

const options = ['one', 'two', 'three'];

export default FilterDropDownMenu;
