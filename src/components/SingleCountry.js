import React from 'react';
import styled from 'styled-components';
import { getValuesByFields } from '../utilities/getValuesByField';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
  width: 80%;
`;

const BackButton = styled.button`
  width: 150px;
  padding: 10px;
`;
const CountryContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;

  .flag {
    flex: 1;
    img {
      width: 600px;
      object-fit: cover;
    }
  }

  .details {
    margin: auto 0;
    padding: 0 20px;
    flex: 1;

    #name {
      font-size: 32px;
      font-weight: 600;
    }

    #columns-container {
      display: flex;
      flex-direction: row;
    }

    #left-column,
    #right-column {
      flex: 1;
    }

    .details-field {
      font-size: 16px;
    }

    .title {
      font-weight: 800;
    }
  }
`;

const LeftColumn = ({ nativeName, population, region, subregion, capital }) => {
  return (
    <>
      <p id='nativeName' className='details-field'>
        <span className='title'>Native Name: </span>
        {nativeName}
      </p>
      <p id='population' className='details-field'>
        <span className='title'>Population: </span>
        {population}
      </p>
      <p id='region' className='details-field'>
        <span className='title'>Region: </span>
        {region}
      </p>
      <p id='subregion' className='details-field'>
        <span className='title'>Sub Region: </span>
        {subregion}
      </p>
      <p id='capital' className='details-field'>
        <span className='title'>Capital: </span>
        {capital}
      </p>
    </>
  );
};

const RightColumn = ({ topLevelDomain, currencies, languages }) => {
  return (
    <>
      <p id='top-level-domain' className='details-field'>
        <span className='title'>Top Level Domain: </span>
        {topLevelDomain}
      </p>
      <p id='currencies' className='details-field'>
        <span className='title'>Currencies: </span>
        {getValuesByFields(currencies, 'name')}
      </p>
      <p id='languages' className='details-field'>
        <span className='title'>Languages: </span>
        {getValuesByFields(languages, 'name')}
      </p>
    </>
  );
};

const SingleCountry = ({ country }) => {
  return (
    <Container>
      <BackButton id='back-button'>Back</BackButton>
      <CountryContentContainer id='country-content-container'>
        <div id='flag' className='flag'>
          <img src={country?.flag} alt='country-flag' />
        </div>
        <div id='details' className='details'>
          <h1 id='name'>{country?.name}</h1>
          <div id='columns-container'>
            <div id='left-column'>
              <LeftColumn
                nativeName={country?.nativeName}
                population={country?.population}
                region={country?.region}
                subregion={country?.subregion}
                capital={country?.capital}
              />
            </div>
            <div id='right-column'>
              <RightColumn
                topLevelDomain={country?.topLevelDomain}
                currencies={country?.currencies}
                languages={country?.languages}
              />
            </div>
          </div>
        </div>
      </CountryContentContainer>
    </Container>
  );
};

export default SingleCountry;
