import { save, load } from './locale-storage';
import Notiflix from 'notiflix';


export default (() => {

    const refs = {
        favoriteList: document.querySelector('.js-list-new'),
    }

    //refs and variables
    const { favoriteList } = refs;
    const FAV_KEY = 'favorite';

    // event listener
    favoriteList.addEventListener('click', onAddBtnClick);
    
    //click handler
    function onAddBtnClick(e) {
       
        if (e.target.classList.contains('js-to-fav') || e.target.nodeName === 'SPAN' || e.target.nodeName === 'svg') {
 
            if (e.target.nodeName === 'SPAN') {    
                
                e.target.textContent = "Added to favorites";
                e.target.nextElementSibling.setAttribute('fill', '#4b48da');
                e.target.nextElementSibling.setAttribute('style', "fill: var(--color1, #4b48da)");

                addLiToArrayInLS(e.target.parentNode.parentNode.parentNode.parentNode.id, e.target.parentNode.parentNode.parentNode.parentNode);
                
            } else if (e.target.nodeName === 'BUTTON') {

                e.target.firstElementChild.textContent = "Added to favorites";
                e.target.lastElementChild.firstElementChild.setAttribute('fill', '#4b48da');
                e.target.lastElementChild.firstElementChild.setAttribute('style', "fill: var(--color1, #4b48da)");
                
                addLiToArrayInLS(e.target.parentNode.parentNode.parentNode.id, e.target.parentNode.parentNode.parentNode);

            } else if (e.target.nodeName === 'svg') {
                e.target.previousElementSibling.textContent = "Added to favorites";
                e.target.firstElementChild.setAttribute('fill', '#4b48da');
                e.target.firstElementChild.setAttribute('style', "fill: var(--color1, #4b48da)");
                
                addLiToArrayInLS(e.target.parentNode.parentNode.parentNode.parentNode.id, e.target.parentNode.parentNode.parentNode.parentNode);
            }
               
        } else {
            console.log('you clicked outside the button');
            console.log(e.target)
        }
    }


    function addLiToArrayInLS(targetLiID, targetLi) {
        
        if (load(FAV_KEY) === undefined) {
            save(FAV_KEY, []);
        }

        const clickedLiArr = load(FAV_KEY); 

        !clickedLiArr.find(obj => obj.id === targetLiID) 
            ? clickedLiArr.push({
                dataString: targetLi.innerHTML,
                id: targetLi.getAttribute('id'),
            })
            : Notiflix.Notify.warning('It is in favorites already');
        
    save(FAV_KEY, clickedLiArr);
}
});


