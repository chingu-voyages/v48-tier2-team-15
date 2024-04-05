export const splitCountriesStringToArray = (countriesArray) => {
  return countriesArray.flatMap((countriesString) => {
    // Split the string at each comma and trim any leading or trailing whitespace
    const individualCountries = countriesString
      .split(",")
      .map((country) => country.trim());
    return individualCountries;
  });
};
