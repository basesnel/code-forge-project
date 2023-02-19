import { save, load } from './locale-storage';


export default (() => {

    const refs = {
        addFavBtn: document.querySelector(".js-to-fav"),
        liEl: document.querySelector('.list-news__item'),
        favoriteList: document.querySelector('.js-list-new'),

    }

    const { addFavBtn, liEl, favoriteList } = refs;
    const FAV_KEY = 'favorite'


    
    favoriteList.addEventListener('click', onAddBtnClick);

    function onAddBtnClick(e) {
        console.log('b')
        if (e.target.classList.contains('js-to-fav')) {
            console.log('a')
            save(FAV_KEY, e.currentTarget.firstElementChild);
        } else {
            console.log('other');
        }
    

    }
    





});