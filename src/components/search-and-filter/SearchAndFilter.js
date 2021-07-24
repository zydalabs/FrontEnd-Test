import React from 'react';
import styled from 'styled-components';
import { mobileView } from '../../constants/stylingVariables';
import { SearchInput, FilterDropDownMenu } from './';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;

  @media (max-width: ${mobileView}) {
    margin: 20px 0;
    flex-direction: column;
  }
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
