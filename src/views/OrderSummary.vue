<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
      <IdleTime/>
      <form class="app-body" @submit.prevent="complete">
        <div class="app-header">
          <div class="container d-flex align-items-center">
            <div>{{ $t('title') }}</div>
            <div class="text-right ml-auto">
              <Currency :amount="session.order.total()" class="text-primary font-weight-bold"/>
            </div>
          </div>
        </div>
        <div class="app-content">
          <div ref="swiper" class="container swiper-container h-100">
            <div class="swiper-wrapper">
              <div class="swiper-slide h-100" v-for="item in session.order.items" :key="item.id">
                <OrderItemCard class="swiper-slide" :item="item"/>
              </div>
            </div>
          </div>
        </div>
        <div class="app-footer">
          <div class="container d-flex">
            <button type="button" class="btn btn-outline-primary mr-auto px-md-5 py-md-4 text-nowrap" @click="cancelOrder">
              {{ $t('cancel_order') }}
            </button>
            <div class="btn-group">
              <button type="button" class="btn btn-primary px-md-5 py-md-4 text-nowrap" @click="addItem">
                <FontAwesome icon="plus"/>
                <span class="ml-2">{{ $t('add_item') }}</span>
              </button>
              <button type="submit" class="btn btn-outline-primary ml-auto px-md-5 py-md-4 text-nowrap">
                {{ $t('continue') }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import Swiper from 'swiper'
import { Currency, IdleTime, SafeArea } from '@/components'
import { SlideTransition } from '@/transitions'
import OrderItemCard from './partials/OrderItemCard'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'orderSummary',
  components: {
    Currency,
    IdleTime,
    OrderItemCard,
    SafeArea,
    SlideTransition
  },
  mounted() {
    if (!this.session.started) {
      this.restart()
      return
    }

    this.$nextTick(() => this.initSwipeGesture())
  },
  methods: {
    addItem() {
      this.$router.push({ name: 'chooseItemGroup' })
    },
    cancelOrder() {
      this.$router.push({ name: 'cancelOrder' })
    },
    complete() {
      this.$router.push({ name: 'eatLocation' })
    },
    initSwipeGesture() {
      if (!this.$refs.swiper) return

      new Swiper(this.$refs.swiper, {
        slidesPerView: Math.min(this.session.order.items.length, 2.25),
        centeredSlides: false,
        spaceBetween: 20,
        direction: 'horizontal',
        shadowEnabled: this.session.order.items.length > 1,
        breakpoints: {
          [breakpoints.LG]: {
            slidesPerView: Math.min(this.session.order.items.length, 1.25)
          }
        }
      })
    },
    restart() {
      this.$router.push({ name: 'start' })
    }
  }
}
</script>

<i18n>
{
  "br": {
    "add_item": "Item",
    "cancel_order": "Cancelar",
    "continue": "Pedir",
    "title": "Seu pedido"
  },
  "en": {
    "add_item": "Item",
    "cancel_order": "Cancel",
    "continue": "Send",
    "title": "Your order"
  }
}
</i18n>
