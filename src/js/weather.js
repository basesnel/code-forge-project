// Import Class WeatherApiService:
import WeatherApiService from './api/weater-service';

// Object of Class WeatherApiService:
const weatherService = new WeatherApiService();

// Rendering default weather:
// toDefaultWeather();

// Button event for get and render weather:
// document.querySelector('#find-me').addEventListener('click', geoFindMe);
geoFindMe();
// Weather container:
// const weatherBlock = document.querySelector('.js-weather');

// It's function for get geolocation user's device
// and weather for current or default city:
function geoFindMe() {
  if (!navigator.geolocation) {
    console.warn('Your browser not support navigator.geolocation');
  } else {
    navigator.geolocation.getCurrentPosition(current, rejection);
  }
}

// It's function for get default weather-object for default position.
async function toDefaultWeather() {
  const weather = await weatherService.getDefaultWeather();

  weatherDetails(weather);
}

// It's function for get weather-object for current position.
async function current(position) {
  const latitude = position.coords.latitude.toFixed(2);
  const longitude = position.coords.longitude.toFixed(2);

  const weather = await weatherService.getCurrentWeather({
    latitude,
    longitude,
  });

  setTimeout(() => {
    weatherDetails(weather);
  }, 1500);
}

// It's function for get weather-object for other position
// if user reject geolocation.
async function rejection() {
  const position = await weatherService.getDefaultCoords();

  const weather = await weatherService.getCurrentWeather(position);

  setTimeout(() => {
    weatherDetails(weather);
  }, 1000);
}

// It's function for rendering block of weather:
function weatherDetails({ temp, icon, description, country, city }) {
  const weatherBlock = document.querySelector('.weather');

  const weatherMarkup = `
    <div class="weather__horisontal">
      <span class="weather__temp">${Math.floor(temp)}°</span>
      <div class="weather__vertical">
        <span class="weather__desc">${description}</span>
        <span class="weather__city">
          <svg class="weather__geo" width="17" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 25"><path d="M9.5.688a9.292 9.292 0 0 0-9.281 9.28 9.188 9.188 0 0 0 1.87 5.57s.253.333.294.38L9.5 24.314l7.12-8.398c.037-.045.291-.377.291-.377l.001-.003a9.185 9.185 0 0 0 1.87-5.566A9.292 9.292 0 0 0 9.5.688Zm0 12.656a3.375 3.375 0 1 1 0-6.751 3.375 3.375 0 0 1 0 6.75Z" fill="#fff"/></svg>
          ${city}
        </span>
      </div>
    </div>
    <div class="weather__imgwrap"><img src="https://openweathermap.org/img/wn/${icon}@4x.png"></div>
    <span class="weather__date">${getDataToFormat()}</span>
    <span class="weather__week">weather for week</span>`;

  weatherBlock.innerHTML = weatherMarkup;
}

function getDataToFormat() {
  const td = new Date().toDateString().split(' ');
  return `${td[0]}</br>${td[2]} ${td[1]} ${td[3]}`;
}
