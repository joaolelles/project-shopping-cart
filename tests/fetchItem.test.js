require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se é uma função', () => {
    expect (typeof fetchItem).toBe('function')
  })
  it('Testa se a função chamada utiliza a endpoint correta', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se o retorno da função tem a estrutura de dados correta', async () => expect (await fetchItem('MLB1615760527'))
    .toEqual(item));
  it('Testa se ao chamar a função sem argumento, retorna um erro', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    } 
  });
});
