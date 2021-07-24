import React from 'react';
import styled from 'styled-components';
import { CountryCard } from '../country-card';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 80px;
  justify-content: center;
`;

const AllCountries = ({ countries }) => {
  return (
    <MainContainer id='mcc'>
      {countries?.map(country => (
        <CountryCard key={country?.numericCode} country={country} />
      ))}
    </MainContainer>
  );
};

export default React.memo(AllCountries);
