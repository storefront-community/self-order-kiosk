<template>
  <form class="app-body" @submit.prevent="next">
    <div class="app-header">
      <div class="container d-flex align-items-center">
        <div class="rounded-clipping mr-3">
          <img :src="item.imageUrl" class="bla">
        </div>
        <h1 class="display-3 text-right">
          {{ item.name }}<br>
          <small class="text-primary">
            <small>
              <sup>$</sup>
            </small>
            {{ item.price | numeral }}
          </small>
        </h1>
      </div>
    </div>
    <div class="app-content">
      <!-- TODO -->
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          Back
        </button>
        <button type="submit" class="btn btn-primary btn-lg ml-auto">
          <span class="mr-3">1 of 3</span>
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
  },
  computed: {
    item() {
      return this.$state.item
    }
  }
}
</script>
