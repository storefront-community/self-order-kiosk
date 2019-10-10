import axios from 'axios'
import NotFoundInterceptor from './NotFoundInterceptor'

export default {
  install (Vue) {
    Vue.mixin({
      beforeCreate () {
        axios.interceptors.response.use(...NotFoundInterceptor)
      }
    })
  }
}
