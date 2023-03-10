// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const load = () => {
  const body = document.querySelector('.items');
  const carregando = document.createElement('p');
  carregando.className = 'loading';
  carregando.innerText = 'Carregando...';
  body.appendChild(carregando);
};

const removeLoad = () => {
  const carregando = document.querySelector('.loading');
  carregando.remove();
};

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const sum = createCustomElement('span', 'total-price', '');
const buttonEmpty = document.querySelector('.cart');
buttonEmpty.appendChild(sum);

const subtotal = (price) => {
  let valors = 0;
  const tag = document.querySelector('.total-price');
  const arrayOfItems = document.querySelectorAll('.cart__item');
  console.log('items', arrayOfItems);
  valors += price;
  tag.textContent = `Subtotal: R$${valors}`;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getItemFetchProducts = async () => {
  const arrayOfObjects = await fetchProducts('computador');
  const classItem = document.querySelector('.items');
  removeLoad();
  const { results } = arrayOfObjects;
  results.forEach((item) => {
    classItem.appendChild(createProductItemElement(item));
  });
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = () => {
  const itemRemove = document.querySelector('.cart__item');
  itemRemove.parentNode.removeChild(itemRemove);
  localStorage.removeItem('cartItems');
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', getIdFromProductItem);
  subtotal(price);
  saveCartItems(id, title, price);
  return li;
};

const createCartItemElement2 = (item) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${item.id} | TITLE: ${item.title} | PRICE: $${item.price}`;
  li.addEventListener('click', getIdFromProductItem);
  return li;
};

const getFetchItem = async (itemId) => {
  const fetchItemResult = await fetchItem(itemId); 
  const addItem = createCartItemElement(fetchItemResult);
  const generateList = document.querySelector('.cart__items');
  generateList.appendChild(addItem);
};

const addItemButton = () => {
  const button = document.querySelectorAll('.item__add');
  button.forEach((element, index) => {
    element.addEventListener('click', async () => {
      const id = document.getElementsByClassName('item_id');
      await getFetchItem(id[index].innerText);
    });
  });
};
 
const emptyButton = () => {
  const getOl = document.querySelector('.cart__items');
  while (getOl.firstChild) {
    getOl.removeChild(getOl.firstElementChild);
  }
}; 

const button = document.querySelector('.empty-cart');
button.addEventListener('click', emptyButton);

window.onload = async () => {
  load();
  await getItemFetchProducts();
  addItemButton();
  /* if (localStorage.length !== 0) {
    await getSavedCartItems();
  } */
 };
