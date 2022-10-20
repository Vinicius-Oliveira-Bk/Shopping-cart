const getSavedCartItems = () => {
  // seu código aqui
  const localRecovery = localStorage.getItem('cartItems');
  return JSON.parse(localRecovery);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
