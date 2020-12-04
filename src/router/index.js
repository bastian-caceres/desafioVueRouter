import Vue from 'vue'
import VueRouter from 'vue-router'
import Portada from '../views/Portada.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Portada',
    component: Portada,
    alias: ['/inicio','/principio','/mipagina']
  },
  {
    path: '/redireccion',
    name: 'Redireccion',
    component: () => import(/* webpackChunkName: "Redireccion" */ '../views/Redireccion.vue'),
    redirect: '/nueva_vista'
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: () => import(/* webpackChunkName: "SobreMi" */ '../views/SobreMi')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue')
  },
  // {
  //   path: '/contacto/:idContacto',
  //   name: 'Contacto',
  //   component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue'),
  //   props: (ruta)=>({ 
  //     idContacto: `El id del contaco es: ${ruta.params.idContacto}`
  //   })
  // },
  {
    path: '/post/:nombre',
    name: 'Post',
    component: () => import(/* webpackChunkName: "Post" */ '../views/Post'),
    props: true,
  },
  {
    path: '/administracion/:tipo',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "Post" */ '../views/Administracion'),
    props: true,
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */'../views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
