import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers,
})

export default router
