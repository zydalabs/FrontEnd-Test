import React from 'react';
import styled from 'styled-components';
import HomePage from './HomePage';
import CountryDetailsPage from './CountryDetailsPage';
import { Switch, Route } from 'react-router-dom';

const MainContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const MainContentContainer = () => {
  return (
    <MainContainerWrapper id='mcc-wrapper'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/:name' render={() => <div>hi</div>} /> */}
        <Route path='/:name' component={CountryDetailsPage} />
      </Switch>
    </MainContainerWrapper>
  );
};

export default MainContentContainer;
