import FavoriteLS from '../local-storage/localStorageClass';

export default () => {
  const FavLS = new FavoriteLS();
  //const FAV_KEY = 'favorite';

  const refs = {
    favList: document.querySelector('.favorite-list'),
  };

  const { favList } = refs;

  FavLS.isFavListEmpty();
  favList.addEventListener('click', onRemoveBtnClick);

  function onRemoveBtnClick(e) {
    if (e.target.classList.contains('js-from-fav')) {
      /* let dataArr = load(FAV_KEY);

            dataArr.splice(findCardIndexByCardID(e.target.parentNode.parentNode.id), 1);
        
            save(FAV_KEY, dataArr);
            
            insertMarkupToUL(modifyData(dataArr));*/

      FavLS.removeFromFavOnFavPage(e.target.parentNode.parentNode.id);
      FavLS.insertMarkupToUL(favList);
      FavLS.isFavListEmpty();
    } else {
      console.log('you clicked outside the button');
    }
  }

  /* function isFavListEmpty() {
        if (favList.innerHTML === "") {
            favEmpty.classList.remove('visually-hidden');
        } else {
            favEmpty.classList.add('visually-hidden');
        }
    }*/
  // returns index of the object to delete
  /* function findCardIndexByCardID(cardID) {
      return load(FAV_KEY).findIndex(obj => obj.id === cardID);
    }

  function modifyData(dataArr) {
       if (dataArr.length > 0) {
           
           return dataArr.map(obj => obj.dataString);            
       } else if (dataArr === undefined) {
           favEmpty.classList.remove('visually-hidden');
       }

       favList.innerHTML = ""; 
    } */

  /* function insertMarkupToUL(markupArr) {
        
        if (markupArr !== undefined) {

        favEmpty.classList.remove('visually-hidden');

        favList.innerHTML = markupArr.reduce((list, markup) => {
               return list + `<li class="favorite-item">${markup}</li>`
            }, "");
        } 

        if (favList.innerHTML === "") {
            favEmpty.classList.remove('visually-hidden');
        } else {
            favEmpty.classList.add('visually-hidden');
        }
        
    } */
};
