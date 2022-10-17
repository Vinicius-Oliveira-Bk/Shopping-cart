const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', saveCartItems);
  });
});
