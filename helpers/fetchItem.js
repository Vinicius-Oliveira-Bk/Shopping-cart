const BASE_URL_ITEM = 'https://api.mercadolibre.com/items/';

const fetchItem = async (item) => {
  // seu código aqui
  let searchedItem;
  try {
    const request = await fetch(`${BASE_URL_ITEM}${item}`);
    const response = await request.json();
    searchedItem = await response;
    return searchedItem;
  } catch (erro) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
