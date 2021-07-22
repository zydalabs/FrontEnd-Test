import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 20%;
  padding: 20px;
  cursor: pointer;
  border: none;
  background-color: ${props => props.theme.elementsBG};
  box-shadow: 0 0 5px -2px ${props => props.theme.shadow};
`;
const FilterDropDownMenu = () => {
  return (
    <StyledSelect placeholder='here'>
      lama nshoof
      <option>hi</option>
      <option>hi</option>
      <option>hi</option>
      <option>hi</option>
    </StyledSelect>
  );
};

export default FilterDropDownMenu;
