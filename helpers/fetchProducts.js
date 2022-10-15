// const fetch = require('node-fetch');

const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (produto) => {
  // seu código aqui
  if (produto === undefined) {
    throw new Error('You must provide an url');
  }
  let results = [];
  try {
  const request = await fetch(`${BASE_URL}${produto}`);
  const response = await request.json();
  results = await response;
  return results.results;
  } catch (erro) {
    console.error(erro);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// fetchProducts('computador')
//  .then((result) => console.log(result));