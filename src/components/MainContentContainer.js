import React from 'react';
import styled from 'styled-components';

const MainContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const MainContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
`;

const TestComp = () => (
  <div
    style={{
      margin: '10px',
      //   width: '300px',
      //   height: '200px',
      backgroundColor: 'red',
      justifySelf: 'stretch'
    }}
  >
    h
  </div>
);

const MainContentContainer = () => {
  return (
    <MainContainerWrapper id='mcc-wrapper'>
      <MainContainer id='mcc'>
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
      </MainContainer>
    </MainContainerWrapper>
  );
};

export default MainContentContainer;
