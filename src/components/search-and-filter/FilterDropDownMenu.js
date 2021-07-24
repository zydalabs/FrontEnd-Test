import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { DropDownContainer } from './StyledComponents';

const FilterDropDownMenu = () => {
  return (
    <DropDownContainer>
      <Dropdown
        controlClassName='ddm-control'
        placeholderClassName='ddm-placeholder'
        menuClassName='ddm-menu'
        arrowClassName='ddm-arrow'
        options={options}
        onChange={e => console.log(e)}
        placeholder='Filter by Region'
      />
    </DropDownContainer>
  );
};

const options = ['one', 'two', 'three'];

export default FilterDropDownMenu;
