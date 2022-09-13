const fetchItem = async (argumento) => {
  try {
    const endPoint = `https://api.mercadolibre.com/items/${argumento}`;
    const response = await fetch(endPoint);
    const item = await response.json();
    return item;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
