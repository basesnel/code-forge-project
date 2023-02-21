import { getDatesBySearch } from './news-by-search-by-date';
import { getResponseForFilterByDateBySearch } from './news-by-search-by-date';
import NewsApiService from '../api/news-main-api'
import Notiflix from 'notiflix';
const DEFAULT_BASE_URL = 'https://static01.nyt.com/';
const DEFAULT_PHOTO = "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png";
const DEFAULT_CAPTION = "photo";
const searchApiService = new NewsApiService();
const dates = [];
const refs = {
	openSearchBtn: document.getElementById('search-btn'),
	searchForm: document.getElementById('form-field'),
	mainNewsList: document.querySelector('.js-list-new'),
}

refs.openSearchBtn.addEventListener('click', onClickSearchBtn);

refs.searchForm.addEventListener('submit', onSearch);

function onClickSearchBtn(e) {
	refs.searchForm.classList.add('open');
}

function onSearch(e) {
	e.preventDefault();
  const inputValue = e.target.elements[0].value.trim().toLowerCase();
  const encoded = encodeURIComponent(inputValue);

	if (!encoded) {
    Notiflix.Notify.warning('Empty search! Please enter some criteria for search.')
    return
	}

	searchApiService.query = encoded;
  searchApiService.resetPage();
	getResponse()
}

// Заготовка для пагінації

// function onLoadMore(e) {
//     e.preventDefault();
//     getResponse()
// }

async function getResponse() {
    try {
        const response = await searchApiService.getNewsBySearch();
		      console.log(response);
          clearmainNewsListContainer();
          addData(response.response.docs);
          filterData(response.response.docs)
          renderMainNewsListDesctop(response.response.docs);
	} catch (error) {
        Notiflix.Notify.failure('There are problems with your request.Please try again later.')
    }
}

// додавання об'єкту відповіді до фільтру по даті
function filterData(docs) {
  getResponseForFilterByDateBySearch(docs);
}

// додаваня дати для фільтру по даті
function addData(docs) {
  for (let doc of docs) {
      dates.push(doc.pub_date);
  }
  getDatesBySearch(dates);
}

// рендер карток
function renderMainNewsListDesctop(docs) {
  let markup = '';
 
  if (docs.length >= 8) {
    for (let i = 0; i < 8; i++) {
      markup += `<li class="list-news__item">
        
  <div class="news-card">
  <img
    class="news-card__image"
    src="${docs[i].multimedia.length == 0 ? DEFAULT_PHOTO : DEFAULT_BASE_URL + docs[i].multimedia[0].url}"
    alt="${docs[i].multimedia.length == 0 ? DEFAULT_CAPTION : docs[i].keywords[0].value}"
    width="288"
    height="395"
  />
  <p class="news-card__category">${docs[i].section_name}</p>
  <button type="button" class="js-to-fav">
  <p class="news-card__add-favorite">Add to favorite</p>
    <svg class="news-card__icon" width="16" height="16">
      <use href=${'/sprite.f14d31f7.svg#icon-heart-transparent'}></use>
    </svg>
  </button>
  <h3 class="news-card__title">
    ${docs[i].headline.main}
  </h3>
  <p class="news-card__text">
		${docs[i].abstract}
  </p>
  <div class="news-card__details">
    <a class="news-card__date-link link" href="">${docs[i].pub_date}</a>
    <a class="news-card__news-link link" href="${docs[i].web_url}">Read more</a>
  </div>
</div>

</li>`;
    };

  }

  else {
    for (let doc of docs) {
      markup += `<li class="list-news__item">
        
  <div class="news-card">
  <img
    class="news-card__image"
    src="${doc.multimedia.length == 0 ? DEFAULT_PHOTO : DEFAULT_BASE_URL + doc.multimedia[0].url}"
    alt="${doc.multimedia.length == 0 ? DEFAULT_CAPTION : doc.keywords[0].value}"
    width="288"
    height="395"
  />
  <p class="news-card__category">${doc.section_name}</p>
  <button type="button" class="js-to-fav">
  <p class="news-card__add-favorite">Add to favorite</p>
    <svg class="news-card__icon" width="16" height="16">
      <use href=${'/sprite.f14d31f7.svg#icon-heart-transparent'}></use>
    </svg>
  </button>
  <h3 class="news-card__title">
    ${doc.headline}
  </h3>
  <p class="news-card__text">
		${doc.abstract}
  </p>
  <div class="news-card__details">
    <a class="news-card__date-link link" href="">${doc.pub_date}</a>
    <a class="news-card__news-link link" href="${doc.web_url}">Read more</a>
  </div>
</div>

</li>`
    };
  };
    refs.mainNewsList.insertAdjacentHTML('beforeend', markup);
    return 
}

function clearmainNewsListContainer(){
	refs.mainNewsList.innerHTML = '';
	return
}