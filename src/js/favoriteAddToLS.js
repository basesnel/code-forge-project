import { save, load } from './locale-storage';
import Notiflix from 'notiflix';


export default (() => {

    const refs = {
        favoriteList: document.querySelector('.js-list-new'),
    }

    //refs and variables
    const { favoriteList } = refs;
    const FAV_KEY = 'favorite';
   // let clickedLiArr = [];

    // event listener
    favoriteList.addEventListener('click', onAddBtnClick);
    //const dataStringArray = load(FAV_KEY).flatMap(obj => obj.dataString);
    
    //click handler
    function onAddBtnClick(e) {
       
        if (e.target.classList.contains('js-to-fav')) {
            
            let targetLiClasses = e.target.parentNode.parentNode.classList;
            //console.log('a');

            if (targetLiClasses.contains('favorite-chosen')) {
                
                Notiflix.Notify.warning('It is in favorites already');
            } else {

                const heart = e.target.lastElementChild.firstElementChild;
                heart.setAttribute('fill', '#4b48da');
                heart.setAttribute('style', "fill: var(--color1, #4b48da)");
                heart.parentNode.previousElementSibling.textContent = "Added to favorites";

                addLiToArrayInLS(e, targetLiClasses);   
               
            }
                        
        } else {
            console.log('you clicked outside the button');
        }
    }


    function addLiToArrayInLS(e, targetLiClasses) {

        if (load(FAV_KEY) === undefined) {
            save(FAV_KEY, []);
        }

    const clickedLiArr = load(FAV_KEY); 
    targetLiClasses.add('clicked');
    
    let clickedLi = Array.from(e.currentTarget.children).find(li => li.classList.contains('clicked'));
           
        clickedLiArr.push({
            dataString: clickedLi.innerHTML,
            id: clickedLi.firstElementChild.getAttribute(id),
        });
           
    save(FAV_KEY, clickedLiArr);

    targetLiClasses.remove('clicked');
    targetLiClasses.add('favorite-chosen');

   // return clickedLiArr;
}
});


