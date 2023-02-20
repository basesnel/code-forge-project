import { save, load } from './locale-storage';
import Notiflix from 'notiflix';


export default (() => {

    const refs = {

        favoriteList: document.querySelector('.js-list-new'),

    }

    const { favoriteList } = refs;
    const FAV_KEY = 'favorite';
    let clickedLiArr = [];


    
    favoriteList.addEventListener('click', onAddBtnClick);
  
    
    function onAddBtnClick(e) {
       

        if (e.target.classList.contains('js-to-fav')) {
            
            let targetLiClasses = e.target.parentNode.parentNode.classList;
            //console.log('a');

            if (targetLiClasses.contains('favorite-chosen')) {
                Notiflix.Notify.warning('It is in favorites already')
            } else {
            targetLiClasses.add('clicked');

            let clickedLi = Array.from(e.currentTarget.children).find(li => li.classList.contains('clicked'));
           
            clickedLiArr.push( {dataString: clickedLi.innerHTML} );
           
            save(FAV_KEY, clickedLiArr);

            targetLiClasses.remove('clicked');
            targetLiClasses.add('favorite-chosen');

            return clickedLiArr;
                
            }
                        
        } else {
            console.log('other');
        }
    }
});