import Vue from 'vue'
import Router from 'vue-router'
import Identification from './views/Identification.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Identification
    }
  ]
})
