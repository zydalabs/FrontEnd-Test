import React from 'react';
import { SearchInput, FilterDropDownMenu } from './';
import { SearchAndFilterContainer } from './StyledComponents';

const SearchAndFilter = () => {
  return (
    <SearchAndFilterContainer>
      <SearchInput />
      <FilterDropDownMenu />
    </SearchAndFilterContainer>
  );
};

export default SearchAndFilter;
