<template>
  <form class="app-body" @submit.prevent="add" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          {{ category.name }}
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
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          Back
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
import Food from './Food'

export default {
  name: 'chooseFood',
  components: {
    Carousel,
    Food
  },
  data() {
    return {
      category: this.$session.category,
      foods: []
    }
  },
  async mounted() {
    if (!this.$session.started) return

    this.foods = await this.$api.items.list(this.$session.category.id)

    this.$nextTick(() => {
      this.$refs.carousel && this.$refs.carousel.load()
    })
  },
  methods: {
    back() {
      this.$router.push({ name: 'chooseCategory' })
    },
    select(food) {
      if (this.$refs.carousel.isSliding) return

      this.$session.item = food
      this.$router.push({ name: 'customizeFood' })
    }
  }
}
</script>
