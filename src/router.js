import Vue from 'vue'
import Router from 'vue-router'

import CancelOrder from './views/CancelOrder.vue'
import ChooseItemGroup from './views/ChooseItemGroup.vue'
import ChooseItem from './views/ChooseItem.vue'
import CustomizeItem from './views/CustomizeItem.vue'
import EatLocation from './views/EatLocation.vue'
import Identification from './views/Identification.vue'
import Index from './views/Index.vue'
import OrderCompleted from './views/OrderCompleted.vue'
import OrderSummary from './views/OrderSummary.vue'
import StartOrder from './views/StartOrder.vue'
import UpdateAvailable from './views/UpdateAvailable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start-order',
      name: 'startOrder',
      component: StartOrder,
      meta: { step: 1 }
    },
    {
      path: '/choose-item-group',
      name: 'chooseItemGroup',
      component: ChooseItemGroup,
      meta: { step: 2 }
    },
    {
      path: '/choose-item',
      name: 'chooseItem',
      component: ChooseItem,
      meta: { step: 3 }
    },
    {
      path: '/customize-item',
      name: 'customizeItem',
      component: CustomizeItem,
      meta: { step: 4 }
    },
    {
      path: '/order-summary',
      name: 'orderSummary',
      component: OrderSummary,
      meta: { step: 5 }
    },
    {
      path: '/eat-location',
      name: 'eatLocation',
      component: EatLocation,
      meta: { step: 6 }
    },
    {
      path: '/identification',
      name: 'identification',
      component: Identification,
      meta: { step: 7 }
    },
    {
      path: '/cancel-order',
      name: 'cancelOrder',
      component: CancelOrder,
      meta: { step: 8 }
    },
    {
      path: '/order-completed',
      name: 'orderCompleted',
      component: OrderCompleted,
      meta: { step: 8 }
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateAvailable,
      meta: { step: -1 }
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: { step: 0 }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
