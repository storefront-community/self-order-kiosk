<template>
  <form class="app-body" @submit.prevent="complete" v-if="$session.started">
    <div class="app-header">
      <div class="container d-flex">
        <router-link :to="{ name: 'chooseCategory' }" class="btn btn-link">
          <i class="fa fa-plus mr-2"></i> Add item
        </router-link>
        <h1 class="display-3 py-2 text-center ml-auto">
          Total: <Currency :amount="order.total" class="text-primary"/>
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div ref="swiper" class="container swiper-container">
        <div class="swiper-wrapper">
          <OrderItemCard class="swiper-slide" v-for="item in order.items" :key="item.id" :item="item"/>
        </div>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="cancelOrder">
          Cancel order
        </button>
        <button type="submit" class="btn btn-primary btn-lg ml-auto">
          <i class="fa fa-check"></i>
          <span class="ml-3">Complete</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Swiper from 'swiper'
import { Currency } from '@/components'
import OrderItemCard from './partials/OrderItemCard'

export default {
  name: 'orderSummary',
  components: {
    Currency,
    OrderItemCard
  },
  data() {
    return {
      order: this.$session.order
    }
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(this.$refs.swiper, {
        slidesPerView: 1,
        spaceBetween: 20,
        direction: 'vertical'
      })
    })
  },
  methods: {
    cancelOrder() {
      this.$router.push({ name: 'cancelOrder' })
    },
    complete() {
      this.$router.push({ name: 'orderComplete' })
    }
  }
}
</script>
