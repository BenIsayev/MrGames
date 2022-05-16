<template>
    <section class="home-page">
        <game-list v-if="games && genres" :games="games" :genres="genres" />
    </section>
</template>

<script>
import { gameService } from '../services/game.service.js'
import gameList from '../components/game.list.vue'

export default {
    // props: [''],
    components: {
        gameList,
    },
    async created() {
        const games = await gameService.query()
        games.forEach(game => {
            if (!this.genres.includes(game.genre)) this.genres.push(game.genre)
        })
        this.games = games
    },
    data() {
        return {
            games: [],
            genres: [],
        }
    },
    methods: {},
    computed: {},
    unmounted() { },
}
</script>