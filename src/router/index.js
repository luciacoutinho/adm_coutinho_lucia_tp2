import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mini_cuentos from '../views/Mini_cuentos.vue'
import Cuento_interactivo from '../views/Cuento_interactivo.vue'
import Cuentos from '../views/Cuentos.vue'
import Editar from '../views/Editar.vue'
import Historia_genio from '../views/Historia_genio.vue'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
 },
 {
  path: '/mini_cuentos/:id',
  name: 'Mini_cuentos',
  component: Mini_cuentos
 },
 {
  path: '/cuento_interactivo',
  name: 'Cuento_interactivo',
  component: Cuento_interactivo

 },

 {
  path: '/cuentos',
  name: 'Cuentos',
  component: Cuentos

 },
 {
  path: '/editar/:titulo/:fecha',
  name: Editar,
  component: Editar
 }, {
  path: '/historia_genio',
  name: 'Historia Genio',
  component: Historia_genio
 }


]

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

export default router