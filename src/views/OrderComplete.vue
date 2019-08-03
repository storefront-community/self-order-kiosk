<template>
  <div class="screen">
    <div class="container container-identification d-flex flex-column">
      <h1 class="display-3 mb-4">
        Yay! Your order is complete.
      </h1>
      <p class="mb-5">
        Thank you! We'll let you know when we finish cooking.
      </p>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="submit" class="btn btn-primary btn-lg ml-auto px-5 py-3" @click="restart">
          <span class="mr-3">Restart</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderComplete',
  methods: {
    restart() {
      this.$router.push({ name: 'identification' })
    }
  }
}
</script>
