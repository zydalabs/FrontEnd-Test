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
  const [filteredCountries, updateFilteredCountries] =
    React.useState(countries);
  const [searchInput, updateSearchInput] = React.useState('');
  const [selectInput, updateSelectInput] = React.useState('');

  React.useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  React.useEffect(() => {
    const filterBySearchInput = countries => {
      const searchKeyword = searchInput.toLowerCase();
      const regionSelected = selectInput.toLowerCase();

      const filterBySearch = arr => {
        return arr.filter(
          item => item.name.toLowerCase().indexOf(searchKeyword) > -1
        );
      };

      const filterBySelect = arr => {
        return arr.filter(item => item.region.toLowerCase() === regionSelected);
      };

      if (!!searchKeyword && !!regionSelected) {
        updateFilteredCountries(filterBySearch(filterBySelect(countries)));
      } else if (!!searchKeyword && !!!regionSelected) {
        updateFilteredCountries(filterBySearch(countries));
      } else if (!!!searchKeyword && !!regionSelected) {
        updateFilteredCountries(filterBySelect(countries));
      } else {
        updateFilteredCountries(countries);
      }
    };

    filterBySearchInput(countries);
  }, [countries, searchInput, selectInput]);

  return (
    <Container id='homepage-container'>
      <SearchAndFilter
        updateSearchInput={updateSearchInput}
        updateSelectInput={updateSelectInput}
      />
      <AllCountries countries={filteredCountries} />
    </Container>
  );
};

export default React.memo(HomePage);
