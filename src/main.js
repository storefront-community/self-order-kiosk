import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(plugins)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
