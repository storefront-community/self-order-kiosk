import api from './api'
import app from './app'
import session from './session'

export default {
  install (Vue) {
    Vue.use(api)
    Vue.use(app)
    Vue.use(session)
  }
}
