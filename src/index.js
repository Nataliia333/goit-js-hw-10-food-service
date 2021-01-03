import './styles.css';
import menuItems from './templates/menu-items.hbs';
import menu from './menu.json';

// console.log(menuItems);
// console.log(menu);

const ItemsRef = document.querySelector('.js-menu');
const markup = menuItems(menu);

ItemsRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

toggleRef.addEventListener('change', onToggle)
loadTheme();

function loadTheme() {  
    if (localStorage.theme) {
        const currentTheme = localStorage.getItem("theme");
        bodyRef.classList.add(currentTheme);
    }

    if (bodyRef.classList.contains(Theme.DARK)) { 
        bodyRef.classList.remove(Theme.LIGHT);
        toggleRef.checked = true;  
    }
}
   
function onToggle() {
    bodyRef.classList.toggle(Theme.DARK);
    bodyRef.classList.toggle(Theme.LIGHT);
    onlocalStorage();
}
  
function onlocalStorage() {
    bodyRef.classList.contains(Theme.DARK)
      ? localStorage.setItem('theme', Theme.DARK)
      : localStorage.setItem('theme', Theme.LIGHT);
}

