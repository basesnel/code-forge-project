import Notiflix from 'notiflix';
import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/';
const KEY = 'lnZjefSwoIfoW3e6oGrlDKzWOhIXoZMK';

export default class NewsApiService {
    constructor(newsPerPage) { 
        this.searchQuery = '';
        this.searchCategory = '';
        this.page = 1;
        this.newsPerPage = newsPerPage;
    }
    
    async createRequest(urlPath) {
        try {
            const response = await axios.get(`${BASE_URL}${urlPath}api-key=${KEY}`);
            this.incrementPage()
            return response.data;
        } catch (error) {
            console.log(error);
            Notiflix.Notify.failure('There are problems with your request. Please try again later.');
        }
    }

    async getNewsByCategory() {
        return this.createRequest(`news/v3/content/inyt/${this.searchCategory}.json`)
    }

    async getNewsBySearch() {
        return this.createRequest(`search/v2/articlesearch.json?q=${this.searchQuery}&`)
    }

    async getNewsCategoryList() {
        return this.createRequest(`news/v3/content/section-list.json?`)
    }

    async getNewsPopular() {
        return this.createRequest(`mostpopular/v2/viewed/1.json?`)
    }

    
    incrementPage() {
        this.page += 1;
        return
    }

    resetPage() {
        this.page = 1;
    }

get query(){
    return this.query;
}
set query(newQuery){
this.searchQuery=newQuery;
}
}