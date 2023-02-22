import './js/switcher-theme';
import './js/news-data/news-by-search';
import { load } from './js/locale-storage';
import mobileMenu from './js/mobile-menu';
import headerResponsive from './js/headerResponsive';
import render from './js/render-favorite';
import removeFromFavorite from './js/removeFromFavorite';



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

