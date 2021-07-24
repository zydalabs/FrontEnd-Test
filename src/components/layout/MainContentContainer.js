import React from 'react';
import HomePage from '../../pages/HomePage';
import CountryDetailsPage from '../../pages/CountryDetailsPage';
import { Switch, Route } from 'react-router-dom';
import { MainContainerWrapper } from './StyledComponents';

const MainContentContainer = () => {
  return (
    <MainContainerWrapper id='mcc-wrapper'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:code' component={CountryDetailsPage} />
      </Switch>
    </MainContainerWrapper>
  );
};

export default MainContentContainer;
