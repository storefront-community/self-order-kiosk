import categories from './categories'
import items from './items'
import optionals from './optionals'

export default {
  install (Vue) {
    Vue.prototype.$api = {
      categories,
      items,
      optionals
    }
  }
}
