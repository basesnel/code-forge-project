import Notiflix from 'notiflix';
const DEFAULT_BASE_URL = 'https://static01.nyt.com/';
const DEFAULT_PHOTO = "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png";
const DEFAULT_CAPTION = "photo";
const refs = {
	mainNewsList: document.querySelector('.js-list-new'),
}

let docs = null;
let datesString = [];
let selectedDate = null;

export function getResponseForFilterByDateBySearch(response) {
    docs = response;
}

export function getDatesBySearch(requestDate) {

    for (let date of requestDate) {

    const dataNormal = new Date(date);
    day = dataNormal.getDate();
    month = dataNormal.getMonth() + 1;
    year = dataNormal.getFullYear();
        
    const dateString = `${day}/${month}/${year}`
    datesString.push(dateString);
        
  }
  
}

export function getCalendarDateBySearch(currentDate) {
  if (docs) {
      console.log()
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
  console.log(datesString, selectedDate);
  if (docs.length > 8) {
      for (let i = 0; i < 8; i++) {
         
        if (datesString[i] === selectedDate) {
            
      markup += `<li class="list-news__item">
        
  <div class="news-card" id="${docs[i].asset_id}">
  <img
    class="news-card__image"
    src="${docs[i].multimedia.length == 0 ? DEFAULT_PHOTO : DEFAULT_BASE_URL + docs[i].multimedia[0].url}"
    alt="${docs[i].multimedia.length == 0 ? DEFAULT_CAPTION : docs[i].keywords[0].value}"
    width="288"
    height="395"
  />
  <p class="news-card__category">${docs[i].section_name}</p>
  <button type="button" class="js-to-fav add-fav-btn">
  <p class="news-card__add-favorite">Add to favorite</p>
    <svg class="news-card__icon" viewBox="0 0 32 32" width="16" height="16">
      <path fill="none" stroke="#4440f7"
          d="M9.331 4c-3.681 0-6.667 2.955-6.667 6.6 0 2.943 1.167 9.927 12.651 16.987 0.206 0.125 0.442 0.191 0.683 0.191s0.477-0.066 0.683-0.191c11.484-7.060 12.651-14.044 12.651-16.987 0-3.645-2.985-6.6-6.667-6.6s-6.667 4-6.667 4-2.985-4-6.667-4z"></path>
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
    };
  }

  else {
      for (let i = 0; i = docs.length; i++) {
        if (datesString[i] === selectedDate) {
            
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