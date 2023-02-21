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
   // console.log(dataArr[0].dataString);
  //  console.log(favList)
    insertMarkupToUL();

    console.log(modifyData());
    console.log(makeFavoriteMarkup()) //undefined

    //returns array of strings
    function modifyData() {
        if (dataArr !== undefined) {
            return dataArr.map(obj =>
                obj.dataString.replace("js-to-fav", "js-from-fav")
                    .replace("news-card__add-favorite", "news-card__remove-favorite")
                    .replace("Add to favorite", "Remove from favorite"));       
      }    
    }

    // returns undefined
    function makeFavoriteMarkup() {

            return modifyData().reduce((markup, string) => {
            markup + string
            }, "");
        
    }

    function insertMarkupToUL() {
        favList.insertAdjacentHTML('beforeend', makeFavoriteMarkup());
    }
});