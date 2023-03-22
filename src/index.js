// HEADER SCRIPTS
import './js/news-data/news-by-search';
import './js/theme-switcher/switcher-theme';
import mobileMenu from './js/mobile-menu/mobile-menu';
import headerResponsive from './js/responsivity/headerResponsive';

// MAIN SCRIPTS
import getResponsePopular from './js/news-data/news-popular';
import getResponseCategory from './js/news-data//news-category';
import './js/calendar/calendar';
import './js/news-data/news-by-search-by-date';
import './js/news-data/news-category';
import './js/news-data/news-search-by-category';
import './js/weather/weather';

// import './js/pagination-m';

import './js/news-data/news-popular';
import './js/categories/categories';
import './js/read/click-read-more';

// import './js/pagination_m';
// DOM - weather rebuil position
import './js/weather/dom-rebuild';
import favorite from './js/favorite/favoriteAddToLS';
// let curPage = 1;

getResponseCategory();
getResponsePopular(1);
mobileMenu();
headerResponsive();

favorite();

import './js/pagination/pagination-v2';
import './js/api/firebase';
