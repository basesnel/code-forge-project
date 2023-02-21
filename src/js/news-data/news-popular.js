import NewsApiService from '../api/news-main-api'
import Notiflix from 'notiflix';
import '../weather';
const DEFAULT_PHOTO = "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png";
const DEFAULT_CAPTION = "photo";

const popularApiService = new NewsApiService();

const refs = {
  mainNewsList: document.querySelector('.js-list-new'),
  weather:document.querySelector('.js-weather'),
}

getResponse();

async function getResponse() {
    try {
		const response = await popularApiService.getNewsPopular();
		    console.log(response);
        renderMainNewsListDesctop(response.results);
	} catch (error) {
        Notiflix.Notify.failure('Error, no popular response.')
    }
}
    

function renderMainNewsListDesctop(results) {
    let markup = '';
  for (let i = 0; i < 8; i++) {
    markup += `<li class="list-news__item">
        
  <div class="news-card">
  <img
    class="news-card__image"
    src="${results[i].media.length==0? DEFAULT_PHOTO : results[i].media[0]['media-metadata'][2].url}" 
    alt="${results[i].media.length==0? DEFAULT_CAPTION : results[i].media[0].caption}"
    width="288"
    height="395"
  />
  <p class="news-card__category">${results[i].section}</p>
  <button type="button" class="js-to-fav">
  <p class="news-card__add-favorite">Add to favorite</p>
  <svg class="news-card__icon" width="16" height="16">
      <use href=${'./sprite.f14d31f7.svg#icon-heart-transparent'}></use>
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
    <a class="news-card__news-link link" href="${results[i].url}" target="_blank">Read more</a>
  </div>
</div>

</li>`;
    // if (i == 2) {
    //   let weather = `
    //   `
    // }
    };
    refs.mainNewsList.insertAdjacentHTML('beforeend', markup);
    return 
}