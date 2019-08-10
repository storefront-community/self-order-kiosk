import Vue from 'vue'
import Router from 'vue-router'
import CancelOrder from './views/CancelOrder.vue'
import ChooseFood from './views/ChooseFood.vue'
import CustomizeFood from './views/CustomizeFood.vue'
import EatLocation from './views/EatLocation.vue'
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
      meta: { step: 1 },
      props: true
    },
    {
      path: '/eat-location',
      name: 'eatLocation',
      component: EatLocation,
      meta: { step: 2 },
      props: true
    },
    {
      path: '/choose-food',
      name: 'chooseFood',
      component: ChooseFood,
      meta: { step: 3 },
      props: true
    },
    {
      path: '/customize-food',
      name: 'customizeFood',
      component: CustomizeFood,
      meta: { step: 4 },
      props: true
    },
    {
      path: '/order-summary',
      name: 'orderSummary',
      component: OrderSummary,
      meta: { step: 5 },
      props: true
    },
    {
      path: '/cancel-order',
      name: 'cancelOrder',
      component: CancelOrder,
      meta: { step: 6 },
      props: true
    },
    {
      path: '/order-complete',
      name: 'orderComplete',
      component: OrderComplete,
      meta: { step: 6 },
      props: true
    }
  ]
})
