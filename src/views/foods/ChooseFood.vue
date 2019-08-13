<template>
  <form class="app-body" @submit.prevent="add" v-if="order">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 text-center">
          What would you like today?
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <Carousel ref="carousel">
          <Food v-for="food in foods" :key="food.id" :food="food" @click="select(food)" />
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
import { Category } from '@/models'
import Food from './Food'

export default {
  name: 'chooseFood',
  mixins: [
    orderPropMixin,
    cancelOrderMixin
  ],
  components: {
    Carousel,
    Food
  },
  props: {
    category: {
      type: Category
    }
  },
  data() {
    return {
      foods: []
    }
  },
  async mounted() {
    if (!this.category) return

    this.foods = await this.$api.items.list(this.category.id)

    this.$nextTick(() => {
      this.$refs.carousel && this.$refs.carousel.load()
    })
  },
  methods: {
    select(food) {
      if (this.$refs.carousel.isSliding) return

      this.order.addItem(food)

      this.$router.push({
        name: 'customizeFood',
        params: {
          order: this.order
        }
      })
    }
  }
}
</script>
