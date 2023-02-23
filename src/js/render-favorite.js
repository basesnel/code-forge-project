import { load } from './locale-storage';

export default (() => {
    const FAV_KEY = 'favorite';
    
    const refs = {
        favList: document.querySelector('.favorite-list'),
    }

    const { favList } = refs;
    const dataArr = load(FAV_KEY);
   
    insertMarkupToUL();

    //returns array of strings
    function modifyData() {
        if (dataArr !== undefined) {
            return dataArr.map(obj =>
                obj.dataString);    
      }    
    }

    // returns markup
    function makeFavoriteMarkup() {
        return modifyData().join("");  
    }

    function insertMarkupToUL() {
        favList.insertAdjacentHTML('beforeend', `<li class="favorite-item">${makeFavoriteMarkup()}</li>`);
    }
});