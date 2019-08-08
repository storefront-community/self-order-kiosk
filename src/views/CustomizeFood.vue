<template>
  <form class="app-body">
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
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">Back</span>
        </button>
        <button type="submit" class="btn btn-primary btn-lg ml-auto" @click="next">
          <span class="mr-3">Next</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'customizeFood',
  methods: {
    back() {
      this.$router.push({ name: 'chooseFood' })
    },
    next() {
      this.$router.push({ name: 'orderSummary' })
    }
  }
}
</script>
