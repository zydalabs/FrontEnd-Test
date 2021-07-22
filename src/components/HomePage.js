import React from 'react';
import { getAllCountries } from '../services/getAllCountries';
import AllCountries from './AllCountries';

const HomePage = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return <AllCountries countries={countries} />;
};

export default HomePage;
