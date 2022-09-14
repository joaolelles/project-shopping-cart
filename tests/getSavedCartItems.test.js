const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, a saveCartItems é chamada.', () => {
    getSavedCartItems();
    expect (localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste se, a saveCartItems é chamada com o parâmetro correto.', () => {
    getSavedCartItems('cartItem')
    expect (localStorage.setItem).toHaveBeenCalled(cartItem);
  });
});
