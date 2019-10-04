import api from './api'
import delay from './delay'
import device from './device'
import fullscreen from './fullscreen'
import session from './session'

export default {
  install (Vue) {
    Vue.use(api)
    Vue.use(delay)
    Vue.use(device)
    Vue.use(fullscreen)
    Vue.use(session)
  }
}
