<template>
  <div id="app" class="container-fluid">

    <Header :navList="navList" 
      @search="searchFilm" 
      @clickMenu="changeView"
    />
    <Main :films="filteredFilms" 
      :filmsFound="filmsFound"
      :seriesFound="seriesFound"
      :flagSearch="flagSearch"
    />

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },

  created() {

    this.apiList.forEach((string) => {
      axios.get(this.apiURL(string))
      .then((res) => {
        this.apiAction(string, res);
      })
    })

    axios.get(this.apiURL('/discover/tv', 'with_networks', '213'))
      .then((res) => {
        this.original = res.data.results;
        console.log(this.original);
      })
  },

  data() {
    return {
      popularFilms: [],
      filteredFilms: [],
      popularSeries: [],
      original: [],
      homeList: [],
      recently: [],
      seriesFound: [],
      filmsFound: [],
      flagSearch: false,
      myFilms: [
        {
          title: 'Aggiungi Contenuti',
          original_title: 'Aggiungi i tuoi film e Serie preferiti',
          vote_average: 0,
          original_language: 'it',
          poster_path: null
        }
      ],
      apiList: [
        '/list/7102094',
        '/movie/popular',
        '/tv/popular',
        '/tv/airing_today'
      ],
      navList: [
        {
          id: 0,
          text: 'Home',
          value: 'home'
        },
        {
          id: 1,
          text: 'Serie Tv',
          value: 'serie'
        },
        {
          id: 2,
          text: 'Film',
          value: 'film'
        },
        {
          id: 3,
          text: 'Originali',
          value: 'original'
        },
        {
          id: 4,
          text: 'Aggiunti di recente',
          value: 'add'
        },
        {
          id: 5,
          text: 'La mia lista',
          value: 'my'
        }
      ]
    } 
  },

  methods: {

    // funzione per resettare gli array dei film e serie trovati
    resetFound() {

      if (this.filmsFound.length > 0 || this.seriesFound.length > 0) {
        
        this.filmsFound = [];
        this.seriesFound = [];

      }

    },

    // funzione per attivare il flagSearch => ricerca effettuata
    getFlagSearch(array) {
      if (array.length === 0) {
        this.flagSearch = true;

      } else {
        this.flagSearch = false;
      }
    },

    // funzione per effettuare la ricerca sulle api
    searchFilm(inputSearch) {

      // se l'input è vuoto resetto la pagina
      if (inputSearch.trim().length === 0) {

        this.filteredFilms = this.homeList;
        this.flagSearch= false;
        this.resetFound();

      // altrimenti effettuo le chiamate API per popolare gli array
      } else {

        axios.get(this.apiURL('/search/movie', 'query', inputSearch)).then((res) => {

          this.filmsFound = res.data.results;
          this.getFlagSearch(this.filmsFound);

        })

        axios.get(this.apiURL('/search/tv', 'query', inputSearch)).then((res) => {

          this.seriesFound = res.data.results;
          this.getFlagSearch(this.seriesFound);

        })
      }
    },

    // metodi per dinamicizzare API
    apiURL(string, key, input) {
      if (typeof input === 'undefined' || typeof key === 'undefined') {
        return `https://api.themoviedb.org/3${string}?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b`
      } else {
        return `https://api.themoviedb.org/3${string}?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b&${key}=${input}`
      }
    },

    apiAction(string, res) {
      switch (string) {
        case this.apiList[0]:
          this.homeList = res.data.items;
          this.filteredFilms = this.homeList;
          break;

        case this.apiList[1]:
          this.popularFilms = res.data.results;
          break;

        case this.apiList[2]:
          this.popularSeries = res.data.results;
          break;

        case this.apiList[3]:
          this.recently = res.data.results;
          break;
      }
    },
    // ---------------------------------------------------------------------

    // switch per menu generi
    changeView(value) {
      console.log(value);

      switch (value) {
        case 'home':
          this.resetFound()
          this.filteredFilms = this.homeList;
          break;

        case 'serie':
          this.resetFound()
          this.filteredFilms = this.popularSeries;
          break;

        case 'film':
          this.resetFound()
          this.filteredFilms = this.popularFilms;
          break;

        case 'original':
          this.resetFound()
          this.filteredFilms = this.original;
          break;

        case 'add':
          this.resetFound()
          this.filteredFilms = this.recently;
          break;

        case 'my':
          this.resetFound()
          this.filteredFilms = this.myFilms;
          break;
      }
    }
  }
}
</script>

<style lang="scss">
@import './style/app.scss';
</style>
