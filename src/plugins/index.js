import api from './api'
import state from './state'

export default {
  install (Vue) {
    Vue.use(api)
    Vue.use(state)
  }
}
