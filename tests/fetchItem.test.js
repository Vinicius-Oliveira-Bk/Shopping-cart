require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Teste se fetchItem é uma função', () => {
    const actual = fetchItem;
    expect(actual).toBeInstanceOf(Function);
  });

  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
  const url = 'https://api.mercadolibre.com/items/MLB1615760527';
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledWith(url);
  });
});
