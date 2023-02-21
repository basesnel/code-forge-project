import { save, load } from './js/locale-storage';

// HEADER SCRIPTS
import './js/news-data/news-by-search';
import './js/switcher-theme';
import mobileMenu from './js/mobile-menu';
import headerResponsive from './js/headerResponsive';
import NewsApiService from './js/api/news-main-api';
import './js/calendar';
import './js/news-data/news-category';
import './js/news-data/news-search-by-category';
import './js/weather'

// MAIN SCRIPTS
import './js/news-data/news-popular';
import './js/categories';

import favorite from './js/favoriteAddToLS';

mobileMenu();
headerResponsive();

favorite();
// localStorage.removeItem('read')

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
const now = new Date()
const dateWithoutTime = `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth())}/${addLeadingZero(now.getFullYear())}`


const List = document.querySelector('.js-list-new') 
const READ_KEY = 'read';

List.addEventListener('click', onAddBtnClick);
  
function onAddBtnClick(e) {
    e.preventDefault()
    if (e.target.classList.contains('news-card__news-link')) {
        let targetLi = e.target.parentNode.parentNode.parentNode;
        console.log(targetLi);
        addLiToArrayInLS(targetLi);                
    }
}

function addLiToArrayInLS(targetLi) {
    if (load(READ_KEY) === undefined) {
    save(READ_KEY, []);
    }
    let data = { dataRead: '22/02/2023', dataString: targetLi.innerHTML }
    const arr = load(READ_KEY)
    arr.push(data);
    save(READ_KEY, arr);
}


