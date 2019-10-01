import ItemGroupApi from './ItemGroupApi'
import ItemApi from './ItemApi'
import OptionGroupApi from './OptionGroupApi'
import OptionApi from './OptionApi'

class Api {
  constructor() {
    this._locale = ''
    this.itemGroups = new ItemGroupApi()
    this.items = new ItemApi()
    this.optionGroups = new OptionGroupApi()
    this.options = new OptionApi()
  }

  get locale() {
    return this._locale
  }

  set locale(value) {
    this._locale = value
    this.items.locale = value
    this.itemGroups.locale = value
    this.optionGroups.locale = value
    this.options.locale = value
  }
}

export default {
  install (Vue) {
    Vue.prototype.$api = new Api()
  }
}
