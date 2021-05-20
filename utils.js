const fetch = require('node-fetch');


const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
}

const getFiveCountry = (array) => {
  const finalArray = [array[0], array[1], array[2], array[5], array[6]];
  return finalArray;
}

const createQuestions = (mainArray, countries) => {

  const questions = countries.map(element => {
    const shuffle = shuffleArray(mainArray);
    const arrayOfOptions = getFourCapitals(shuffle);
    return {
      question: `What is the capital of ${element.name}?`,
      options: shuffleArray([...arrayOfOptions, element.capital]),
      currectAnswer: element.capital,
    }
  })
  return questions;
}

const getFourCapitals = (array) => {
  console.log(array);
  const randomCapitals = array.map(element => element.capital);
  //const shuffled = shuffleArray(randomCapitals);
  const finalArray = randomCapitals.slice(0, 3);
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
  getFiveCountry,
  createQuestions,
  getFourCapitals
};
