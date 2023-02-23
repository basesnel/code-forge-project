import { load } from "../js/locale-storage";
import mobileMenu from '../js/mobile-menu';
import headerResponsive from '../js/headerResponsive';
import './news-data/news-by-search';
import '../js/switcher-theme';

mobileMenu();
headerResponsive();

const refs = {
    undefinedThumb: document.querySelector('.undefined'),
    readList: document.querySelector('.read-list'),
}

refs.readList.addEventListener('click', onDataClick)

creatMarcupReadPage();

function creatMarcupReadPage() { 
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
}

function undefinedNews() {
    return refs.undefinedThumb.classList.remove('visually-hidden')
}

