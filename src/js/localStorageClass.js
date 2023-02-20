export default class LS {
    constructor() {
        this.FAV_KEY = 'favorite';
        this.clickedLiArr = [];
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

    addToFav(e, targetLiClasses) {
        targetLiClasses.add('clicked');

        let clickedLi = Array.from(e.currentTarget.children).find(li => li.classList.contains('clicked'));
           
        this.clickedLiArr.push( {dataString: clickedLi.innerHTML} );
           
        save(this.FAV_KEY, this.clickedLiArr);

        targetLiClasses.remove('clicked');
        targetLiClasses.add('favorite-chosen');

        return this.clickedLiArr;
    }
}