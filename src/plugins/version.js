import axios from 'axios'

class AppVersion {
  constructor() {
    this.current = process.env.VUE_APP_VERSION
  }

  async isUpToDate() {
    const response = await axios.get('/version.json')
    const version = response.data.version

    return this._onlyNumbers(this.current) >= this._onlyNumbers(version)
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
