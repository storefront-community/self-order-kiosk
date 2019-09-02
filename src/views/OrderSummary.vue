<template>
  <form class="app-body" @submit.prevent="complete" v-if="$session.started">
    <div class="app-header">
      <div class="container d-flex">
        <router-link :to="{ name: 'chooseCategory' }" class="btn btn-link font-size-lg">

          <i class="fa fa-plus mr-3"></i> {{ $t('add_item') }}
        </router-link>
        <div class="font-size-lg py-2 text-center ml-auto">
          {{ $t('total') }}: <Currency :amount="order.total" class="text-primary"/>
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
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="cancelOrder">
          {{ $t('cancel_order') }}
        </button>
        <button type="submit" class="btn btn-primary btn-lg ml-auto">
          <span class="mr-4">{{ $t('continue') }}</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { SwiperContainer, SwiperSlide } from '@/components'
import { Currency } from '@/components'
import OrderItemCard from './partials/OrderItemCard'

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
      slidesPerView: Math.min(this.order.items.length, 1.25),
      spaceBetween: 20,
      direction: 'horizontal',
      shadowEnabled: this.order.items.length > 1
    })
  },
  methods: {
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
    "add_item": "Adicionar item",
    "cancel_order": "Cancelar pedido",
    "continue": "Continuar",
    "total": "Total"
  },
  "en": {
    "add_item": "Add item",
    "cancel_order": "Cancel order",
    "continue": "Continue",
    "total": "Total"
  }
}
</i18n>
