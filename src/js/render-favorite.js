import { load } from './locale-storage';

export default (() => {
    const FAV_KEY = 'favorite';
    
    const refs = {
        favList: document.querySelector('.favorite-list'),
        favEmpty: document.querySelector('.undefined'),
    }

    const { favList, favEmpty } = refs;
    const dataArr = load(FAV_KEY);
    
   /* putEmptyImg();

    function putEmptyImg() {

         if (dataArr.length !== 0 || dataArr === undefined) {
        favEmpty.classList.add('visually-hidden');
        } else {
        favEmpty.classList.remove('visually-hidden');
        }
    }*/

    if (favList.innerHTML === "") {
        favEmpty.classList.remove('visually-hidden');
    }
   
   
    insertMarkupToUL(modifyData(dataArr));

    //returns array of strings
    function modifyData(dataArr) {
        if (dataArr !== undefined) {
            return dataArr.map(obj =>
                obj.dataString);    
      }    
    }


    function insertMarkupToUL(markupArr) {
        
        if (markupArr !== undefined || markupArr.length !== 0) {

        favList.innerHTML = markupArr.reduce((list, markup) => {
               return list + `<li class="favorite-item">${markup}</li>`
            }, "");
        } 

        if (favList.innerHTML === "") {
            favEmpty.classList.remove('visually-hidden');
        } else {
            favEmpty.classList.add('visually-hidden');
        }
    }
});