import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 45%;
  padding: 0 30px;
  box-shadow: 0px 0px 5px -2px ${props => props.theme.shadow};
  background-color: ${props => props.theme.elementsBG};

  &:focus-within {
    box-shadow: 0px 0px 16px 0px ${props => props.theme.shadow};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  line-height: 3.5;
  font-weight: 600;
  align-items: center;
  background-color: ${props => props.theme.elementsBG};

  color: ${props => props.theme.input};

  &:focus {
    border: none;
    outline: none;
  }
`;

const SearchInput = () => {
  return (
    <Container>
      <StyledInput placeholder='Search for a country...' />
    </Container>
  );
};

export default SearchInput;
