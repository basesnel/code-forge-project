import NewsApiService from '../api/news-main-api'
import Notiflix from 'notiflix';
const DEFAULT_PHOTO = "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png";
const DEFAULT_CAPTION = "photo";
const searchByCategoryApiService = new NewsApiService();

const refs = {
	categorySearchBtn: document.querySelector('.category'),
	mainNewsList: document.querySelector('.js-list-new'),
}

refs.categorySearchBtn.addEventListener('click', onSearch);

function onSearch(e) {
    e.preventDefault();
	const categoryValue = e.target.textContent.trim().toLowerCase();
	const encoded = encodeURIComponent(categoryValue);

	if (encoded !== 'others') {
		searchByCategoryApiService.category = encoded;
    	searchByCategoryApiService.resetPage();
		getResponse()
	}

}

// Заготовка для пагінації

// function onLoadMore(e) {
//     e.preventDefault();
//     getResponse()
// }

async function getResponse() {
    try {
        const response = await searchByCategoryApiService.getNewsByCategory();
		console.log(response);
		clearmainNewsListContainer();
        renderMainNewsListDesctop(response.results);
	} catch (error) {
        Notiflix.Notify.failure('There are problems with your request.Please try again later.')
    }
}

function renderMainNewsListDesctop(results) {
	let markup = '';

	if (results.length >= 8) { 
  for (let i = 0; i < 8; i++) {
    markup += `<li class="list-news__item">
        
  <div class="news-card">
  <img
    class="news-card__image"
    src="${results[i].multimedia.length==0? DEFAULT_PHOTO : results[i].multimedia[2].url}" 
    alt="${results[i].multimedia.length==0? DEFAULT_CAPTION : results[i].multimedia[2].caption}"
    width="288"
    height="395"
  />
  <p class="news-card__category">${results[i].section}</p>
  <button type="button" class="js-to-fav">
  <p class="news-card__add-favorite">Add to favorite</p>
    <svg class="news-card__icon" width="16" height="16">
      <use href=${'/sprite.f14d31f7.svg#icon-heart-transparent'}></use>
    </svg>
  </button>
  <h3 class="news-card__title">
    ${results[i].title}
  </h3>
  <p class="news-card__text">
		${results[i].abstract}
  </p>
  <div class="news-card__details">
    <a class="news-card__date-link link" href="">${results[i].updated_date}</a>
    <a class="news-card__news-link link" href="${results[i].url}" target="_blank">Read more</a>
  </div>
</div>

</li>`;
    };
	}

	else {
		for (let result of results) {
		markup += `<li class="list-news__item">
        
  <div class="news-card">
  <img
    class="news-card__image"
    src="${result.multimedia.length==0? DEFAULT_PHOTO : result.multimedia[2].url}" 
    alt="${result.multimedia.length==0? DEFAULT_CAPTION : result.multimedia[2].caption}"
    width="288"
    height="395"
  />
  <p class="news-card__category">${result.section}</p>
  <button type="button" class="js-to-fav">
  <p class="news-card__add-favorite">Add to favorite</p>
    <svg class="news-card__icon" width="16" height="16">
      <use href=${'/sprite.f14d31f7.svg#icon-heart-transparent'}></use>
    </svg>
  </button>
  <h3 class="news-card__title">
    ${result.title}
  </h3>
  <p class="news-card__text">
		${result.abstract}
  </p>
  <div class="news-card__details">
    <a class="news-card__date-link link" href="">${result.updated_date}</a>
    <a class="news-card__news-link link" href="${result.url}" target="_blank">Read more</a>
  </div>
</div>

</li>`;
		}
}
    refs.mainNewsList.insertAdjacentHTML('beforeend', markup);
    return 
}

function clearmainNewsListContainer(){
	refs.mainNewsList.innerHTML = '';
	return
}