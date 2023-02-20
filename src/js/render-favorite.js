//import LSFavorite from './favoriteAddToLS';
import { load } from './locale-storage';
//LSFavorite()
import mobileMenu from '../js/mobile-menu';
import headerResponsive from '../js/headerResponsive';
import '../js/switcher-theme';

export default (() => {
    const FAV_KEY = 'favorite';
    
    const refs = {
        favList: document.querySelector('.favorite-list'),
    }

    const { favList } = refs;
    const dataArr = load(FAV_KEY);

    insertMarkupToUL();


    function makeFavoriteMarkup() {
        return dataArr.reduce((markup, obj) => {
            markup + obj.dataString
        }, "");
    }

    function insertMarkupToUL() {
        favList.insertAdjacentHTML('beforeend', makeFavoriteMarkup());
    }

    





});