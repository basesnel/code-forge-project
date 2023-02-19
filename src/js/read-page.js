import readListTpl from "../templates/read-page.hbs";
// import { load } from "./locale-storage";

const refs = {
    undefinedThumb: document.querySelector('.undefined'),
    readList: document.querySelector('.read-list'),
    readListBtn: document.querySelector('.read-list__button')
}

function creatMarcupReadPage(data) {
    
    if (load('readNews') != undefined) {
        refs.undefinedThumb.classList.add('is-hidden');
        creatPageList();
    } else {
        undefinedNews();
    }
}

function loadLS(key) {
    try {
		const data = localStorage.getItem(key);
		if (data === null) {
			return undefined;
		} else {
			return JSON.parse(data);
		}
	} catch (error) {
		console.log('Error: ', error.message);
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
