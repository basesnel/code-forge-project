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

// import './js/pagination-m';

import './js/news-data/news-popular';
import './js/categories';
import './js/click-read-more';

// import './js/pagination_m';
// DOM - weather rebuil position
import './js/dom-rebuild';
import favorite from './js/favoriteAddToLS';
// let curPage = 1;


getResponseCategory();
getResponsePopular(1);
mobileMenu();
headerResponsive();

favorite();

import './js/pagination-v2';
import './js/api/firebase';