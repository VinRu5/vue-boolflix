<template>
  <div id="app" class="container-fluid">

    <Header :navList="navList" 
      :inputSearch="searchString" 
      @search="searchFilm" 
      @clickMenu="changeView"
    />
    <Main :films="filteredFilms" />

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
      axios.get(this.apiString(string))
      .then((res) => {
        this.apiAction(string, res);
      })
    })
  },

  computed: {
    
    
  },

  data() {
    return {
      popularFilms: [],
      filteredFilms: [],
      popularSeries: [],
      homeList: [],
      recently: [],
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
        this.filteredFilms = this.popularFilms;
      } else {
        axios.get(this.apiRequest(inputSearch)).then((res) => {
          this.filteredFilms = res.data.results;

        })
      }

      // inputSearch = '';
      // TODO: da sistemare
    },

    apiRequest(input) {
      let searchSplit = input.toLowerCase().split(' ');
      let stringToFind = '';
      console.log(this.searchString.split(' '))

      searchSplit.forEach((string, index) => {
        if (index === 0) {
          stringToFind = string
        } else {
          stringToFind += `+${string}`;
        }

      })

      return `https://api.themoviedb.org/3/search/multi?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b&query=${stringToFind}`;
    },

    apiString(string) {
      return `https://api.themoviedb.org/3${string}?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b`
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
          this.filteredFilms = this.homeList;
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
.pr {
  width: 14px;
  img {
    width: 100%;
  }
}
</style>
