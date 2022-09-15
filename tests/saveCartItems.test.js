const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, a saveCartItems com argumento cartItem é chamada', () => {
    saveCartItems('cartItem')
    expect (localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste se, a saveCartItems é chamada com os dois parâmetros corretos.', () => {
    saveCartItems('MLB2187832413');
    expect (localStorage.setItem).toHaveBeenCalledWith('cartItems', 'MLB2187832413');
  });
  it('Teste se, a saveCartItems é chamada.', () => {
    saveCartItems('cartItem')
    expect (localStorage.setItem).toHaveBeenCalled();
  });
});
