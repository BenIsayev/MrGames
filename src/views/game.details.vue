<template>
    <section v-if="game.title" class="game-details">
        <router-link to="/" class="btn back-btn">Back</router-link>
        <h1>{{ game.title }}</h1>
        <span>Developed by: {{ game.developer }}</span>

        <span>Published by: {{ game.publisher }}</span>

        <span>Genre: {{ game.genre }}</span>
        <span class="description">
            <div>
                <h4>{{ game.short_description }}</h4>
                <span class="read-more" @click="toggleRead"> {{ read }}</span>
            </div>
            <span v-if="descDisplayed" class="full-desc">{{ game.description }}</span>
        </span>

        <div v-for="img in game.screenshots">
            <img :src="img.image" alt="">
        </div>
    </section>
    <section v-else class="game-details">
        Loading game
    </section>
</template>

<script>
import { gameService } from '../services/game.service'

export default {
    components: {
    },
    async created() {
        const id = this.$route.params.gameId
        const game = await gameService.getGameById(id)
        console.log(game);
        this.game = game
    },
    data() {
        return {
            game: {},
            descDisplayed: false,
        }
    },
    methods: {
        toggleRead() {
            this.descDisplayed = !this.descDisplayed
        }
    },
    computed: {
        read() {
            return this.descDisplayed ? 'read less...' : 'read more...'
        }
    },
    unmounted() { },
}
</script>