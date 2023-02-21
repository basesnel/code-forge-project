import { load } from './locale-storage';
//import mobileMenu from '../js/mobile-menu';
//import headerResponsive from '../js/headerResponsive';
//import '../js/switcher-theme';

export default (() => {
    const FAV_KEY = 'favorite';
    
    const refs = {
        favList: document.querySelector('.favorite-list'),
    }

    const { favList } = refs;
    const dataArr = load(FAV_KEY);

    insertMarkupToUL();

    function modifyData() {
        if (dataArr !== undefined) {

            return dataArr.map(obj => obj.dataString.replace(`<button type="button" class="js-to-fav">
  <p class="news-card__add-favorite">Add to favorite</p>
    `, `<button type="button" class="js-from-fav">
  <p class="news-card__remove-favorite">Remove from favorite</p>
    `));
            
      }    
    }

    function makeFavoriteMarkup() {

            return modifyData().reduce((markup, obj) => {
            markup + obj.dataString
            }, "");
        
    }

    function insertMarkupToUL() {
        favList.insertAdjacentHTML('beforeend', makeFavoriteMarkup());
    }
});