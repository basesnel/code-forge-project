import NewsApiService from './api/main-api'
import Notiflix from 'notiflix';

const categoryApiService = new NewsApiService();

const refs = {
	categories: document.querySelector('.js-categories'),
}

getResponse();

async function getResponse() {
    try {
        const response = await categoryApiService.getNewsCategoryList();
        console.log(response);
        renderCategories(response.results)
	} catch (error) {
        Notiflix.Notify.failure('There are problems with your request.Please try again later.')
    }
    }

function renderCategories(results) {
    let markup = '';
    for (let result of results) {
        markup += `
            <button type="button">${result.display_name}</button>`;
    }
    refs.categories.insertAdjacentHTML('beforeend', markup);
    return 
}



