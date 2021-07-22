import React from 'react';
import styled from 'styled-components';
import { getAllCountries } from '../services/getAllCountries';
import AllCountries from './AllCountries';
import SearchAndFilter from './SearchAndFilter';

const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
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
