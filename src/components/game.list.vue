<template>
    <section>
        <game-filter :genres="genres" @filter-set="setFilter" />
        <ul class="game-list">
            <game-preview v-for="game in pagedGames" :game="game" />
        </ul>
        <div class="paging">
            <button @click="setPage(-1)" class="btn prev"><img src="../assets/img/right-arrow.png" alt="prev"></button>
            <span class="curr-page">{{ currPage }}</span>
            <button @click="setPage(1)" class="btn next"><img src="../assets/img/right-arrow.png" alt="next"></button>
        </div>

    </section>
</template>

<script>
import gamePreview from './game.preview.vue'
import GameFilter from './game.filter.vue'

export default {
    props: {
        games: Array,
        genres: Array,
    },
    components: {
        gamePreview,
        GameFilter
    },
    created() {
    },
    data() {
        return {
            searchFilter: {
                title: '',
                genre: 'all'
            },
            pageSize: 20,
            currPage: 1,
            lastPage: 0,
        }
    },
    methods: {
        setFilter(term) {
            this.searchFilter = term
            this.lastPage = Math.ceil(this.filteredGames.length / this.pageSize)
        },
        setPage(dir) {
            const lastPage = Math.ceil(this.filteredGames.length / this.pageSize)
            this.lastPage = lastPage
            if (this.currPage === lastPage && dir === 1) {
                this.currPage = 1
                return
            }
            if (this.currPage === 1 && dir === -1) {
                this.currPage = lastPage
                return
            }
            else this.currPage += dir
        }
    },
    computed: {
        filteredGames() {
            if (!this.games) return
            return this.games.filter(game => {
                return (this.searchFilter.genre === 'all') ? game.title.toLowerCase().includes(this.searchFilter.title.toLowerCase())
                    :
                    game.title.toLowerCase().includes(this.searchFilter.title.toLowerCase()) && game.genre === this.searchFilter.genre
            })
        },
        pagedGames() {
            return this.filteredGames.slice((this.currPage * this.currPage - 1), (this.currPage * this.currPage - 1 + this.pageSize))
        }
    },
    unmounted() { },
    watch: {
        'lastPage': {
            handler() {
                if (this.lastPage < this.currPage) this.currPage = this.lastPage
            }

        }
    }
}
</script>