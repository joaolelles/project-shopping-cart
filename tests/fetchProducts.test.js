require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se é uma função', () => expect (typeof fetchProducts).toBe('function'));
  it('Testa se a função utiliza a endpoint correta', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se o retorno da função é uma estrutura de dados correta', async () => expect (await fetchProducts('computador'))
    .toEqual(computadorSearch));
  it('Testa se o retorno da função é uma estrutura de dados correta', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    } 
  });
});
