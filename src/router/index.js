import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sucursales',
    name: 'Sucursales',
    component: () => import(/* webpackChunkName: "about" */ '../views/sucursales.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/contacto.vue')
  },
  {
    path: '/ingresar',
    name: 'Ingresar',
    component: () => import(/* webpackChunkName: "about" */ '../views/ingresar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
