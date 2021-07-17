<template>
  <div id="app" class="container-fluid">

    <Header :navList="navList" @search="searchFilm" />
    <Main :films="filteredFilm" />
    {{ apiRequest }}

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
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b&query=ritorno+al+futuro')
      .then((res) => {
        this.films = res.data.results;
      })
  },

  computed: {
    filteredFilm() {
      return this.films.filter((film) => {
        return film.title.includes(this.searchString);
      })
    },
    apiRequest() {
      let searchSplit = this.searchString.toLowerCase().split(' ');
      let stringToFind = '';
      console.log(this.searchString.split(' '))

      searchSplit.forEach((string, index) => {
        if (index === 0) {
          stringToFind = string
        } else {
          stringToFind += `+${string}`;
        }

      })

      console.log(`https://api.themoviedb.org/3/search/movie?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b&query=${stringToFind}`)
      return `https://api.themoviedb.org/3/search/movie?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b&query=${stringToFind}`;
    }
  },

  data() {
    return {
      films: [],
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
      this.searchString = inputSearch;
      // axios.get(this.apiRequest).then((res) => {
      //   res.data.results.forEach((result) => {
      //     this.films.push(result);
      //   })

      //   console.log(this.films);
      // })
      // TODO: da sistemare
    }
  }
}
</script>

<style lang="scss">
@import './style/app.scss';
</style>
