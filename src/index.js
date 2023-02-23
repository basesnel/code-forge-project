import { save, load } from './js/locale-storage';

// HEADER SCRIPTS
import './js/news-data/news-by-search';
import './js/switcher-theme';
import mobileMenu from './js/mobile-menu';
import headerResponsive from './js/headerResponsive';

// MAIN SCRIPTS
import getResponsePopular from './js/news-data/news-popular';
import getResponseCategory from './js/news-data//news-category';
import './js/calendar';
import './js/news-data/news-by-search-by-date';
import './js/news-data/news-category';
import './js/news-data/news-search-by-category';
import './js/weather';



import './js/news-data/news-popular';
import './js/categories';

// !---
import './js/pagination_m';
// !---

// DOM - weather rebuil position
import './js/dom-rebuild';

import favorite from './js/favoriteAddToLS';
getResponseCategory();
getResponsePopular();
mobileMenu();
headerResponsive();

favorite();

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
const now = new Date()
const dateWithoutTime = `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth()+1)}/${addLeadingZero(now.getFullYear())}`

const list = document.querySelector('.js-list-new') 
const READ_KEY = 'read';

list.addEventListener('click', onAddBtnClick);
  
function onAddBtnClick(e) {
    e.preventDefault()
    if (e.target.classList.contains('news-card__news-link')) {
        let targetLi = e.target.parentNode.parentNode;
        console.log(targetLi.firstElementChild.firstElementChild);
        targetLi.firstElementChild.firstElementChild.classList.remove('visually-hidden')
        targetLi.style.opacity = 0.7;
        addLiToArrayInLS(targetLi);
    }
}

function addLiToArrayInLS(targetLi) {
  if (load(READ_KEY) === undefined) {
    save(READ_KEY, []);
    }
    const id = targetLi.firstElementChild.getAttribute('id');
    let data = { dataRead: dateWithoutTime, dataString: `<li class="list-news__item">${targetLi.innerHTML}</li>`, id: id}
    const arr = load(READ_KEY)
    arr.push(data);
    save(READ_KEY, arr);
}





