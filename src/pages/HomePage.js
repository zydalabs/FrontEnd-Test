import React from 'react';
import styled from 'styled-components';
import { mobileView } from '../constants/stylingVariables';
import { getAllCountries } from '../services/getAllCountries';
import { AllCountries } from '../components/all-countries';
import { SearchAndFilter } from '../components/search-and-filter';

const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${mobileView}) {
    width: 100%;
  }
`;

const HomePage = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <Container id='homepage-container'>
      <SearchAndFilter />
      <AllCountries countries={countries} />
    </Container>
  );
};

export default HomePage;
