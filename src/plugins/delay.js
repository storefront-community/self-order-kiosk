const DELAY = 100

function delay(callback) {
  setTimeout(callback, DELAY)
}

export default {
  install (Vue) {
    Vue.prototype.$delay = delay
  }
}
