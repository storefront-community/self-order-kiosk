<template>
  <form class="app-body" @submit.prevent="next" v-if="order">
    <div class="app-header">
      <div class="container d-flex align-items-center">
        <div class="rounded-clipping mr-3">
          <img :src="item.imageUrl" class="bla">
        </div>
        <h1 class="display-3 text-right">
          {{ item.name }}<br>
          <small class="text-primary">
            <small>
              <sup>$</sup>
            </small>
            {{ item.price | numeral }}
          </small>
        </h1>
        <button type="button" class="btn btn-outline-primary ml-auto" @click="change">
          Change
        </button>
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
          <span class="mr-3">1 of 3</span>
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
    change() {
      // TODO
    },
    next() {
      const params = { order: this.order }
      this.$router.push({ name: 'orderSummary', params })
    }
  },
  computed: {
    item() {
      return this.order.lastItem()
    }
  }
}
</script>
