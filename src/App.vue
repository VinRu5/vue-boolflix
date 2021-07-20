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

  computed: {
    
    
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
      searchString: '',
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
    searchFilm(inputSearch) {

      if (inputSearch.trim().length === 0) {

        this.filteredFilms = this.homeList;
        this.flagSeriesFound = false;
        this.flagSearch= false;
        this.filmsFound = [];
        this.seriesFound = [];
      } else {
        axios.get(this.apiURL('/search/movie', 'query', inputSearch)).then((res) => {
          this.filmsFound = res.data.results;

          if (this.filmsFound.length === 0) {
            this.flagSearch = true;
            console.log('entro');
          } else {
            this.flagSearch = false;
          }

        })

        axios.get(this.apiURL('/search/tv', 'query', inputSearch)).then((res) => {
          this.seriesFound = res.data.results;
          // if (this.seriesFound.length > 0) {
          //   this.flagSeriesFound = true;
          // }

        })
      }

      // inputSearch = '';
      // TODO: da sistemare
    },

    // viewSearchBar() {

    // },

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

    changeView(value) {
      console.log(value);

      switch (value) {
        case 'home':
          this.filteredFilms = this.homeList;
          break;

        case 'serie':
          this.filteredFilms = this.popularSeries;
          break;

        case 'film':
          this.filteredFilms = this.popularFilms;
          break;

        case 'original':
          this.filteredFilms = this.original;
          break;

        case 'add':
          this.filteredFilms = this.recently;
          break;

        case 'my':
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
