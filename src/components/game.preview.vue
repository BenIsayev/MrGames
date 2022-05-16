<template>
    <router-link :to="'/game/' + game.id">
        <li class="game-preview">
            <img :src="game.thumbnail" alt="">
            <span>
                {{ game.title }}
            </span>
        </li>
    </router-link>
</template>

<script>

export default {
    props: {
        game: Object,
    },
    components: {},
    created() { },
    data() {
        return {}
    },
    methods: {
    },
    computed: {},
    unmounted() { },
}
</script>