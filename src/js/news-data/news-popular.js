import NewsApiService from '../api/main-api'
import Notiflix from 'notiflix';
const popularApiService = new NewsApiService();

const refs = {
	mainNewsList: document.querySelector('.js-list-new'),
}

getResponse();

async function getResponse() {
    try {
		const response = await popularApiService.getNewsPopular();
		// console.log(response);
        renderMainNewsListDesctop(response.results);
	} catch (error) {
        Notiflix.Notify.failure('There are problems with your request.Please try again later.')
    }
    }

function renderMainNewsListDesctop(results) {
    let markup = '';
  for (let i = 0; i < 8; i++) {
    markup += `<li class="list-news__item">
        
  <div class="news-card">
  <img
    class="news-card__image"
    src="./images/1-asia-businesswoman-mob.jpg"
    alt="asia-businesswoman"
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
    <a class="news-card__date-link link" href="">${results[i].updated}</a>
    <a class="news-card__news-link link" href="${results[i].url}">Read more</a>
  </div>
</div>

</li>
            `;
    };
    refs.mainNewsList.insertAdjacentHTML('beforeend', markup);
    return 
}