import AppSession from './AppSession'

export default {
  install (Vue) {
    Vue.prototype.$session = new AppSession()
  }
}
