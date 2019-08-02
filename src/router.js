import Vue from 'vue'
import Router from 'vue-router'
import ChooseFood from './views/ChooseFood.vue'
import Identification from './views/Identification.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Identification
    },
    {
      path: '/choose-food',
      name: 'chooseFood',
      component: ChooseFood
    }
  ]
})
