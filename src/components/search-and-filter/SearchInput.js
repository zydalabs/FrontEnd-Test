import React from 'react';
import styled from 'styled-components';
import { mobileView } from '../../constants/stylingVariables';

const Container = styled.div`
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

const StyledInput = styled.input`
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

const SearchInput = () => {
  return (
    <Container>
      <StyledInput placeholder='Search for a country...' />
    </Container>
  );
};

export default SearchInput;
