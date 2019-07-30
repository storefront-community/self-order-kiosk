import menuBoard from './menu-board.js'

export default {
  install (Vue) {
    Vue.prototype.$api = {
      menuBoard: menuBoard
    }
  }
}
