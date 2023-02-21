import NewsApiService from '../api/news-main-api';
import WeatherApiService from '../api/weater-service';
import Notiflix from 'notiflix';
import '../weather';
const DEFAULT_PHOTO =
  'https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png';
const DEFAULT_CAPTION = 'photo';

const popularApiService = new NewsApiService();

// Object of Class WeatherApiService:
const weatherService = new WeatherApiService();

const refs = {
  mainNewsList: document.querySelector('.js-list-new'),
  weather: document.querySelector('.js-weather'),
};

let weatherPosition = 2;

getResponse();

// Заготовка для пагінації

// function onLoadMore(e) {
//     e.preventDefault();
//     getResponse()
// }

async function getResponse() {
  try {
    const response = await popularApiService.getNewsPopular();
    const weather = await weatherService.getDefaultWeather();
    console.log(response);
    renderMainNewsListDesctop(response.results, weather);
  } catch (error) {
    Notiflix.Notify.failure('Error, no popular response.');
  }
}

function renderMainNewsListDesctop(
  results,
  { temp, icon, description, country, city }
) {
  let markup = '';

  const weatherMarkup = `
  <div class="weather">
    <div class="weather__horisontal">
      <span class="weather__temp">${Math.floor(temp)}°</span>
      <div class="weather__vertical">
        <span class="weather__desc">${description}</span>
        <span class="weather__city">
          <svg width="17" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 25"><path d="M9.5.688a9.292 9.292 0 0 0-9.281 9.28 9.188 9.188 0 0 0 1.87 5.57s.253.333.294.38L9.5 24.314l7.12-8.398c.037-.045.291-.377.291-.377l.001-.003a9.185 9.185 0 0 0 1.87-5.566A9.292 9.292 0 0 0 9.5.688Zm0 12.656a3.375 3.375 0 1 1 0-6.751 3.375 3.375 0 0 1 0 6.75Z" fill="#fff"/></svg>
          ${city}
        </span>
      </div>
    </div>
    <div class="weather__imgwrap"><img src="https://openweathermap.org/img/wn/${icon}@4x.png"></div>
    <span class="weather__date">${getDataToFormat()}</span>
    <a
    href="https://sinoptik.ua/"
    class="weather__link"
    target="_blank"
    rel="noreferrer noopener"
    >weather for week</a>
  </div>`;

  for (let i = 0; i < 8; i++) {
    if (i === weatherPosition) {
      markup += weatherMarkup;
    } else {
      markup += `<li class="list-news__item">

  <div class="news-card">
  <span class="read-card-text visually-hidden">Already read<svg width="18" heigth="18" viewBox="0 0 32 32">
			<path fill="#00dd73" style="fill: var(--color1, #00dd73)"
				d="M28.78 6.39c-0.277 0.008-0.54 0.124-0.733 0.323l-16.313 16.313-6.713-6.713c-0.098-0.102-0.216-0.184-0.346-0.24s-0.27-0.086-0.412-0.088c-0.142-0.001-0.283 0.025-0.414 0.079s-0.251 0.133-0.351 0.233c-0.1 0.1-0.18 0.22-0.233 0.351s-0.081 0.272-0.079 0.414c0.001 0.142 0.031 0.282 0.087 0.412s0.138 0.248 0.24 0.346l7.467 7.467c0.2 0.2 0.471 0.312 0.754 0.312s0.554-0.112 0.754-0.312l17.067-17.067c0.154-0.15 0.259-0.343 0.302-0.553s0.021-0.429-0.063-0.627c-0.084-0.198-0.225-0.366-0.406-0.482s-0.393-0.175-0.607-0.168z">
			</path>>></svg></span>
  <img
    class="news-card__image"
    src="${
      results[i].media.length == 0
        ? DEFAULT_PHOTO
        : results[i].media[0]['media-metadata'][2].url
    }"
    alt="${
      results[i].media.length == 0
        ? DEFAULT_CAPTION
        : results[i].media[0].caption
    }"
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
    <a class="news-card__news-link link" href="${
      results[i].url
    }" target="_blank">Read more</a>
  </div>
</div>

</li>`;
    }
    // if (i == 2) {
    //   let weather = `
    //   `
    // }
  }

  refs.mainNewsList.insertAdjacentHTML('beforeend', markup);
  return;
}

function getDataToFormat() {
  const td = new Date().toDateString().split(' ');
  return `${td[0]}</br>${td[2]} ${td[1]} ${td[3]}`;
}

