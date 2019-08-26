import api from './api'
import session from './session'

export default {
  install (Vue) {
    Vue.use(api)
    Vue.use(session)
  }
}
