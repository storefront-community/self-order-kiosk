import State from './State'

export default {
  install (Vue) {
    Vue.prototype.$state = new State()
  }
}
