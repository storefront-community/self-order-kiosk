import Vue from 'vue'
import App from './App.vue'
import filters from './filters'
import plugins from './plugins'
import router from './router'
import 'popper.js'
import 'bootstrap'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(filters)
Vue.use(plugins)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
