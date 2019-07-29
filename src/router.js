import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MenuBoard from './views/menu-board/MenuBoard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu-board/:contentId',
      name: 'menuBoard',
      component: MenuBoard
    }
  ]
})
