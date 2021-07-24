export const getCountryByCode = async countryCode => {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${countryCode}`
  );
  const data = await response.json();
  return data;
};
