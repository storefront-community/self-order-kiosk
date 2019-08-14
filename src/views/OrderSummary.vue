<template>
  <form class="app-body" @submit.prevent="complete">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
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
export default {
  name: 'orderSummary',
  data() {
    return {
      order: this.$state.order
    }
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
