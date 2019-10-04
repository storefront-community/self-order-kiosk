import ItemGroupApi from './ItemGroupApi'
import ItemApi from './ItemApi'
import OptionGroupApi from './OptionGroupApi'
import OptionApi from './OptionApi'
import SettingsApi from './SettingsApi'

class Api {
  constructor() {
    this._locale = ''
    this._tenant = ''
    this.itemGroups = new ItemGroupApi()
    this.items = new ItemApi()
    this.optionGroups = new OptionGroupApi()
    this.options = new OptionApi()
    this.settings = new SettingsApi()
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

  get tenant() {
    return this._tenant
  }

  set tenant(value) {
    this._tenant = value
    this.items.tenant = value
    this.itemGroups.tenant = value
    this.optionGroups.tenant = value
    this.options.tenant = value
    this.settings.tenant = value
  }
}

export default {
  install (Vue) {
    Vue.prototype.$api = new Api()
  }
}
