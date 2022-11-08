import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/works',
      name: 'Works',
      component: () => import('../views/Works.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('../views/Message.vue')
    }
  ]
})

export default router
