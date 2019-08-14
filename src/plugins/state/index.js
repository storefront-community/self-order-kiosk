import AppState from './AppState'

export default {
  install (Vue) {
    Vue.prototype.$state = new AppState()
  }
}
