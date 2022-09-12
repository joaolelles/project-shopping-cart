const fetchProducts = async (argumento) => {
  try {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${argumento}`;
    const response = await fetch(endPoint);
    const computador = await response.json();
    return computador;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
