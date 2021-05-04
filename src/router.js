import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Skills from './views/Skills.vue'
import Experiences from './views/Experiences.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/skills',
        name: 'skills',
        component: Skills
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: Experiences
    }
  ]
})