import React from 'react';
import { getCountryDetails } from '../services/getCountryDetails';
import SingleCountry from './SingleCountry';

const CountryDetailsPage = () => {
  const hamada = 'belgium';
  const [country, setCountry] = React.useState({});
  React.useEffect(() => {
    const countryDetails = async countryName => {
      const data = await getCountryDetails(countryName);
      setCountry(data[0]);
    };
    countryDetails(hamada);
  }, [hamada]);

  return <SingleCountry country={country} />;
};

export default React.memo(CountryDetailsPage);
