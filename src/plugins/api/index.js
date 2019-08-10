import categories from './categories'
import items from './items'

export default {
  install (Vue) {
    Vue.prototype.$api = {
      categories,
      items
    }
  }
}
