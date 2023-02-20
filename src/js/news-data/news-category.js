import NewsApiService from '../api/main-api'
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const categoryApiService = new NewsApiService();


const refs = {
    categories: document.querySelector('.js-category'),
	categoriesOthers: document.querySelector('.js-category-others'),
	othersTextInBtn: document.querySelector('.js-text-btn'),
}
getResponse();

window.addEventListener('resize', debounce(onResize, 300));

async function getResponse() {
    try {
		const response = await categoryApiService.getNewsCategoryList();
		chooseElementsByViewportWidth(response.results);
	} catch (error) {
        Notiflix.Notify.failure('There are problems with your request.Please try again later.')
    }
}

function renderCategoriesDesktop(results) {
    let markup = '';
    for (let i = 0; i < 6; i++) {
        markup += `
            <li class="category__item"><button class="category__btn" type="button">${results[i].display_name}</button></li>
            `;
    };
    refs.categories.insertAdjacentHTML('beforeend', markup);
    return 
}

function renderCategoriesOtherDesktop(results) {
	refs.othersTextInBtn.textContent = 'Others';
    let markup = '';
    for (let i = 6; i < 50; i++) {
        markup += `
          <li class="others__item">
            <button class="others__item-button">${results[i].display_name}</button>
          </li>
            `;
    };
    refs.categoriesOthers.insertAdjacentHTML('beforeend', markup);
    return 
}

function renderCategoriesTablet(results) {
    let markup = '';
    for (let i = 0; i < 4; i++) {
        markup += `
            <li class="category__item"><button class="category__btn" type="button">${results[i].display_name}</button></li>
            `;
    };
    refs.categories.insertAdjacentHTML('beforeend', markup);
    return 
}

function renderCategoriesOtherTablet(results) {
	refs.othersTextInBtn.textContent = 'Others';
    let markup = '';
    for (let i = 4; i < 50; i++) {
        markup += `
          <li class="others__item">
            <button class="others__item-button">${results[i].display_name}</button>
          </li>
            `;
    };
	refs.categoriesOthers.insertAdjacentHTML('beforeend', markup);
    return 
}

function renderCategoriesOtherMobile(results) {
	refs.othersTextInBtn.textContent = 'Categories';

    let markup = '';
    for (let i = 0; i < 50; i++) {
        markup += `
          <li class="others__item">
            <button class="others__item-button">${results[i].display_name}</button>
          </li>
            `;
    };
    refs.categoriesOthers.insertAdjacentHTML('beforeend', markup);
    return 
}

function clearCategoriesMarkup() {
	refs.categories.innerHTML = '';
	refs.categoriesOthers.innerHTML = '';
}


//-------------------------------ViewportWidth----------------------------------- 
function onResize(e) {
    getResponse();
} 

function chooseElementsByViewportWidth(data) {
	if (window.matchMedia("(min-width: 1280px)").matches) {
		clearCategoriesMarkup();
		renderCategoriesDesktop(data);
		renderCategoriesOtherDesktop(data);
	} else if (window.matchMedia("(min-width: 768px)").matches) {
		clearCategoriesMarkup();
        renderCategoriesTablet(data);
		renderCategoriesOtherTablet(data);
	} else {
		clearCategoriesMarkup();
		renderCategoriesOtherMobile(data);
    }
}
//----------------------------------------------------------------------------
