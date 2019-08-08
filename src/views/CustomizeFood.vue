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
        <router-link :to="{ name: 'cancelOrder' }" class="btn btn-outline-primary btn-lg mr-auto">
          Cancel order
        </router-link>
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
    next() {
      this.$router.push({ name: 'orderSummary' })
    }
  }
}
</script>
