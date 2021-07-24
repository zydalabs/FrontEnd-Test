import React from 'react';
import { getCountryByCode } from '../services';
import { SingleCountry } from '../components/single-country';
import { useParams } from 'react-router-dom';

const CountryDetailsPage = () => {
  const { code } = useParams();

  const [country, setCountry] = React.useState({});

  React.useEffect(() => {
    const countryDetails = async countryCode => {
      const data = await getCountryByCode(countryCode);
      setCountry(data);
    };
    countryDetails(code);
  }, [code]);

  return <SingleCountry country={country} />;
};

export default CountryDetailsPage;
