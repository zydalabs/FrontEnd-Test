import React from 'react';
import styled from 'styled-components';
import CountryCard from './CountryCard';

const MainContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 80px;
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
