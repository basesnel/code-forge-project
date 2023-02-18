import { load } from "./locale-storage";

const refs = {
    undefinedThumb: document.querySelector('.undefined'),
    readList: document.querySelector('.read-list'),
    readListBtn: document.querySelector('.read-list__button')
}

function creatMarcupReadPage() {
    if (load('readNews') != undefined) {
        refs.undefinedThumb.classList.add('is-hidden');
        creatPageList();
    } else {
        undefinedNews();
    }
}

// function creatPageList() {
    
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
