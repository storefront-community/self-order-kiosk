<template>
  <div class="screen">
    <div class="container container-identification d-flex flex-column">
      <p class="mb-5">
        Your order summary.
      </p>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto px-5 py-3" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">Back</span>
        </button>
        <button type="submit" class="btn btn-primary btn-lg ml-auto px-5 py-3" @click="complete">
          <span class="mr-3">Complete</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderSummary',
  methods: {
    back() {
      this.$router.push({ name: 'chooseFood' })
    },
    complete() {
      this.$router.push({ name: 'orderComplete' })
    }
  }
}
</script>
