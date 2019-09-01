import CategoryApi from './categories'
import ItemApi from './items'
import OptionalApi from './optionals'

class Api {
  constructor() {
    this._locale = ''
    this.categories = new CategoryApi()
    this.items = new ItemApi()
    this.optionals = new OptionalApi()
  }

  get locale() {
    return this._locale
  }

  set locale(value) {
    this._locale = value
    this.items.locale = value
    this.categories.locale = value
    this.optionals.locale = value
  }
}

export default {
  install (Vue) {
    Vue.prototype.$api = new Api()
  }
}
