import contextmenu from './contextmenu'
import fullscreen from './screen/fullscreen'
import os from './os'
import zoom from './screen/zoom'

export default {
  install (Vue) {
    Vue.prototype.$device = {
      os,
      contextmenu,
      screen: { fullscreen, zoom }
    }
  }
}
