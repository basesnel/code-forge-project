import { load, save } from "./locale-storage";
import mobileMenu from './mobile-menu';
import headerResponsive from './headerResponsive';
import './news-data/news-by-search';
import './switcher-theme';

mobileMenu();
headerResponsive();

const FAV_KEY = 'favorite';
const clickedLiArr = load(FAV_KEY); 
if (load(FAV_KEY) === undefined) {
    save(FAV_KEY, []);
}

const refs = {
    undefinedThumb: document.querySelector('.undefined'),
    readList: document.querySelector('.read-list'),
}

refs.readList.addEventListener('click', onDataClick)

if (load('read') != undefined) {
    refs.undefinedThumb.classList.add('visually-hidden');
    refs.readList.insertAdjacentHTML('afterbegin', creatPageList());
} else  {
    refs.undefinedThumb.classList.remove('visually-hidden');
}

function creatPageList() {
    const arrayCardRead = load('read');
    const arrayDataRead = arrayCardRead.map(data => data.dataRead).filter((item, index, arr) => { return arr.indexOf(item) === index });

    return arrayDataRead.map(data => `<li class="read-list__item">
            <button class="read-list__button" type="button">
              <span class="read-list__data">${data}</span>
              <svg class="read-list__icon" width="9" height="15" viewBox="0 0 32 32">
			<path 
				d="M4.576 5.333l-3.509 3.247 14.933 13.819 14.933-13.819-3.509-3.248-11.424 10.549-11.424-10.549z">
			</path>>
              </svg>
            </button>
            <ul class="card-list visually-hidden">
            </ul>
        </li>
    `).join('')
}

function onDataClick(e) {
    if (e.target.classList.contains('read-list__button')) {
        const cardDate = e.target.nextElementSibling;
        const arrayCardRead = load('read');
        cardDate.classList.toggle('visually-hidden');
        cardDate.innerHTML = arrayCardRead
            .filter(item => {
                if (item.dataRead === e.target.firstElementChild.textContent) return item
            })
            .map(data => data.dataString)
            .filter((item, index, arr) => { return arr.indexOf(item) === index
            })
            .join('')
        
        
        if (cardDate.classList.contains('visually-hidden')) {
            e.target.lastElementChild.setAttribute('viewBox', '0 0 32 32')
            e.target.lastElementChild.firstElementChild.setAttribute('d', 'M4.576 5.333l-3.509 3.247 14.933 13.819 14.933-13.819-3.509-3.248-11.424 10.549-11.424-10.549z')
        } else {
            e.target.lastElementChild.setAttribute('viewBox', '0 0 30 32')
            e.target.lastElementChild.firstElementChild.setAttribute('d', 'M3.509 22.4l-3.509-3.247 14.933-13.819 14.933 13.819-3.509 3.247-11.424-10.549-11.424 10.549z')
        }
    }  
    
    if (e.target.classList.contains('read-list__data')) {
        const cardDate = e.target.parentNode.nextElementSibling;
        const arrayCardRead = load('read');
        cardDate.classList.toggle('visually-hidden');
        cardDate.innerHTML = arrayCardRead
            .filter(item => {
                if (item.dataRead === e.target.textContent) return item
            })
            .map(data => data.dataString)
            .filter((item, index, arr) => { return arr.indexOf(item) === index
            })
            .join('')
            
        if (cardDate.classList.contains('visually-hidden')) {
            e.target.nextElementSibling.setAttribute('viewBox', '0 0 32 32')
            e.target.nextElementSibling.firstElementChild.setAttribute('d', 'M4.576 5.333l-3.509 3.247 14.933 13.819 14.933-13.819-3.509-3.248-11.424 10.549-11.424-10.549z')
        } else {
            e.target.nextElementSibling.setAttribute('viewBox', '0 0 30 32')
            e.target.nextElementSibling.firstElementChild.setAttribute('d', 'M3.509 22.4l-3.509-3.247 14.933-13.819 14.933 13.819-3.509 3.247-11.424-10.549-11.424 10.549z')
            }
    }  

    if (e.target.classList.contains('read-list__icon')) {
        const cardDate = e.target.parentNode.nextElementSibling;
        const arrayCardRead = load('read');
        cardDate.classList.toggle('visually-hidden');
        cardDate.innerHTML = arrayCardRead
            .filter(item => {
                if (item.dataRead === e.target.previousElementSibling.textContent) return item
            })
            .map(data => data.dataString)
            .filter((item, index, arr) => { return arr.indexOf(item) === index
            })
            .join('')
            
        if (cardDate.classList.contains('visually-hidden')) {
            e.target.setAttribute('viewBox', '0 0 32 32')
            e.target.firstElementChild.setAttribute('d', 'M4.576 5.333l-3.509 3.247 14.933 13.819 14.933-13.819-3.509-3.248-11.424 10.549-11.424-10.549z')
        } else {
            e.target.setAttribute('viewBox', '0 0 30 32')
            e.target.firstElementChild.setAttribute('d', 'M3.509 22.4l-3.509-3.247 14.933-13.819 14.933 13.819-3.509 3.247-11.424-10.549-11.424 10.549z')
            }
    }
    
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

    } 

    const arrayItem = refs.readList.firstElementChild.lastElementChild.children;
	const arrayFav = load('favorite');
	const favId = arrayFav.map(item => item.id);

  Array.from(arrayItem).map(item => {
    if (favId.includes(item.firstElementChild.id)) {
        const Btn = item.firstElementChild.firstElementChild.nextElementSibling.lastElementChild
        Btn.classList.remove('js-to-fav');
        Btn.classList.add('js-from-fav');
      Btn.firstElementChild.textContent = "Remove from favorites";
      Btn.lastElementChild.firstElementChild.setAttribute('fill', '#4b48da');
      Btn.lastElementChild.firstElementChild.setAttribute('style', "fill: var(--color1, #4b48da)");
    }
  });
}

function addLiToArrayInLS(targetLiID, targetLi) {
    if (!clickedLiArr.find(obj => obj.id === targetLiID)) {
        clickedLiArr.push({dataString: targetLi.innerHTML, id: targetLi.firstElementChild.getAttribute('id')})
    } 
           
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



