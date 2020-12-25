import './styles.css';
import menuItems from './templates/menu-items.hbs';
import menu from './menu.json';

const ItemsRef = document.querySelector('.js-menu');
const markup = menuItems(menu);
ItemsRef.insertAdjacentHTML('beforeend', markup);
