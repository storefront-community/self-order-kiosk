import catalog from './catalog'

export default {
  install (Vue) {
    Vue.prototype.$api = {
      catalog: catalog
    }
  }
}
