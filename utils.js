const fetch = require('node-fetch');


const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
}

const getFiveCountry = (array) => {
  const finalArray = [array[0], array[1], array[2], array[5], array[6]];
  return finalArray;
}


const fetchDataFromAPI = async (continentName) => {

  const url = 'https://restcountries.eu/rest/v2/region/'
  const response = await fetch(`${url}${continentName}`);
  const data = await response.json();
  return data.map(element => {
    return {
      name: element.name,
      capital: element.capital,
    }
  });
}

module.exports = { 
  fetchDataFromAPI, 
  shuffleArray,
  getFiveCountry
};
