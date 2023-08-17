import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { ROUTES } from '@/helpers/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: ROUTES.ABOUT,
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: ROUTES.SERVICES,
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: ROUTES.CONTACT,
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: ROUTES.HOME
    }
  ]
})

export default router
