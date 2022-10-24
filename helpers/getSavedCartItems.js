const getSavedCartItems = () => {
  // seu código aqui
 /*  const localRecovery = JSON.parse(localStorage.getItem('cartItems'));
  const generateList = document.querySelector('.cart__items');
  for (let index = 0; index < localRecovery.length; index += 1) {
    const liCreator = createCartItemElement2(localRecovery[index]);
    generateList.appendChild(liCreator);
  }  */
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
