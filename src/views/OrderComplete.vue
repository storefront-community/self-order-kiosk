<template>
  <form class="app-body">
    <div class="app-header">
      <h1>Yay! Your order is complete.</h1>
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
        <button type="submit" class="btn btn-primary btn-lg ml-auto" @click="restart">
          <span class="mr-3">Restart</span>
          <i class="fa fa-redo"></i>
        </button>
      </div>
    </div>
  </form>
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
