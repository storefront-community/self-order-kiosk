import Vue from 'vue'
import Router from 'vue-router'
import CancelOrder from './views/CancelOrder.vue'
import ChooseCategory from './views/categories/ChooseCategory.vue'
import ChooseFood from './views/foods/ChooseFood.vue'
import CustomizeFood from './views/foods/CustomizeFood.vue'
import EatLocation from './views/EatLocation.vue'
import Identification from './views/Identification.vue'
import OrderComplete from './views/OrderComplete.vue'
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
      path: '/identification',
      name: 'identification',
      component: Identification,
      meta: { step: 1 }
    },
    {
      path: '/eat-location',
      name: 'eatLocation',
      component: EatLocation,
      meta: { step: 2 }
    },
    {
      path: '/choose-category',
      name: 'chooseCategory',
      component: ChooseCategory,
      meta: { step: 3 }
    },
    {
      path: '/choose-food',
      name: 'chooseFood',
      component: ChooseFood,
      meta: { step: 4 }
    },
    {
      path: '/customize-food',
      name: 'customizeFood',
      component: CustomizeFood,
      meta: { step: 5 }
    },
    {
      path: '/order-summary',
      name: 'orderSummary',
      component: OrderSummary,
      meta: { step: 6 }
    },
    {
      path: '/cancel-order',
      name: 'cancelOrder',
      component: CancelOrder,
      meta: { step: 7 }
    },
    {
      path: '/order-complete',
      name: 'orderComplete',
      component: OrderComplete,
      meta: { step: 8 }
    }
  ]
})
