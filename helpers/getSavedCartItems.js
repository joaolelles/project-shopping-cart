const getSavedCartItems = () => {
  const getSavedItems = localStorage.getItem('cartItems');
  return getSavedItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
