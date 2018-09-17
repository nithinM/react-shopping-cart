// Zip code validation
export const isValidZipCode = async (countryCode, zipCode) => {
  const endpoint = `https://api.zippopotam.us/${countryCode}/${zipCode}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    return false;
  }

  const data = await response.json();
  return data;
};
