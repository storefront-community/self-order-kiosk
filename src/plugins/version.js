class AppVersion {
  constructor() {
    this.current = process.env.VUE_APP_VERSION
  }

  isUpToDate(available) {
    return this._onlyNumbers(this.current) >= this._onlyNumbers(available)
  }

  _onlyNumbers(version) {
    return version.replace(/[^\d]/g, '')
  }
}

export default {
  install (Vue) {
    Vue.prototype.$version = new AppVersion()
  }
}
