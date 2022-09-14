const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, a saveCartItems com argumento cartItem é chamada', () => {
    saveCartItems('cartItem')
    expect (localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste se, a saveCartItems é chamada com os dois parâmetros corretos.', () => {
    saveCartItems('cartItem')
    expect (localStorage.setItem).toHaveBeenCalled(cartItem, 'MLB1983286920');
  });
  it('Teste se, a saveCartItems é chamada.', () => {
    saveCartItems('cartItem')
    expect (localStorage.setItem).toHaveBeenCalled();
  });
});
