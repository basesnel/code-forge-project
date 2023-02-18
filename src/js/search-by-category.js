import NewsApiService from './api/main-api'
import Notiflix from 'notiflix';
const newsPerPage = 20;
const categoryApiService = new NewsApiService(newsPerPage);

const refs = {
	openSearchBtn: document.getElementById('search-btn'),
	searchForm: document.getElementById('form-field'),
}

refs.openSearchBtn.addEventListener('click', onClickSearchBtn);
refs.searchForm.addEventListener('submit', onSearch);

function onClickSearchBtn(e) {
	refs.searchForm.classList.add('open');
}

function onSearch(e) {
	e.preventDefault();
	const inputValue = e.target.elements[1].value.trim();

	if (!inputValue) {
    Notiflix.Notify.warning('Empty search! Please enter some criteria for search.')
    return
	}

	newsApiService.query = inputValue;
    newsApiService.resetPage();
	getResponse()
}

function onLoadMore(e) {
    e.preventDefault();
    getResponse()
}

async function getResponse() {
    try {
        const response = await newsApiService.getNewsBySearch();
		console.log(response);
	} catch (error) {
		console.log('failur')
        Notiflix.Notify.failure('There are problems with your request.Please try again later.')
    }
}