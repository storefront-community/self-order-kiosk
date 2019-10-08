import ItemGroupApi from './ItemGroupApi'
import ItemApi from './ItemApi'
import OptionGroupApi from './OptionGroupApi'
import OptionApi from './OptionApi'
import SettingsApi from './SettingsApi'

class Api {
  constructor() {
    this._locale = ''
    this._virtualPath = ''
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

  get virtualPath() {
    return this._virtualPath
  }

  set virtualPath(value) {
    this._virtualPath = value ? `/${value}` : ''
    this.items.virtualPath = this._virtualPath
    this.itemGroups.virtualPath = this._virtualPath
    this.optionGroups.virtualPath = this._virtualPath
    this.options.virtualPath = this._virtualPath
    this.settings.virtualPath = this._virtualPath
  }
}

export default {
  install (Vue) {
    Vue.prototype.$api = new Api()
  }
}
