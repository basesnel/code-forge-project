import { load } from './locale-storage';

export default (() => {
    const FAV_KEY = 'favorite';
    
    const refs = {
        favList: document.querySelector('.favorite-list'),
    }

    const { favList } = refs;
    const dataArr = load(FAV_KEY);
   
    insertMarkupToUL(modifyData(dataArr));

    //returns array of strings
    function modifyData(dataArr) {
        if (dataArr !== undefined) {
            return dataArr.map(obj =>
                obj.dataString);    
      }    
    }


    function insertMarkupToUL(markupArr) {
        
        if (markupArr !== undefined) {
        favList.innerHTML = markupArr.reduce((list, markup) => {
               return list + `<li class="favorite-item">${markup}</li>`
            }, "");
        }

    }
});