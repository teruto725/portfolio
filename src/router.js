import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
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
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/enterprise',
        name: 'enterprise',
        component: Enterprise
    }
  ]
})