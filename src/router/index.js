import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/projeto',
    name: 'Projetos',
    component: () => import('../views/ProjetoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
