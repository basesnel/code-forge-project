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
    // formSearch: document.getElementById('form-field')
    
}

// refs.formSearch.addEventListener('submit', onSubmitForm)
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
}

function undefinedNews() {
    return refs.undefinedThumb.classList.remove('visually-hidden')
}

// function onSubmitForm(e) {
//     e.preventDefault()
//     let value = e.target.firstElementChild.firstElementChild.value
//     const category = refs.readList.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
//     if (value != category.textContent) {
//         category.parentNode.classList.add('visually-hidden')
//     }
    
// }
