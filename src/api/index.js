import latest from "../mockups/latest.json";
import symbols from "../mockups/symbols.json";
const getLatest = () => {
  return fetch(
    `https://v6.exchangerate-api.com/v6/${process.env.KEY}/latest/USD`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const getSymbols = () => {
  return symbols;
};
export { getLatest, getSymbols };
