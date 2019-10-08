import api from './api'
import delay from './delay'
import device from './device'
import fullscreen from './fullscreen'
import interceptors from './interceptors'
import locale from './locale'
import session from './session'
import version from './version'

export default {
  install (Vue) {
    Vue.use(api)
    Vue.use(delay)
    Vue.use(device)
    Vue.use(fullscreen)
    Vue.use(interceptors)
    Vue.use(locale)
    Vue.use(session)
    Vue.use(version)
  }
}
