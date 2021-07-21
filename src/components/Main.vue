<template>
    <main class="row">
        <!-- div per avvisare che la ricerca non ha prodotto risultato -->
        <div v-if="flagSearch" class="no-search col-12">
            <div>Nessun risultato trovato</div>
            <div>Potresti guardare...</div>
        </div>
        <!-- film e seria da mostrare quando NON si è effettuata la ricerca -->
        <div v-if="filmsFound.length === 0 && seriesFound.length === 0" class="col-12">
            <div class="row">
                <Film v-for="film in films" :key="film.id"
                    :imgURL="imgNull(film)"
                    :title="film.title || film.name"
                    :originalTitle="film.original_title || film.original_name"
                    :vote="film.vote_average"
                    :language="film.original_language"
                    :dateArrival="film.release_date || film.first_air_date"
                    class="col-6 col-md-3 col-lg-2 px-1"
                />
            </div>
        </div>
        <!-- film e seria da mostrare quando si è effettuata la ricerca -->
        <div v-else class="col-12">
            <div class="row">
                <div class="title-section col-12">Film</div>
                <Film v-for="film in filmsFound" :key="film.id"
                    :imgURL="imgNull(film)"
                    :title="film.title || film.name"
                    :originalTitle="film.original_title || film.original_name"
                    :vote="film.vote_average"
                    :language="film.original_language"
                    :dateArrival="film.release_date || film.first_air_date"
                    class="col-6 col-md-3 col-lg-2 px-1"
                />
            </div>
            <div class="row">
                <div class="title-section col-12">Serie TV</div>
                <Film v-for="film in seriesFound" :key="film.id"
                    :imgURL="imgNull(film)"
                    :title="film.title || film.name"
                    :originalTitle="film.original_title || film.original_name"
                    :vote="film.vote_average"
                    :language="film.original_language"
                    :dateArrival="film.release_date || film.first_air_date"
                    class="col-6 col-md-3 col-lg-2 px-1"
                />
            </div>
        </div>
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
        filmsFound: Array,
        seriesFound: Array,
        flagSearch: Boolean
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

        .title-section {
            font-size: 24px;
            font-weight: bold;
        }
    }
</style>