import api from './api'
import app from './app'
import fullscreen from './fullscreen'
import session from './session'

export default {
  install (Vue) {
    Vue.use(api)
    Vue.use(app)
    Vue.use(fullscreen)
    Vue.use(session)
  }
}
