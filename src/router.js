import Vue from 'vue'
import Router from 'vue-router'
import CancelOrder from './views/CancelOrder.vue'
import ChooseItemGroup from './views/ChooseItemGroup.vue'
import ChooseItem from './views/ChooseItem.vue'
import CustomizeItem from './views/CustomizeItem.vue'
import EatLocation from './views/EatLocation.vue'
import Identification from './views/Identification.vue'
import OrderCompleted from './views/OrderCompleted.vue'
import OrderSummary from './views/OrderSummary.vue'
import Start from './views/Start.vue'
import UpdateAvailable from './views/UpdateAvailable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/burger-place'
    },
    {
      path: '/:tenant/update-available',
      name: 'updateAvailable',
      component: UpdateAvailable
    },
    {
      path: '/:tenant',
      name: 'start',
      component: Start,
      meta: { step: 0 }
    },
    {
      path: '/:tenant/choose-itemGroup',
      name: 'chooseItemGroup',
      component: ChooseItemGroup,
      meta: { step: 1 }
    },
    {
      path: '/:tenant/choose-item',
      name: 'chooseItem',
      component: ChooseItem,
      meta: { step: 2 }
    },
    {
      path: '/:tenant/customize-item',
      name: 'customizeItem',
      component: CustomizeItem,
      meta: { step: 3 }
    },
    {
      path: '/:tenant/order-summary',
      name: 'orderSummary',
      component: OrderSummary,
      meta: { step: 4 }
    },
    {
      path: '/:tenant/eat-location',
      name: 'eatLocation',
      component: EatLocation,
      meta: { step: 5 }
    },
    {
      path: '/:tenant/identification',
      name: 'identification',
      component: Identification,
      meta: { step: 6 }
    },
    {
      path: '/:tenant/cancel-order',
      name: 'cancelOrder',
      component: CancelOrder,
      meta: { step: 7 }
    },
    {
      path: '/:tenant/order-completed',
      name: 'orderCompleted',
      component: OrderCompleted,
      meta: { step: 8 }
    }
  ]
})
