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
    let clickedLiArr = [];

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
        let data = { dataRead: dateWithoutTime, dataString: targetLi.innerHTML }
        clickedLiArr.push(data);
        save(READ_KEY, clickedLiArr);
        return clickedLiArr;
}

