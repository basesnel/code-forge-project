import { save, load } from './locale-storage';
import Notiflix from 'notiflix';


export default (() => {

    const refs = {
        favoriteList: document.querySelector('.js-list-new'),
    }

    //refs and variables
    const { favoriteList } = refs;
    const FAV_KEY = 'favorite';
    const clickedLiArr = load(FAV_KEY); 

    // event listener
    favoriteList.addEventListener('click', onAddBtnClick);
    
    //click handler
    function onAddBtnClick(e) {
       
        if (e.target.classList.contains('js-to-fav')) {
 
            e.target.firstElementChild.textContent = "Remove from favorites";
            e.target.lastElementChild.firstElementChild.setAttribute('fill', '#4b48da');
            e.target.lastElementChild.firstElementChild.setAttribute('style', "fill: var(--color1, #4b48da)");
            
            e.target.classList.remove('js-to-fav');
            e.target.classList.add('js-from-fav');
                
            addLiToArrayInLS(e.target.parentNode.parentNode.id, e.target.parentNode.parentNode.parentNode);

        } else if (e.target.classList.contains('js-from-fav')) {

            e.target.firstElementChild.textContent = "Add to favorites";
            e.target.lastElementChild.firstElementChild.setAttribute('fill', 'none');
            e.target.lastElementChild.firstElementChild.setAttribute('style', "stroke: var(--color1, #4440f7)");

            removeLiFromLS(e.target.parentNode.parentNode.id);

            e.target.classList.remove('js-from-fav');
            e.target.classList.add('js-to-fav');

        } else {
            console.log('you clicked outside the button');
            console.log(e.target)
        }
    }


    function addLiToArrayInLS(targetLiID, targetLi) {
        
        if (load(FAV_KEY) === undefined) {
            save(FAV_KEY, []);
        }


        !clickedLiArr.find(obj => obj.id === targetLiID) 
            ? clickedLiArr.push({
                dataString: targetLi.innerHTML,
                id: targetLi.firstElementChild.getAttribute('id'),
            })
            : Notiflix.Notify.warning('It is in favorites already');
        
    save(FAV_KEY, clickedLiArr);
    }

    function removeLiFromLS(targetLiID) {

        if (load(FAV_KEY) === undefined) {
            save(FAV_KEY, []);
        }

        clickedLiArr.splice(findLiToRemoveByID(targetLiID), 1);

        save(FAV_KEY, clickedLiArr);

    }

    function findLiToRemoveByID(targetLiID) {
        return clickedLiArr.findIndex(obj => obj.id === targetLiID);
    }
});


