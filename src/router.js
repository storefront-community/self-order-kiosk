import Vue from 'vue'
import Router from 'vue-router'
import ChooseFood from './views/ChooseFood.vue'
import CustomizeFood from './views/CustomizeFood.vue'
import Identification from './views/Identification.vue'
import OrderComplete from './views/OrderComplete.vue'
import OrderSummary from './views/OrderSummary.vue'
import Welcome from './views/Welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: { step: 0 }
    },
    {
      path: '/identification',
      name: 'identification',
      component: Identification,
      meta: { step: 1 }
    },
    {
      path: '/choose-food',
      name: 'chooseFood',
      component: ChooseFood,
      meta: { step: 2 }
    },
    {
      path: '/customize-food',
      name: 'customizeFood',
      component: CustomizeFood,
      meta: { step: 3 }
    },
    {
      path: '/order-summary',
      name: 'orderSummary',
      component: OrderSummary,
      meta: { step: 4 }
    },
    {
      path: '/order-complete',
      name: 'orderComplete',
      component: OrderComplete,
      meta: { step: 5 }
    }
  ]
})
