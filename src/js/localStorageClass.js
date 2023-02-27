export default class favoriteLS {
    constructor() {
        this.FAV_KEY = 'favorite';
        this.clickedLiArr = [];
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
        return this.getClickedLiArr().findIndex(obj => obj.id === targetLiID);
    }

    
}