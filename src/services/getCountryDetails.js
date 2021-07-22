export const getCountryDetails = async countryName => {
  const response =
    await fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true
`);
  const data = await response.json();
  return data;
};
