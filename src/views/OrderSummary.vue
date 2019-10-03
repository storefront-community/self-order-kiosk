<template>
  <form class="app-body" @submit.prevent="complete" v-if="$session.started">
    <div class="app-header">
      <div class="container d-flex align-items-center">
        <div>{{ $t('title') }}</div>
        <div class="text-right ml-auto">
          <Currency :amount="order.total()" class="text-primary font-weight-bold"/>
        </div>
      </div>
    </div>
    <div class="app-content">
      <SwiperContainer ref="swiper" class="h-100">
        <SwiperSlide class="h-100" v-for="item in order.items" :key="item.id">
          <OrderItemCard class="swiper-slide" :item="item"/>
        </SwiperSlide>
      </SwiperContainer>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary mr-auto px-md-5 py-md-4 text-nowrap" @click="cancelOrder">
          {{ $t('cancel_order') }}
        </button>
        <div class="btn-group">
          <button type="button" class="btn btn-outline-primary px-md-5 py-md-4 text-nowrap" @click="addItem">
            <i class="fa fa-plus"></i>
            <span class="ml-2">{{ $t('add_item') }}</span>
          </button>
          <button type="submit" class="btn btn-primary ml-auto px-md-5 py-md-4 text-nowrap">
            <span class="mr-3">{{ $t('continue') }}</span>
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { SwiperContainer, SwiperSlide } from '@/components'
import { Currency } from '@/components'
import OrderItemCard from './partials/OrderItemCard'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'orderSummary',
  components: {
    Currency,
    OrderItemCard,
    SwiperContainer,
    SwiperSlide
  },
  data() {
    return {
      order: this.$session.order
    }
  },
  mounted() {
    if (!this.$refs.swiper) return

    this.$refs.swiper.init({
      slidesPerView: Math.min(this.order.items.length, 2.25),
      centeredSlides: false,
      spaceBetween: 20,
      direction: 'horizontal',
      shadowEnabled: this.order.items.length > 1,
      breakpoints: {
        [breakpoints.LG]: {
          slidesPerView: Math.min(this.order.items.length, 1.25)
        }
      }
    })
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
    }
  }
}
</script>

<i18n>
{
  "br": {
    "add_item": "Item",
    "cancel_order": "Cancelar",
    "continue": "Continuar",
    "title": "Seu pedido"
  },
  "en": {
    "add_item": "Item",
    "cancel_order": "Cancel",
    "continue": "Continue",
    "title": "Your order"
  }
}
</i18n>
