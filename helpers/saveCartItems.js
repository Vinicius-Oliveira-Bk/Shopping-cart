// const local = [];

const saveCartItems = (id, title, price) => {
  // seu código aqui
  /* const key = 'cartItems';
  const myObj = { id,
    title, 
    price,
  };

  if (localStorage.length !== 0) {
    const recoveryLocal = JSON.parse(localStorage.getItem(key));
    localStorage.removeItem(key);
    for (let index = 0; index < recoveryLocal.length; index += 1) {
      local.push(recoveryLocal[index]);
    }
    local.push(myObj);
    localStorage.setItem(key, JSON.stringify(local));
  } else {
    local.push(myObj);
    localStorage.setItem(key, JSON.stringify(local));
  } */
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}