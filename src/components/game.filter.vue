<template>
    <section class="game-filter">
        <div>
            <label for="title-input">Title: </label>
            <input type="text" v-model="term.title" @input="setFilter" id="title-input">
        </div>
        <div>

            <label for="genre-select">By Genre:</label>
            <select v-model="term.genre" @change="setFilter" id="genre-select">
                <option value="all">All</option>
                <option v-for="genre in genres" :value="genre">{{ genre }}</option>
            </select>
        </div>
    </section>
</template>

<script>

export default {
    props: {
        genres: Array
    },
    components: {},
    created() { },
    data() {
        return {
            term: {
                title: '',
                genre: 'all',
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filter-set', this.term)
        }
    },
    computed: {},
    unmounted() { },
}
</script>