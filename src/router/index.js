import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reg',
      name: 'regPage',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/main',
      name: 'MainPage',
      component: () => import('../views/MainPage.vue')
    },
  ]
})

export default router
