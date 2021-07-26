import React from 'react';
import { CountryCard } from '../country-card';
import { MainContainer } from './StyledComponents';

const AllCountries = ({ countries }) => {
  return (
    <MainContainer id='main-container'>
      {countries?.map(country => (
        <CountryCard
          id={`country-card-${country.alpha3Code}`}
          key={country?.alpha3Code}
          country={country}
        />
      ))}
    </MainContainer>
  );
};

export default React.memo(AllCountries);
