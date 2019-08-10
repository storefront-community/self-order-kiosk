<template>
  <form class="app-body" @submit.prevent="next" v-if="order">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 text-center">
          Customize your food.
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
          <span class="mr-3">Next</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { orderPropMixin, cancelOrderMixin } from '@/mixins'

export default {
  name: 'customizeFood',
  mixins: [
    orderPropMixin,
    cancelOrderMixin
  ],
  methods: {
    next() {
      const params = { order: this.order }
      this.$router.push({ name: 'orderSummary', params })
    }
  }
}
</script>
