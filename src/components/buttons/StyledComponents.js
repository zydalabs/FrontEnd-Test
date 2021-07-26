import styled from 'styled-components';
import { mobileView } from '../../constants/stylingVariables';
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  @media (max-width: ${mobileView}) {
    font-size: 14px;
  }
`;
