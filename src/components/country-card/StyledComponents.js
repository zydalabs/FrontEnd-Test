import styled from 'styled-components';

export const Card = styled.div`
  max-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.elementsBG};
  justify-self: stretch;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 19px -15px ${props => props.theme.shadow};

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 19px -8px ${props => props.theme.shadow};
  }
`;

export const CountryFlag = styled.img`
  max-height: 180px;
  object-fit: cover;
`;

export const CountryDetails = styled.div`
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
    font-size: 14px;
    font-weight: 500;
  }

  .title {
    font-weight: 800;
  }
`;
