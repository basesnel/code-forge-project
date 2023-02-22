import Notiflix from 'notiflix';
const DEFAULT_BASE_URL = 'https://static01.nyt.com/';
const DEFAULT_PHOTO = "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png";
const DEFAULT_CAPTION = "photo";
const refs = {
	mainNewsList: document.querySelector('.js-list-new'),
}

let results = null;
let datesString = [];
let selectedDate = null;

export function getResponseForFilterByDatePopular(response) {
    results = response;
}

export function getDatesPopular(requestDate) {

    for (let date of requestDate) {

    const dataNormal = new Date(date);
    let day = dataNormal.getDate();
    let month = dataNormal.getMonth() + 1;
    let year = dataNormal.getFullYear();
        
    const dateString = `${day}/${month}/${year}`
    datesString.push(dateString);
        
    }

}

export function getCalendarDatePopular(currentDate) {
    if (results) {
       filterByDate(currentDate); 
    }
}

function filterByDate(currentDate) {
    selectedDate = currentDate;
    clearmainNewsListContainer();
    renderMainNewsListDesctop();
}

function renderMainNewsListDesctop() {
  let markup = '';
  if (results.length > 8) {
      for (let i = 0; i < 8; i++) {
         
        if (datesString[i] === selectedDate) {
  
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
  <button type="button" class="js-to-fav add-fav-btn">
  Add to favorite
  </button>
  <svg class="news-card__icon" viewBox="0 0 32 32" width="16" height="16">
      <path fill="none" stroke="#4440f7"
          d="M9.331 4c-3.681 0-6.667 2.955-6.667 6.6 0 2.943 1.167 9.927 12.651 16.987 0.206 0.125 0.442 0.191 0.683 0.191s0.477-0.066 0.683-0.191c11.484-7.060 12.651-14.044 12.651-16.987 0-3.645-2.985-6.6-6.667-6.6s-6.667 4-6.667 4-2.985-4-6.667-4z"></path>
    </svg>
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
        };
    };

  }

  else {
      for (let i = 0; i = results.length; i++) {
          if (datesString[i] === selectedDate) {
              
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
    };
  };
    refs.mainNewsList.insertAdjacentHTML('beforeend', markup);
    if (markup = '') {
        Notiflix.Notify.info('Sorry, no matches for this request!')
    }
    return 
}

function clearmainNewsListContainer(){
	refs.mainNewsList.innerHTML = '';
	return
}
