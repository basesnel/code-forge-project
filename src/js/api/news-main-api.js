import Notiflix from 'notiflix';
import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/';
const KEY = 'api-key=lnZjefSwoIfoW3e6oGrlDKzWOhIXoZMK';

export default class NewsApiService {
    constructor(newsPerPage) { 
        this.searchQuery = '';
        this.searchCategory = '';
        this.page = 1;
        this.newsPerPage = newsPerPage;
        this.searchDate = '';
    }
    
    async createRequest(urlPath) {
        try {
            const response = await axios.get(`${BASE_URL}${urlPath}`);
            this.incrementPage()
            return response.data;
        } catch (error) {
            console.log(error);
            Notiflix.Notify.failure('There are problems with your request. Please try again later.');
        }
    }

    async getNewsByCategory() {
        return this.createRequest(`news/v3/content/inyt/${this.searchCategory}.json?${KEY}&limit=26`)
    }

    async getNewsBySearch() {
        return this.createRequest(`search/v2/articlesearch.json?q=${this.searchQuery}&${KEY}&page=${this.page}${this.searchDate}`)
    }

    async getNewsCategoryList() {
        return this.createRequest(`news/v3/content/section-list.json?${KEY}`)
    }

    async getNewsPopular() {
        return this.createRequest(`mostpopular/v2/viewed/1.json?${KEY}`)
    }

    
    incrementPage() {
        this.page += 1;
        return
    }

    resetPage() {
        this.page = 0;
    }

get query(){
    return this.query;
}
set query(newQuery){
this.searchQuery=newQuery;
    }

get date(){
    return this.date;
}
set date(newDate){
this.searchDate=newDate;
    }    

get category(){
    return this.category;
}
set category(newCategory){
this.searchCategory=newCategory;
}
}