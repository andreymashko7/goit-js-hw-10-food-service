import './styles.css';
import menuTemplate from '../src/menu.json';
import productCards from './templates/product-cards.hbs';


// создание разметки для ро шаблону

const cardsContainer = document.querySelector('.js-menu');

const cardsMarcup = productCards(menuTemplate);
cardsContainer.insertAdjacentHTML('beforeend', cardsMarcup);


// смена темы для чекбокса и запись в хранилище

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};




const chexboxEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const STORAGE_KEY = 'theme'
const savedTheme = localStorage.getItem(STORAGE_KEY);

bodyEl.classList.add(theme.LIGHT)


chexboxEl.addEventListener('change', onThemeChangeClick)

if (savedTheme === 'false') {
  bodyEl.classList.remove(theme.LIGHT);
  bodyEl.classList.add(theme.DARK);
  chexboxEl.checked = true;
}

function onThemeChangeClick() {
  bodyEl.classList.toggle(theme.LIGHT);
  bodyEl.classList.toggle(theme.DARK);

  const isLightTheme = bodyEl.classList.contains(theme.LIGHT);
  localStorage.setItem(STORAGE_KEY, isLightTheme);
}