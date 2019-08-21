<template>
  <form class="app-body" @submit.prevent="add">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          What <span v-if="order.hasItem()">else</span> would you like today?
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <Carousel ref="carousel">
          <Category v-for="category in categories" :key="category.id" :category="category" @click="select(category)" />
        </Carousel>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="cancelOrder">
          Cancel order
        </button>
        <div class="ml-auto px-3 py-3 text-right text-primary">
          Swipe to navigate and tap to select
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { Carousel } from '@/components'
import Category from './Category'

export default {
  name: 'chooseCategory',
  components: {
    Carousel,
    Category
  },
  data() {
    return {
      order: this.$session.order,
      categories: []
    }
  },
  async mounted() {
    if (!this.$session.initialized) return

    this.categories = await this.$api.categories.list()

    this.$nextTick(() => {
      this.$refs.carousel && this.$refs.carousel.load()
    })
  },
  methods: {
    cancelOrder() {
      this.$router.push({ name: 'cancelOrder' })
    },
    select(category) {
      if (this.$refs.carousel.isSliding) return

      this.$session.category = category
      this.$router.push({ name: 'chooseFood' })
    }
  }
}
</script>
