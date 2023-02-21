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

// Заготовка для пагінації

// function onLoadMore(e) {
//     e.preventDefault();
//     getResponse()
// }

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
        
  <div class="news-card" id="${results[i].asset_id}">
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
  <svg class="news-card__icon" viewBox="0 0 32 32" width="16" height="16">
      <path fill="none" stroke="#4440f7"
          d="M9.331 4c-3.681 0-6.667 2.955-6.667 6.6 0 2.943 1.167 9.927 12.651 16.987 0.206 0.125 0.442 0.191 0.683 0.191s0.477-0.066 0.683-0.191c11.484-7.060 12.651-14.044 12.651-16.987 0-3.645-2.985-6.6-6.667-6.6s-6.667 4-6.667 4-2.985-4-6.667-4z"></path>
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