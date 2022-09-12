const fetchItem = async () => {
  try {
    const endPoint = 'https://api.mercadolibre.com/items/MLB1615760527';
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
