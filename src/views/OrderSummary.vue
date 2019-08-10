<template>
  <form class="app-body" @submit.prevent="complete" v-if="order">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 text-center">
          Your order summary.
        </h1>
      </div>
    </div>
    <div class="app-content">
      <!-- TODO -->
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
import { orderPropMixin, cancelOrderMixin } from '@/mixins'

export default {
  name: 'orderSummary',
  mixins: [
    orderPropMixin,
    cancelOrderMixin
  ],
  methods: {
    complete() {
      const params = { order: this.order }
      this.$router.push({ name: 'orderComplete', params })
    }
  }
}
</script>
