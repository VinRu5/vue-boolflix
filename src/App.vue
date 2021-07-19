<template>
  <div id="app" class="container-fluid">

    <Header :navList="navList" @search="searchFilm" />
    <Main :films="filteredFilms" />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },

  created() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b')
      .then((res) => {
        this.popularFilms = res.data.results;
        this.filteredFilms = this.popularFilms

      })
  },

  computed: {
    
    
  },

  data() {
    return {
      popularFilms: [],
      filteredFilms: [],
      searchString: '',
      navList: [
        {
          id: 0,
          text: 'Home',
          visible: false
        },
        {
          id: 1,
          text: 'Serie Tv',
          visible: false
        },
        {
          id: 2,
          text: 'Film',
          visible: false
        },
        {
          id: 3,
          text: 'Originali',
          visible: false
        },
        {
          id: 4,
          text: 'Aggiunti di recente',
          visible: false
        },
        {
          id: 5,
          text: 'La mia lista',
          visible: false
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
  
          console.log(this.films);
        })
      }

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
