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
  <div class="news-card" id="${results[i].asset_id}">
  <span class="read-card-text visually-hidden">Already read<svg width="18" heigth="18" viewBox="0 0 32 32">
			<path fill="#00dd73" style="fill: var(--color1, #00dd73)"
				d="M28.78 6.39c-0.277 0.008-0.54 0.124-0.733 0.323l-16.313 16.313-6.713-6.713c-0.098-0.102-0.216-0.184-0.346-0.24s-0.27-0.086-0.412-0.088c-0.142-0.001-0.283 0.025-0.414 0.079s-0.251 0.133-0.351 0.233c-0.1 0.1-0.18 0.22-0.233 0.351s-0.081 0.272-0.079 0.414c0.001 0.142 0.031 0.282 0.087 0.412s0.138 0.248 0.24 0.346l7.467 7.467c0.2 0.2 0.471 0.312 0.754 0.312s0.554-0.112 0.754-0.312l17.067-17.067c0.154-0.15 0.259-0.343 0.302-0.553s0.021-0.429-0.063-0.627c-0.084-0.198-0.225-0.366-0.406-0.482s-0.393-0.175-0.607-0.168z">
			</path>>></svg></span>
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