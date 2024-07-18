import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name: 'Home' ,
      component : () => import('../pages/Home.vue') ,
      props : true ,
    },
    {
      path : '/test',
      name: 'Test' ,
      component : () => import('../pages/Test.vue') ,
      props : true ,
    },
  ]
})

export default router
