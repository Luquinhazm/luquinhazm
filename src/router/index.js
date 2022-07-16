import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/projeto/:id',
    name: 'projeto',
    component: () => import('../views/ProjetoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
