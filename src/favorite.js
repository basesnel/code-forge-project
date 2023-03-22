import './js/theme-switcher/switcher-theme';
import './js/news-data/news-by-search';
import mobileMenu from './js/mobile-menu/mobile-menu';
import headerResponsive from './js/responsivity/headerResponsive';
import render from './js/favorite/render-favorite';
import removeFromFavorite from './js/favorite/removeFromFavorite';
import './js/local-storage/localStorageClass';

mobileMenu();
headerResponsive();
render();
removeFromFavorite();

/*const FAV_KEY = 'favorite';
const favList = document.querySelector('.favorite-list');
console.log(load(FAV_KEY));

const idArr = load(FAV_KEY).map(obj => obj.id);
const liIdArr = Array.from(favList.children).map(child => child.firstElementChild.getAttribute('id'));

const fullIDArr = [...idArr, ...liIDArr]; */
