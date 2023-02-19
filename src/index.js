// HEADER SCRIPTS
import "./js/open-search-form";
import './js/switcher-theme';
import mobileMenu from './js/mobile-menu';
import headerResponsive from './js/headerResponsive';
import NewsApiService from './js/api/main-api'
import "./js/category";

mobileMenu();
headerResponsive();

// api.getNewsPopular()
//     .then(res => {
//         console.log(res);
// })
