// Axios module
const axios = require('axios').default;

export default class WeatherApiService {
  // constructor of WeatherApiService
  constructor() {
    this.urlData = 'https://api.openweathermap.org/data/2.5/weather';
    this.city = 'Kyiv';
    this.units = 'metric';
    this.appid = 'a211ca9158436d36e926661734874345';
    this.lang = 'en';
    this.urlGeo = 'http://api.openweathermap.org/geo/1.0/direct';
    this.limit = '5';
  }

  // Get weather for user's device position;
  // Method return object weather.
  async getCurrentWeather(position) {
    const latitude = position.latitude;
    const longitude = position.longitude;

    try {
      const response = await axios.get(this.urlData, {
        params: {
          lat: latitude,
          lon: longitude,
          units: this.units,
          lang: this.lang,
          appid: this.appid,
        },
      });

      if (response.status !== 200) {
        throw new Error(response.status);
      }
      const data = response.data;
      const weather = {
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        country: data.sys.country,
        city: data.name,
      };
      return weather;
    } catch (error) {
      console.warn(error.meessage);
    }
  }

  // Get weather for default position;
  // Method return object weather.
  async getDefaultWeather() {
    try {
      const response = await axios.get(this.urlData, {
        params: {
          q: this.city,
          units: this.units,
          lang: this.lang,
          appid: this.appid,
        },
      });

      if (response.status !== 200) {
        throw new Error(response.status);
      }
      const data = response.data;
      const weather = {
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        country: data.sys.country,
        city: data.name,
      };
      return weather;
    } catch (error) {
      console.warn(error);
    }
  }

  // Get coords of default position;
  // Method return object {lat, lon}.
  async getDefaultCoords() {
    const response = await axios.get(this.urlGeo, {
      params: {
        q: this.city,
        limit: this.limit,
        appid: this.appid,
      },
    });
    if (response.status !== 200) {
      throw new Error(response.status);
    }

    const coords = {
      latitude: response.data[0].lat,
      longitude: response.data[0].lon,
    };

    return coords;
  }
  catch(error) {
    console.warn(error);
  }
}