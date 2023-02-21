import { getDatesPopular } from './news-popular-by-date';
import { getResponseForFilterByDatePopular } from './news-popular-by-date';
import NewsApiService from '../api/news-main-api';
import WeatherApiService from '../api/weater-service';
import Notiflix from 'notiflix';
import '../weather';
const DEFAULT_PHOTO =
  'https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png';
const DEFAULT_CAPTION = 'photo';
const dates = [];
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
    addData(response.results);
    filterData(response.results)
    renderMainNewsListDesctop(response.results, weather);
  } catch (error) {
    Notiflix.Notify.failure('Error, no popular response.');
  }
}

// додавання об'єкту відповіді до фільтру по даті
function filterData(results) {
  getResponseForFilterByDatePopular(results);
}

// додаваня дати для фільтру по даті
function addData(results) {
  for (let result of results) {
      dates.push(result.updated);
  }
  getDatesPopular(dates);
}

// рендер карток
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
  }

  refs.mainNewsList.insertAdjacentHTML('beforeend', markup);
  return;
}

function getDataToFormat() {
  const td = new Date().toDateString().split(' ');
  return `${td[0]}</br>${td[2]} ${td[1]} ${td[3]}`;
}

