import api from './api'
import app from './app'
import device from './device'
import fullscreen from './fullscreen'
import session from './session'

export default {
  install (Vue) {
    Vue.use(api)
    Vue.use(app)
    Vue.use(device)
    Vue.use(fullscreen)
    Vue.use(session)
  }
}
