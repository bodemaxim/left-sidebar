import { createRouter, createWebHistory } from 'vue-router'
import MenuSidebar from '../views/MenuSidebar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MenuSidebar
    }
  ]
})

export default router
