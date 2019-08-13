<template>
  <form class="app-body" @submit.prevent="add" v-if="order">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 text-center">
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
import { orderPropMixin, cancelOrderMixin } from '@/mixins'
import Category from './Category'

export default {
  name: 'chooseCategory',
  mixins: [
    orderPropMixin,
    cancelOrderMixin
  ],
  components: {
    Carousel,
    Category
  },
  data() {
    return {
      categories: []
    }
  },
  async mounted() {
    this.categories = await this.$api.categories.list()

    this.$nextTick(() => {
      this.$refs.carousel && this.$refs.carousel.load()
    })
  },
  methods: {
    select(category) {
      if (this.$refs.carousel.isSliding) return

      this.$router.push({
        name: 'chooseFood',
        params: {
          order: this.order,
          category: category
        }
      })
    }
  }
}
</script>
