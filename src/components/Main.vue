<template>
    <main class="row">
        <div v-if="films.length === 0" class="no-search col-12">Nessun risultato trovato</div>
        <Film v-for="film in films" :key="film.id"
            :imgURL="imgNull(film)"
            :title="film.title || film.name"
            :originalTitle="film.original_title || film.original_name"
            :vote="film.vote_average"
            :language="film.original_language"
            class="col-6 col-md-3 col-lg-2 px-1"
        />
    </main>
</template>

<script>
import Film from './Film.vue'

export default {
    name: 'Main',
    components: {
        Film
    },

    props: {
        films: Array,
    },

    methods: {
        imgNull(film) {
            if (film.poster_path === null) {
                return require('../assets/back-netflix.jpeg');
            }

            return `https://image.tmdb.org/t/p/w500${film.poster_path}`;
        },

    }
}
</script>

<style lang="scss" scoped>

    main {
        height: calc(100vh - 50px);
        overflow: auto;

        .no-search {
            text-align: center;
            font-weight: bold;
            font-size: 34px;
            padding-top: 24px;
        }
    }
</style>