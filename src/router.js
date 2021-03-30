import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Enterprise from './views/Enterprise.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/enterprise',
        name: 'enterprise',
        component: Enterprise
    }
  ]
})