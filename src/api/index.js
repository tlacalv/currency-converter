import latest from '../mockups/latest.json';
import symbols from '../mockups/symbols.json';
const URL = `http://data.fixer.io/api/`;
const API_KEY = `8f8e0ecbf6ad14f466927d27ae1b7488`;
const getLatest = () => {
  return fetch(`${URL}latest?access_key=${API_KEY}`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    return data;
  })
}

const getSymbols = () => {
  return symbols;
}
export {
  getLatest,
  getSymbols
}