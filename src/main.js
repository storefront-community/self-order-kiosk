import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import components from './components'
import filters from './filters'
import plugins from './plugins'
import router from './router'
import transitions from './transitions'
import FontAwesome from './FontAwesome'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(components)
Vue.use(filters)
Vue.use(plugins)
Vue.use(transitions)

Vue.use(FontAwesome)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
