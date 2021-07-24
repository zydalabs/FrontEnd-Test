import React from 'react';
import { CountryCard } from '../country-card';
import { MainContainer } from './StyledComponents';

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
