import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import filters from './filters'
import plugins from './plugins'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'popper.js'
import 'bootstrap'
import './registerServiceWorker'

Vue.config.productionTip = false

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(filters)
Vue.use(plugins)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
