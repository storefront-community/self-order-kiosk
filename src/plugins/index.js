import api from './api'
import device from './device'
import interceptors from './interceptors'
import locale from './locale'
import routeDirection from './routeDirection'
import session from './session'
import version from './version'

export default {
  install (Vue) {
    Vue.use(api)
    Vue.use(device)
    Vue.use(interceptors)
    Vue.use(locale)
    Vue.use(routeDirection)
    Vue.use(session)
    Vue.use(version)
  }
}
