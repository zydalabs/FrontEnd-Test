import React from 'react';
import styled from 'styled-components';
import { getAllCountries } from '../services/getAllCountries';
import CountryCard from './CountryCard';

const MainContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const MainContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 80px;
`;

const MainContentContainer = () => {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <MainContainerWrapper id='mcc-wrapper'>
      <MainContainer id='mcc'>
        {countries?.map(country => (
          <CountryCard key={country?.numericCode} country={country} />
        ))}
      </MainContainer>
    </MainContainerWrapper>
  );
};

export default MainContentContainer;
