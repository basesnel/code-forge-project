import { save, load } from './js/locale-storage';

// HEADER SCRIPTS
// import './js/open-search-form';
import './js/news-data/news-by-search';
import './js/switcher-theme';
import mobileMenu from './js/mobile-menu';
import headerResponsive from './js/headerResponsive';
import NewsApiService from './js/api/main-api';
// import './js/category';
import './js/calendar';
import './js/news-data/news-category';

// MAIN SCRIPTS
import './js/news-data/news-popular';

import favorite from './js/favoriteAddToLS';

mobileMenu();
headerResponsive();

favorite();
