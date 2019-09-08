import axios from 'axios'

class AppInfo {
  async info() {
    const path = `/app.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data
    }

    return null
  }
}

export default {
  install (Vue) {
    Vue.prototype.$app = new AppInfo()
  }
}
