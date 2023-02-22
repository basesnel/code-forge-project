import { save, load } from './locale-storage';
import render from './render-favorite';

export default (() => {

    const FAV_KEY = 'favorite';

    const refs = {
        removeBtn: document.querySelector('.js-from-favorite'),
        favList: document.querySelector('.favorite-list'),
    }

    const { removeBtn, favList } = refs;

    favList.addEventListener('click', onRemoveBtnClick);

    function onRemoveBtnClick(e) {

        if (e.target.classList.contains('js-from-fav')) {
            let cardID = e.target.nextElementSibling.textContent;
            console.log('button');
           
            let dataArr = load(FAV_KEY);
            dataArr.splice(findCardIndexByCardID(cardID), 1);
            save(FAV_KEY, dataArr);
            
            insertMarkupToUL(dataArr);

        } else {
            console.log('you clicked outside the button');
        }
    }


    // returns index of the object to delete
    function findCardIndexByCardID(cardID) {
      return load(FAV_KEY).findIndex(obj => obj.dataString.includes(cardID));
    }

   function modifyData(dataArr) {
       if (dataArr.length > 0) {
            
        return dataArr.map(obj =>
                obj.dataString.replace("js-to-fav", "js-from-fav")
                    .replace("news-card__add-favorite", "news-card__remove-favorite")
                    .replace("Add to favorite", "Remove from favorite")
                    .replace("add-fav-btn", "remove-fav-btn"));       
            
       } 

       favList.innerHTML = " "; 
    }

     // returns markup
    function makeFavoriteMarkup(dataArr) {
        return modifyData(dataArr).join("");  
    }

    function insertMarkupToUL(dataArr) {
        favList.innerHTML = `<li class="favorite-item">${makeFavoriteMarkup(dataArr)}</li>`;
    }
    
});