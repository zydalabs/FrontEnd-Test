import React from 'react';
import styled from 'styled-components';
import FilterDropDownMenu from './FilterDropDownMenu';
import SearchInput from './SearchInput';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;
`;

const SearchAndFilter = () => {
  return (
    <Container>
      <SearchInput />
      <FilterDropDownMenu />
    </Container>
  );
};

export default SearchAndFilter;
