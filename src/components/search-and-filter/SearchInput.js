import React from 'react';
import { SearchInputContainer, StyledInput } from './StyledComponents';

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <StyledInput placeholder='Search for a country...' />
    </SearchInputContainer>
  );
};

export default SearchInput;
