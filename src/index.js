import { save, load } from './js/locale-storage';

// HEADER SCRIPTS
import './js/news-data/news-by-search';
import './js/switcher-theme';
import mobileMenu from './js/mobile-menu';
import headerResponsive from './js/headerResponsive';
import NewsApiService from './js/api/main-api';
import './js/calendar';
import './js/news-data/news-category';
import './js/weather'

// MAIN SCRIPTS
import './js/news-data/news-popular';
import './js/category-others-open';

import favorite from './js/favoriteAddToLS';
import renderFavorite from './js/render-favorite';

mobileMenu();
headerResponsive();

favorite();
renderFavorite();
