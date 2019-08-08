<template>
  <form class="app-body" @submit.prevent="add">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 text-center">
          What would you like today?
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <FoodTransition class="row mt-3">
          <div class="col-12 col-md-4 col-lg-3 d-flex" v-for="item in items" :key="item.id">
            <div class="card flex-grow-1 mb-4">
              <img :src="item.imageUrl" class="card-img-top" :alt="item.name">
              <div class="card-body d-flex flex-column">
                <p class="card-title flex-grow-1">
                  {{ item.name }}
                </p>
                <p class="card-text text-right">
                  <small><sup>$</sup></small>
                  {{ item.price }}
                </p>
              </div>
            </div>
          </div>
        </FoodTransition>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <router-link :to="{ name: 'cancelOrder' }" class="btn btn-outline-primary btn-lg mr-auto">
          Cancel order
        </router-link>
        <div class="ml-auto px-3 py-3 text-right text-primary">
          Touch the food to select
        </div>
        <!-- <button type="submit" class="btn btn-primary btn-lg ml-auto">
          <span class="mr-3">Add</span>
          <i class="fa fa-plus"></i>
        </button> -->
      </div>
    </div>
  </form>
</template>

<script>
import FoodTransition from '@/transitions/FoodTransition'

export default {
  name: 'chooseFood',
  async mounted() {
    const chunk = (arr, size) =>
      Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );

    this.catalog = await this.$api.catalog.load()
    this.items = this.catalog.itemGroups[0].items
    this.chunk = chunk(this.items, 4)
  },
  data() {
    return {
      items: [],
      chunk: []
    }
  },
  methods: {
    add() {
      this.$router.push({ name: 'customizeFood' })
    }
  },
  components: {
    FoodTransition
  }
}
</script>
