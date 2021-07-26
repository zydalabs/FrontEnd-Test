import { ALL_COUNTRIES } from './endPoints';

export const getAllCountries = async () => {
  const endPoint = ALL_COUNTRIES();
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};
