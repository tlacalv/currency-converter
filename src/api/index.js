import latest from '../mockups/latest.json';
import symbols from '../mockups/symbols.json';
const getLatest = () => {
  return fetch(`https://api.exchangeratesapi.io/latest`, {
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