import { createRouter, createWebHistory } from 'vue-router'
import gameDetails from '../views/game.details.vue'
import homePage from '../views/home.page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/game/:gameId',
      name: 'game-details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: gameDetails
    }
  ]
})

export default router
