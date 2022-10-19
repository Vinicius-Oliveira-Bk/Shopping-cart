const getSavedCartItems = () => {
  // seu código aqui
  const localRecovery = JSON.parse(localStorage.getItem('cartItems'));
  return localRecovery;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
