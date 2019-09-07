import Vue from 'vue'
import Router from 'vue-router'
import CancelOrder from './views/CancelOrder.vue'
import ChooseCategory from './views/ChooseCategory.vue'
import ChooseItem from './views/ChooseItem.vue'
import CustomizeItem from './views/CustomizeItem.vue'
import EatLocation from './views/EatLocation.vue'
import Identification from './views/Identification.vue'
import OrderCompleted from './views/OrderCompleted.vue'
import OrderSummary from './views/OrderSummary.vue'
import Start from './views/Start.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
      meta: { step: 0 }
    },
    {
      path: '/choose-category',
      name: 'chooseCategory',
      component: ChooseCategory,
      meta: { step: 1 }
    },
    {
      path: '/choose-item',
      name: 'chooseItem',
      component: ChooseItem,
      meta: { step: 2 }
    },
    {
      path: '/customize-item',
      name: 'customizeItem',
      component: CustomizeItem,
      meta: { step: 3 }
    },
    {
      path: '/order-summary',
      name: 'orderSummary',
      component: OrderSummary,
      meta: { step: 4 }
    },
    {
      path: '/eat-location',
      name: 'eatLocation',
      component: EatLocation,
      meta: { step: 5 }
    },
    {
      path: '/identification',
      name: 'identification',
      component: Identification,
      meta: { step: 6 }
    },
    {
      path: '/cancel-order',
      name: 'cancelOrder',
      component: CancelOrder,
      meta: { step: 7 }
    },
    {
      path: '/order-completed',
      name: 'orderCompleted',
      component: OrderCompleted,
      meta: { step: 8 }
    }
  ]
})
