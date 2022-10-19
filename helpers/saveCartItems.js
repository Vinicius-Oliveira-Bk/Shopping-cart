const local = [];

const saveCartItems = (item) => {
  // seu código aqui 
  const key = 'cartItems';
  local.push(item);
  localStorage.setItem(key, JSON.stringify(local));
  // console.log(local);
  // console.log(localStorage);
};

// saveCartItems('pc');

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
