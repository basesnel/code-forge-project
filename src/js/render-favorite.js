import FavoriteLS from './localStorageClass';

export default (() => {
    const FavLS = new FavoriteLS();

    FavLS.isFavListEmpty();
    FavLS.insertMarkupToUL();

    //returns array of strings
    /*function modifyData(dataArr) {
        if (dataArr !== undefined) {
            return dataArr.map(obj =>
                obj.dataString);    
      }    
    }


    // inserts markup into the ul-element
    function insertMarkupToUL(markupArr) {
        
        if (markupArr !== undefined || markupArr.length !== 0) {

        favList.innerHTML = markupArr.reduce((list, markup) => {
               return list + `<li class="favorite-item">${markup}</li>`
            }, "");
        } 

        isFavListEmpty();
    } */


    // checks if the default image is needed
    /*function isFavListEmpty() {
        if (favList.innerHTML === "") {
            favEmpty.classList.remove('visually-hidden');
        } else {
            favEmpty.classList.add('visually-hidden');
        }
    }*/
});