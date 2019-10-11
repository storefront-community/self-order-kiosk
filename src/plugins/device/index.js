import fullscreen from './screen/fullscreen'
import zoom from './screen/zoom'

function isMobile() {
  return navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
}

export default {
  install (Vue) {
    Vue.prototype.$device = {
      isMobile,
      screen: { fullscreen, zoom }
    }
  }
}
