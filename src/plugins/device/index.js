import contextmenu from './contextmenu'
import os from './os'
import screen from './screen'

export default {
  install (Vue) {
    Vue.prototype.$device = {
      os,
      contextmenu,
      screen
    }
  }
}
