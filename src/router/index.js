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
      path: '/cvcristian',
      name: 'cvcristian',
      component: () => import('../views/CvCristian.vue'),
    },
    {
      path: '/cvjuan',
      name: 'cvjuan',
      component: () => import('../views/CvCristian.vue'),

      
    },
    {
      path: '/cvalexander',
      name: 'cvalexander',
      component: () => import('../views/AlexanderView.vue')
    }
  ]
})

export default router
