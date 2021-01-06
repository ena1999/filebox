import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/dom',
    name: 'Dom',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dom.vue')
  },
  {
    path: '/vozila',
    name: 'Vozila',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vozila.vue')
  },
  {
    path: '/zdravstvo',
    name: 'Zdravstvo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Zdravstvo.vue')
  },
  {
    path: '/alati',
    name: 'Alati',
    component: () => import(/* webpackChunkName: "about" */ '../views/Alati.vue')
  },
  {
    path: '/dokumenti',
    name: 'Dokumenti',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dokumenti.vue')
  },
  {
    path: '/ostalo',
    name: 'Ostalo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ostalo.vue')
  },
  {
    path: '/kalendar',
    name: 'Kalendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kalendar.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
