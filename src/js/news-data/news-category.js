import NewsApiService from '../api/main-api'
import Notiflix from 'notiflix';

const categoryApiService = new NewsApiService();


const refs = {
    categories: document.querySelector('.js-category'),
    categoriesOthers:document.querySelector('.js-category-others'),
}
getResponse();

async function getResponse() {
    try {
		const response = await categoryApiService.getNewsCategoryList();
        renderCategoriesDesctop(response.results);
        renderCategoriesOtherDesctop(response.results);
	} catch (error) {
        Notiflix.Notify.failure('There are problems with your request.Please try again later.')
    }
    }

function renderCategoriesDesctop(results) {
    let markup = '';
    for (let i = 0; i < 6; i++) {
        markup += `
            <li class="category__item"><button class="category__btn" type="button">${results[i].display_name}</button></li>
            `;
    };
    refs.categories.insertAdjacentHTML('beforeend', markup);
    return 
}

function renderCategoriesOtherDesctop(results) {
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



