export default class favoriteLS {
    constructor() {
        this.FAV_KEY = 'favorite';
        this.clickedLiArr = [];
        this.favList = document.querySelector('.favorite-list');
        this.favEmpty = document.querySelector('.undefined');
    }

    saveEmptyArr() {
        if (this.load(this.FAV_KEY) === undefined) {
            this.save(FAV_KEY, []);
        }
    }

    getClickedLiArr() {
        return this.clickedLiArr;
    }

    setClickedLiArr(object) {
        return this.clickedLiArr.push(object);
    }

    load(key) {

        try {
		    const data = localStorage.getItem(key);
		        if (data === null) {
			        return undefined;
		        } else {
			        return JSON.parse(data);
		        }
	        } catch (error) {
		    console.log('Error: ', error.message);
	        }
    }

    save(key, data) {

       try {
		        localStorage.setItem(key, JSON.stringify(data));
	        } catch (error) {
		        console.log('Error: ', error.message);
	        } 
    }

    addToFav(targetLiID, targetLi) {
        
        this.saveEmptyArr();

        if (this.getClickedLiArr().find(obj => obj.id === targetLiID) === undefined) {

            this.setClickedLiArr({dataString: targetLi.innerHTML, id: targetLi.firstElementChild.getAttribute('id'), })

        }
           
        this.save(this.FAV_KEY, this.getClickedLiArr());
    }

    removeFromFav(targetLiID) {

        this.saveEmptyArr();
        this.getClickedLiArr().splice(this.findLiToRemoveByID(targetLiID), 1);
        this.save(this.FAV_KEY, this.getClickedLiArr());

    }

    findLiToRemoveByID(targetLiID) {
        return this.load(this.FAV_KEY).findIndex(obj => obj.id === targetLiID);
    }


    // render methods
    isFavListEmpty() {
        
            if (this.favList.innerHTML === "") {
            this.favEmpty.classList.remove('visually-hidden');
            } else {
            this.favEmpty.classList.add('visually-hidden');
            }
        
    }

    modifyData(dataArr) {
        if (dataArr !== undefined) {
            return dataArr.map(obj =>
                obj.dataString);    
      } 
    }

    insertMarkupToUL() {

        let markupArr = this.modifyData(this.load(this.FAV_KEY));

        if (markupArr !== undefined || markupArr.length !== 0) {

        this.favList.innerHTML = markupArr.reduce((list, markup) => {
               return list + `<li class="favorite-item">${markup}</li>`
            }, "");
        } 

    }


    // remove from fav methods
    removeFromFavOnFavPage(id) {
        let dataArr = this.load(this.FAV_KEY);

        dataArr.splice(this.findLiToRemoveByID(id), 1);
        this.save(this.FAV_KEY, dataArr);
    }
}