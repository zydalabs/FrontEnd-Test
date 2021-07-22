export const getAllCountries = async () => {
  return await fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => data);
};
