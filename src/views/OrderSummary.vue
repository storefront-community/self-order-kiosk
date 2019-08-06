<template>
  <form class="app-body">
    <div class="app-header">
      <h1>Your order summary.</h1>
    </div>
    <div class="app-content">
      <!-- TODO -->
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">Back</span>
        </button>
        <button type="submit" class="btn btn-primary btn-lg ml-auto" @click="complete">
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
  methods: {
    back() {
      this.$router.push({ name: 'customizeFood' })
    },
    complete() {
      this.$router.push({ name: 'orderComplete' })
    }
  }
}
</script>
