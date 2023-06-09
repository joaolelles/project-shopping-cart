// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

const getCart = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const cartItemClickListener = (event) => {
  getCart.removeChild(event.target);
  saveCartItems(getCart.innerHTML);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductList = async () => {
  const callFun = await fetchProducts('computador');
  const objProducts = callFun.results;
  const getHtml = document.querySelector('.items');
  objProducts.forEach((product) => {
    const callItem = createProductItemElement(product);
    getHtml.appendChild(callItem);
  });
};

const createCarList = async () => {
  await createProductList();
  const getButtons = document.querySelectorAll('.item__add');
  getButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const getId = event.target.parentNode.firstChild.innerText;
      const getFetch = await fetchItem(getId);
      const getItem = createCartItemElement(getFetch);
      getCart.appendChild(getItem);
      saveCartItems(getCart.innerHTML);
    });
  });
};

const getFavoritesFun = () => {
  const getFavorites = getSavedCartItems();
  getCart.innerHTML = getFavorites;
  const allCartItems = document.querySelectorAll('.cart__item');
  allCartItems.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

const removeBtn = () => {
  const btn = document.querySelector('.empty-cart');
  btn.addEventListener('click', () => {
    getCart.innerHTML = '';
    saveCartItems('');
  });
};

window.onload = () => { 
  createCarList();
  getFavoritesFun();
  removeBtn();
};
