<template>
  <form class="app-body" @submit.prevent="next" v-if="order">
    <div class="app-content">
      <div class="container container-sm d-flex flex-column">
        <h1 class="display-3 mb-4">
          Hi!
        </h1>
        <p class="mb-5">
          We will only use this information to contact you if necessary.
        </p>
        <div class="mb-4">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="lni-user ml-3"></i>
              </span>
            </div>
            <input type="text" class="form-control form-control-lg border-left-0" placeholder="Your name"
              v-model="order.name" maxlength="20">
          </div>
        </div>
        <div class="mb-4">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="lni-mobile ml-3"></i>
              </span>
            </div>
            <input type="text" class="form-control form-control-lg border-left-0" placeholder="Mobile number"
              v-model="order.mobile" maxlength="20">
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="cancel">
          Never mind
        </button>
        <button type="submit" class="btn btn-primary btn-lg ml-auto">
          <span class="mr-4">Continue</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { orderPropMixin, cancelOrderMixin } from '@/mixins'

export default {
  name: 'identification',
  mixins: [
    orderPropMixin,
    cancelOrderMixin
  ],
  methods: {
    cancel() {
      this.$router.push({ name: 'start' })
    },
    next() {
      const params = { order: this.order }
      this.$router.push({ name: 'eatLocation', params })
    }
  }
}
</script>
