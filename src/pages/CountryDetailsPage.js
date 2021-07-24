import React from 'react';
import { getCountryDetails } from '../services/getCountryDetails';
import { SingleCountry } from '../components/single-country';
import { useParams } from 'react-router-dom';

const CountryDetailsPage = () => {
  const { name } = useParams();

  const [country, setCountry] = React.useState({});
  React.useEffect(() => {
    const countryDetails = async countryName => {
      const data = await getCountryDetails(countryName);
      setCountry(data[0]);
    };
    countryDetails(name);
  }, [name]);

  return <SingleCountry country={country} />;
};

export default CountryDetailsPage;
