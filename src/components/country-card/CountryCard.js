import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CountryFlag, CountryDetails } from './StyledComponents.js';

const CountryCard = ({ country }) => {
  const history = useHistory();
  return (
    <Card
      onClick={() => {
        history.push(`/${country?.alpha3Code}`);
      }}
    >
      <CountryFlag src={country?.flag} />
      <CountryDetails id='country-details'>
        <p className='country-name'>{country?.name}</p>

        <p className='population'>
          <span className='title'>Population: </span>
          {country?.population?.toLocaleString()}
        </p>

        <p className='region'>
          <span className='title'>Region: </span>
          {country?.region}
        </p>

        <p className='capital'>
          <span className='title'>Capital: </span>
          {country?.capital}
        </p>
      </CountryDetails>
    </Card>
  );
};

export default CountryCard;
