<template>
  <div class="app-body" v-if="order">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 text-center">
          Where would you like to eat?
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <div class="row">
          <div class="col d-flex flex-column">
            <button type="button" class="btn btn-outline-primary py-5" @click="select('eatHere')">
              <i class="fa fa-4x fa-utensils mb-5"></i>
              <p class="display-3">Eat here</p>
            </button>
          </div>
          <div class="col d-flex flex-column">
            <button type="button" class="btn btn-outline-primary py-5" @click="select('takeOut')">
              <i class="fa fa-4x fa-shopping-bag mb-5"></i>
              <p class="display-3">Take out</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="cancelOrder">
          Cancel order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { orderPropMixin, cancelOrderMixin } from '@/mixins'

export default {
  name: 'eatLocation',
  mixins: [
    orderPropMixin,
    cancelOrderMixin
  ],
  methods: {
    select(location) {
      this.order.takeOut = location === 'takeOut'
      const params = { order: this.order }
      this.$router.push({ name: 'chooseCategory', params })
    }
  }
}
</script>
