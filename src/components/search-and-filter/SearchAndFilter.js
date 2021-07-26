import React from 'react';
import { SearchInput, FilterDropDownMenu } from './';
import { SearchAndFilterContainer } from './StyledComponents';

const SearchAndFilter = ({ updateSearchInput, updateSelectInput }) => {
  return (
    <SearchAndFilterContainer>
      <SearchInput updateSearchInput={updateSearchInput} />
      <FilterDropDownMenu updateSelectInput={updateSelectInput} />
    </SearchAndFilterContainer>
  );
};

export default SearchAndFilter;
