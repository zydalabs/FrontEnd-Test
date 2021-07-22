import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.elementsBG};
  justify-self: stretch;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    margin-top: -5px;
    margin-left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
  }
`;

const CountryFlag = styled.img`
  max-height: 180px;
  object-fit: cover;
`;

const CountryDetails = styled.div`
  width: 220px;
  padding 20px;
  margin: auto auto;

  .country-name {
    font-size: 20px;
    font-weight: 800;
  }

  .population,
  .region,
  .capital {
    margin: 0;
    line-height: 2;
    font-size: 16px;
    font-weight: 500;
  }

  .title {
    font-weight: 800;
  }
`;
const CountryCard = ({ country }) => {
  const history = useHistory();
  return (
    <Card
      onClick={() => {
        history.push(`/${country?.name}`);
      }}
    >
      <CountryFlag src={country?.flag} />
      <CountryDetails id='country-details'>
        <p className='country-name'>{country?.name}</p>

        <p className='population'>
          <span className='title'>Population: </span>
          {country?.population}
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
