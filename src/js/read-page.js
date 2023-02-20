import { load } from "../js/locale-storage";
import mobileMenu from '../js/mobile-menu';
import headerResponsive from '../js/headerResponsive';
import '../js/switcher-theme';

mobileMenu();
headerResponsive();

const refs = {
    undefinedThumb: document.querySelector('.undefined'),
    readList: document.querySelector('.read-list'),
}

refs.readList.addEventListener('click', onDataClick)

creatMarcupReadPage();

function creatMarcupReadPage(data) {
    
    if (load('read') != undefined) {
        refs.undefinedThumb.classList.add('is-hidden');
        refs.readList.insertAdjacentHTML('afterbegin', creatPageList());
    } else {
        undefinedNews();
    }
}


function creatPageList() {
    const arrayCardRead = load('read');
    const arrayDataRead = arrayCardRead.map(data => data.dataRead).filter((item, index, arr) => {return arr.indexOf(item) === index});
    console.log(arrayDataRead);

    return arrayDataRead.map(data => `<li class="read-list__item">
            <button class="read-list__button" type="button">
              <span class="read-list__data">${data}</span>
              <span><svg class="read-list__icon" width="9" height="15" >
                <use href="./images/sprite.svg#icon-categoriesList-closed"></use>
              </svg></span>
            </button>
            <ul class="card-list is-hidden">
            </ul>
        </li>
    `)
}
function onDataClick(e) {
    if (e.target.classList.contains('read-list__button')) {
        const arrayCardRead = load('read');
        const arrayNewsRead = arrayCardRead.map(data => data.dataString).filter((item, index, arr) => {return arr.indexOf(item) === index});
        console.log(arrayNewsRead);
        arrayNewsRead.map(data => console.log(data));
        const cardList = document.querySelector('.card-list')
        cardList.classList.remove('is-hidden');
        return cardList.insertAdjacentHTML('afterbegin', arrayNewsRead)
    }  
    cardList.classList.remove('is-hidden');
}

// function creatPageItem() {
    
// }

function undefinedNews() {
    return refs.undefinedThumb.classList.remove('is-hidden')
}

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }
// const now = new Date()
// const dateWithoutTime = `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth())}/${addLeadingZero(now.getFullYear())}`
// console.log(dateWithoutTime); 
