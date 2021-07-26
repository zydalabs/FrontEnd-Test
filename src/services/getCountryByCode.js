import { COUNTRIES_BY_CODE } from './endPoints';

export const getCountryByCode = async countryCode => {
  const endPoint = COUNTRIES_BY_CODE(countryCode);
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};
