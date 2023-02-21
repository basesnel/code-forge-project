import { load } from "../js/locale-storage";
import mobileMenu from '../js/mobile-menu';
import headerResponsive from '../js/headerResponsive';
import '../js/switcher-theme';
// import onClickSearchBtn from './news-data/news-by-search'

mobileMenu();
headerResponsive();

const refs = {
    undefinedThumb: document.querySelector('.undefined'),
    readList: document.querySelector('.read-list'),
    // openSearchBtn: document.getElementById('search-btn'),
    formSearch: document.getElementById('form-field')
}

// refs.openSearchBtn.addEventListener('click', onClickSearchBtn)
refs.formSearch.addEventListener('submit', onSubmitForm)
refs.readList.addEventListener('click', onDataClick)

creatMarcupReadPage();

function creatMarcupReadPage(data) {
    
    if (load('read') != undefined) {
        refs.undefinedThumb.classList.add('visually-hidden');
        refs.readList.insertAdjacentHTML('afterbegin', creatPageList());
    } else {
        undefinedNews();
    }
}


function creatPageList() {
    const arrayCardRead = load('read');
    const arrayDataRead = arrayCardRead.map(data => data.dataRead).filter((item, index, arr) => { return arr.indexOf(item) === index });
    console.log(arrayDataRead);

    return arrayDataRead.map(data => `<li class="read-list__item">
            <button class="read-list__button" type="button">
              <span class="read-list__data">${data}</span>
              <svg class="read-list__icon" width="9" height="15" >
                <use href=${'./sprite.f14d31f7.svg#icon-categoriesList-closed'}></use>
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
        console.log(e.target);
        const arrayCardRead = load('read');
        cardDate.classList.toggle('visually-hidden');
        cardDate.innerHTML = arrayCardRead
            .filter(item => {
            if (item.dataRead === e.target.firstElementChild.textContent) return item
            })
            .map(data => data.dataString)
            .filter((item, index, arr) => { return arr.indexOf(item) === index })
            .join('')
        
        if (cardDate.classList.contains('visually-hidden')) {
            e.target.lastElementChild.firstElementChild.setAttribute('href', '/sprite.f14d31f7.svg#icon-categoriesList-closed')
        } else {
            e.target.lastElementChild.firstElementChild.setAttribute('href', '/sprite.f14d31f7.svg#icon-categoriesList-opened')
            }
    }  
}

function undefinedNews() {
    return refs.undefinedThumb.classList.remove('visually-hidden')
}

function onSubmitForm(e) {
    e.preventDefault()
    let value = e.target.firstElementChild.firstElementChild.value
    
}
