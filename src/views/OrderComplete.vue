<template>
  <form class="app-body" @submit.prevent="exit">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          Yay! Your order is complete.
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <p class="display-2 text-center">
          Thank you!
        </p>
        <p class="display-3 text-center">
          We'll let you know when we finish cooking.
        </p>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="submit" class="btn btn-primary btn-lg mr-auto">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">Exit</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'orderComplete',
  data() {
    return {
      order: this.$session.order
    }
  },
  methods: {
    exit() {
      this.$router.push({ name: 'start' })
    }
  }
}
</script>
