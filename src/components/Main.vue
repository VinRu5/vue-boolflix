<template>
    <main class="row">
        <Film v-for="film in films" :key="film.id"
            :imgURL="film.poster_path"
            :title="film.title"
            :originalTitle="film.original_title"
            :vote="film.vote_average"
            :language="film.original_language"
            class="col-2"
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
    }
}
</script>

<style lang="scss" scoped>

</style>